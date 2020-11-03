package refImpl

import (
	"encoding/json"
	"fmt"

	"github.com/plgd-dev/kit/security/certificateManager"

	"github.com/plgd-dev/cloud/coap-gateway/service"
	"github.com/plgd-dev/kit/log"
)

type Config struct {
	Service          service.Config
	Dial             certificateManager.Config `envconfig:"DIAL"`
	Listen           certificateManager.Config `envconfig:"LISTEN"`
	ListenWithoutTLS bool                      `envconfig:"LISTEN_WITHOUT_TLS"`
	Log              log.Config                `envconfig:"LOG"`
}

type RefImpl struct {
	service           *service.Server
	dialCertManager   *certificateManager.CertificateManager
	listenCertManager *certificateManager.CertificateManager
}

//String return string representation of Config
func (c Config) String() string {
	b, _ := json.MarshalIndent(c, "", "  ")
	return fmt.Sprintf("config: \n%v\n", string(b))
}

// Init creates reference implementation for coap-gateway with default authorization interceptor.
func Init(config Config) (*RefImpl, error) {
	dialCertManager, err := certificateManager.NewCertificateManager(config.Dial)
	if err != nil {
		return nil, fmt.Errorf("cannot create dial cert manager %w", err)
	}

	log.Setup(config.Log)
	log.Info(config.String())

	var listenCertManager *certificateManager.CertificateManager
	if !config.ListenWithoutTLS {
		listenCertManager, err = certificateManager.NewCertificateManager(config.Listen)
		if err != nil {
			dialCertManager.Close()
			return nil, fmt.Errorf("cannot create listen cert manager %w", err)
		}
	}

	return &RefImpl{
		service:           service.New(config.Service, dialCertManager, listenCertManager),
		dialCertManager:   dialCertManager,
		listenCertManager: listenCertManager,
	}, nil
}

// Serve starts handling coap requests.
func (r *RefImpl) Serve() error {
	return r.service.Serve()
}

// Shutdown shutdowns the service.
func (r *RefImpl) Shutdown() error {
	err := r.service.Shutdown()
	r.dialCertManager.Close()
	if r.listenCertManager != nil {
		r.listenCertManager.Close()
	}
	return err
}
