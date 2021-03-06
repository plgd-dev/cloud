package subscriber

import (
	"fmt"

	nats "github.com/nats-io/nats.go"
	"github.com/plgd-dev/cloud/pkg/security/certManager/client"
)

type PendingLimitsConfig struct {
	MsgLimit   int `yaml:"msgLimit" json:"msgLimit"`
	BytesLimit int `yaml:"bytesLimit" json:"bytesLimit"`
}

func (c *PendingLimitsConfig) Validate() error {
	if c.MsgLimit == 0 {
		return fmt.Errorf("msgLimit('%v')", c.MsgLimit)
	}
	if c.BytesLimit == 0 {
		return fmt.Errorf("bytesLimit('%v')", c.BytesLimit)
	}
	return nil
}

type Config struct {
	URL           string              `yaml:"url" json:"url"  default:"nats://localhost:4222"`
	TLS           client.Config       `yaml:"tls" json:"tls"`
	PendingLimits PendingLimitsConfig `yaml:"pendingLimits" json:"pendingLimits"`

	Options []nats.Option `yaml:"-" json:"-"`
}

func (c *Config) Validate() error {
	if c.URL == "" {
		return fmt.Errorf("url('%v')", c.URL)
	}
	err := c.PendingLimits.Validate()
	if err != nil {
		return fmt.Errorf("pendingLimits.%w", err)
	}
	err = c.TLS.Validate()
	if err != nil {
		return fmt.Errorf("tls.%w", err)
	}
	return nil
}
