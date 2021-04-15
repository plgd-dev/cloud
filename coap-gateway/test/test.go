package service

import (
	"fmt"
	"os"
	"sync"
	"testing"
	"time"

	"github.com/kelseyhightower/envconfig"
	"github.com/plgd-dev/cloud/coap-gateway/refImpl"
	testCfg "github.com/plgd-dev/cloud/test/config"
	"github.com/stretchr/testify/require"
)

func MakeConfig(t *testing.T) refImpl.Config {
	var gwCfg refImpl.Config
	err := envconfig.Process("", &gwCfg)
	require.NoError(t, err)
	gwCfg.ListenWithoutTLS = false
	gwCfg.Service.Addr = testCfg.GW_HOST
	gwCfg.Service.AuthServerAddr = testCfg.AUTH_HOST
	gwCfg.Service.ResourceAggregateAddr = testCfg.RESOURCE_AGGREGATE_HOST

	gwCfg.Service.ResourceDirectoryAddr = testCfg.RESOURCE_DIRECTORY_HOST
	gwCfg.Service.FQDN = "coap-gateway-" + t.Name()
	gwCfg.Service.OAuth.ClientID = testCfg.OAUTH_MANAGER_CLIENT_ID
	gwCfg.Service.OAuth.Endpoint.TokenURL = testCfg.OAUTH_MANAGER_ENDPOINT_TOKENURL
	gwCfg.Service.OAuth.Audience = testCfg.OAUTH_MANAGER_AUDIENCE
	gwCfg.Service.HeartBeat = time.Second * 4
	gwCfg.Service.KeepaliveTimeoutConnection = time.Second * 90
	gwCfg.Service.TaskQueue.GoroutinePoolSize = 1600
	gwCfg.Service.TaskQueue.Size = 2097152
	gwCfg.Service.DeviceStatusExpiration.ExpiresIn = time.Hour * 24
	gwCfg.Service.MaxMessageSize = 256 * 1024
	gwCfg.Service.DisableBlockWiseTransfer = true

	gwCfg.Listen.File.TLSCertFileName = os.Getenv("TEST_COAP_GW_OVERWRITE_LISTEN_FILE_CERT_NAME")
	gwCfg.Listen.File.TLSKeyFileName = os.Getenv("TEST_COAP_GW_OVERWRITE_LISTEN_FILE_KEY_NAME")
	gwCfg.Listen.File.DisableVerifyClientCertificate = true
	gwCfg.Service.LogMessages = true

	fmt.Printf("CFG\n%v\n", gwCfg)

	return gwCfg
}

func SetUp(t *testing.T) (TearDown func()) {
	return New(t, MakeConfig(t))
}

// New creates test coap-gateway.
func New(t *testing.T, cfg refImpl.Config) func() {

	c, err := refImpl.Init(cfg)
	require.NoError(t, err)

	var wg sync.WaitGroup
	wg.Add(1)

	go func() {
		defer wg.Done()
		c.Serve()
	}()

	return func() {
		c.Shutdown()
		wg.Wait()
	}
}
