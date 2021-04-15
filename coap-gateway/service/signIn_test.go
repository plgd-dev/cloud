package service_test

import (
	"bytes"
	"context"
	"fmt"
	"log"
	"sync"
	"syscall"
	"testing"
	"time"

	"net/http"
	_ "net/http/pprof"

	"github.com/google/uuid"
	"github.com/plgd-dev/cloud/coap-gateway/uri"
	testCfg "github.com/plgd-dev/cloud/test/config"
	"github.com/plgd-dev/go-coap/v2/message"
	coapCodes "github.com/plgd-dev/go-coap/v2/message/codes"
	"github.com/plgd-dev/go-coap/v2/tcp/message/pool"
	"github.com/plgd-dev/kit/codec/cbor"
	"github.com/plgd-dev/sdk/schema"
	"github.com/stretchr/testify/require"
)

type TestCoapSignInResponse struct {
	ExpiresIn uint64 `json:"-"`
}

type wkRd struct {
	DeviceID   string               `json:"di"`
	Links      schema.ResourceLinks `json:"links"`
	TimeToLive int                  `json:"ttl"`
}

func setLimit() {
	var rLimit syscall.Rlimit
	if err := syscall.Getrlimit(syscall.RLIMIT_NOFILE, &rLimit); err != nil {
		panic(err)
	}
	rLimit.Cur = rLimit.Max
	if err := syscall.Setrlimit(syscall.RLIMIT_NOFILE, &rLimit); err != nil {
		panic(err)
	}

	fmt.Printf("set cur limit: %d", rLimit.Cur)
}

func Test2048(t *testing.T) {
	setLimit()

	go func() {
		log.Println(http.ListenAndServe("localhost:6060", nil))
	}()

	shutdown := setUp(t, true)
	defer shutdown()

	var wg sync.WaitGroup
	wait := time.Minute * 10
	numDevices := 512
	numResources := 514
	for i := 0; i < numDevices; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			co := testCoapDial(t, testCfg.GW_HOST, true)
			if co == nil {
				return
			}
			defer co.Close()
			deviceID := uuid.New()
			testSignUpIn(t, deviceID.String(), co)

			publish := wkRd{
				DeviceID:   deviceID.String(),
				TimeToLive: 86400,
			}
			for j := 0; j < numResources; j++ {
				publish.Links = append(publish.Links, schema.ResourceLink{
					Href:          fmt.Sprintf("/light/%v", j),
					DeviceID:      deviceID.String(),
					ResourceTypes: []string{"x.com.light"},
					Policy: &schema.Policy{
						BitMask: schema.Observable | schema.Discoverable,
					},
				})
			}

			data, err := cbor.Encode(publish)
			require.NoError(t, err)

			resp, err := co.Post(context.Background(), uri.ResourceDirectory, message.AppOcfCbor, bytes.NewReader(data))
			require.NoError(t, err)
			pool.ReleaseMessage(resp)

			max := time.Now().Add(wait)
			for {
				func() {
					ctx, cancel := context.WithTimeout(context.Background(), time.Second)
					defer cancel()
					err := co.Ping(ctx)
					require.NoError(t, err)
				}()
				time.Sleep(time.Second * 20)
				if time.Now().After(max) {
					break
				}
			}
		}()
	}
	wg.Wait()
}

func TestSignInPostHandler(t *testing.T) {
	shutdown := setUp(t)
	defer shutdown()

	co := testCoapDial(t, testCfg.GW_HOST)
	if co == nil {
		return
	}
	defer co.Close()

	signUpResp := testSignUp(t, CertIdentity, co)
	tbl := []testEl{
		{"BadRequest0", input{coapCodes.POST, `{"login": true, "uid": "0", "accesstoken":"` + signUpResp.AccessToken + `" }`, nil}, output{coapCodes.BadRequest, `invalid DeviceId`, nil}},
		{"BadRequest1", input{coapCodes.POST, `{"di": "` + CertIdentity + `", "accesstoken": 123, "login": true}`, nil}, output{coapCodes.BadRequest, `cannot handle sign in: cbor: cannot unmarshal positive integer`, nil}},
		{"BadRequest2", input{coapCodes.POST, `{"di": "` + CertIdentity + `", "accesstoken":"` + signUpResp.AccessToken + `", "login": true }`, nil}, output{coapCodes.BadRequest, `invalid UserId`, nil}},
		{"BadRequest3", input{coapCodes.POST, `{"di": "` + CertIdentity + `", "uid": "0", "login": true }`, nil}, output{coapCodes.BadRequest, `invalid AccessToken`, nil}},
		{"Changed1", input{coapCodes.POST, `{"di": "` + CertIdentity + `", "uid":"` + signUpResp.UserID + `", "accesstoken":"` + signUpResp.AccessToken + `", "login": true }`, nil}, output{coapCodes.Changed, TestCoapSignInResponse{}, nil}},
	}

	for _, test := range tbl {
		tf := func(t *testing.T) {
			testPostHandler(t, uri.SignIn, test, co)
			testPostHandler(t, uri.SecureSignIn, test, co)
		}
		t.Run(test.name, tf)
	}
}

func TestSignOutPostHandler(t *testing.T) {
	shutdown := setUp(t)
	defer shutdown()

	co := testCoapDial(t, testCfg.GW_HOST)
	if co == nil {
		return
	}
	defer co.Close()

	signUpResp := testSignUp(t, CertIdentity, co)
	testSignIn(t, CertIdentity, signUpResp, co)

	tbl := []testEl{
		{"Changed1", input{coapCodes.POST, `{"di": "` + CertIdentity + `", "uid":"` + signUpResp.UserID + `", "accesstoken":"` + signUpResp.AccessToken + `", "login": false }`, nil}, output{coapCodes.Changed, TestCoapSignInResponse{}, nil}},
	}

	for _, test := range tbl {
		tf := func(t *testing.T) {
			testPostHandler(t, uri.SignIn, test, co)
			testPostHandler(t, uri.SecureSignIn, test, co)
		}
		t.Run(test.name, tf)
	}
}
