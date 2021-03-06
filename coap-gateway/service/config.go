package service

import (
	"fmt"
	"strings"
	"time"

	"github.com/plgd-dev/cloud/pkg/config"
	"github.com/plgd-dev/cloud/pkg/log"
	"github.com/plgd-dev/cloud/pkg/net/grpc/client"
	certManagerServer "github.com/plgd-dev/cloud/pkg/security/certManager/server"
	client2 "github.com/plgd-dev/cloud/pkg/security/oauth/manager"
	"github.com/plgd-dev/cloud/pkg/sync/task/queue"
	"github.com/plgd-dev/cloud/resource-aggregate/cqrs/eventbus/nats/subscriber"
)

//Config represent application configuration
type Config struct {
	Log       LogConfig     `yaml:"log" json:"log"`
	APIs      APIsConfig    `yaml:"apis" json:"apis"`
	Clients   ClientsConfig `yaml:"clients" json:"clients"`
	TaskQueue queue.Config  `yaml:"taskQueue" json:"taskQueue"`
}

func (c *Config) Validate() error {
	err := c.APIs.Validate()
	if err != nil {
		return fmt.Errorf("apis.%w", err)
	}
	err = c.Clients.Validate()
	if err != nil {
		return fmt.Errorf("clients.%w", err)
	}
	err = c.TaskQueue.Validate()
	if err != nil {
		return fmt.Errorf("taskQueue.%w", err)
	}
	return nil
}

//Config represent application configuration
type LogConfig struct {
	Embedded         log.Config `yaml:",inline" json:",inline"`
	DumpCoapMessages bool       `yaml:"dumpCoapMessages" json:"dumpCoapMessages"`
}

type APIsConfig struct {
	COAP COAPConfig `yaml:"coap" json:"coap"`
}

func (c *APIsConfig) Validate() error {
	err := c.COAP.Validate()
	if err != nil {
		return fmt.Errorf("coap.%w", err)
	}
	return nil
}

type COAPConfig struct {
	Addr                     string                  `yaml:"address" json:"address"`
	ExternalAddress          string                  `yaml:"externalAddress" json:"externalAddress"`
	MaxMessageSize           int                     `yaml:"maxMessageSize" json:"maxMessageSize" default:"262144"`
	GoroutineSocketHeartbeat time.Duration           `yaml:"goroutineSocketHeartbeat" json:"goroutineSocketHeartbeat" default:"4s"`
	KeepAlive                KeepAlive               `yaml:"keepAlive" json:"keepAlive"`
	BlockwiseTransfer        BlockwiseTransferConfig `yaml:"blockwiseTransfer" json:"blockwiseTransfer"`
	TLS                      TLSConfig               `yaml:"tls" json:"tls"`
}

func (c *COAPConfig) Validate() error {
	if c.Addr == "" {
		return fmt.Errorf("address('%v')", c.Addr)
	}
	if c.ExternalAddress == "" {
		return fmt.Errorf("externalAddress('%v')", c.ExternalAddress)
	}
	if c.MaxMessageSize <= 64 {
		return fmt.Errorf("maxMessageSize('%v')", c.MaxMessageSize)
	}
	if c.GoroutineSocketHeartbeat <= 0 {
		return fmt.Errorf("goroutineSocketHeartbeat('%v')", c.GoroutineSocketHeartbeat)
	}
	err := c.KeepAlive.Validate()
	if err != nil {
		return fmt.Errorf("keepAlive.%w", err)
	}
	err = c.BlockwiseTransfer.Validate()
	if err != nil {
		return fmt.Errorf("blockwiseTransfer.%w", err)
	}
	err = c.TLS.Validate()
	if err != nil {
		return fmt.Errorf("tls.%w", err)
	}
	return nil
}

type TLSConfig struct {
	Enabled  bool                     `yaml:"enabled" json:"enabled"`
	Embedded certManagerServer.Config `yaml:",inline" json:",inline"`
}

type KeepAlive struct {
	Timeout time.Duration `yaml:"timeout" json:"timeout"`
}

func (c *KeepAlive) Validate() error {
	if c.Timeout < time.Second {
		return fmt.Errorf("timeout('%v')", c.Timeout)
	}
	return nil
}

type BlockwiseTransferConfig struct {
	Enabled bool   `yaml:"enabled" json:"enabled" default:"true"`
	SZX     string `yaml:"blockSize" json:"blockSize" default:"1024"`
}

func (c *BlockwiseTransferConfig) Validate() error {
	if !c.Enabled {
		return nil
	}
	switch strings.ToLower(c.SZX) {
	case "16", "32", "64", "128", "256", "512", "1024", "bert":
	default:
		return fmt.Errorf("blockSize('%v')", c.SZX)
	}
	return nil
}

func (c *TLSConfig) Validate() error {
	if !c.Enabled {
		return nil
	}
	err := c.Embedded.Validate()
	if err != nil {
		return err
	}
	return nil
}

type EventBusConfig struct {
	NATS subscriber.Config `yaml:"nats" json:"nats"`
}

func (c *EventBusConfig) Validate() error {
	err := c.NATS.Validate()
	if err != nil {
		return fmt.Errorf("nats.%w", err)
	}
	return nil
}

type AuthorizationServerConfig struct {
	Connection client.Config    `yaml:"grpc" json:"grpc"`
	OAuth      client2.ConfigV2 `yaml:"oauth" json:"oauth"`
}

func (c *AuthorizationServerConfig) Validate() error {
	err := c.OAuth.Validate()
	if err != nil {
		return fmt.Errorf("oauth.%w", err)
	}
	err = c.Connection.Validate()
	if err != nil {
		return fmt.Errorf("grpc.%w", err)
	}
	return err
}

type ClientsConfig struct {
	Eventbus          EventBusConfig            `yaml:"eventBus" json:"eventBus"`
	AuthServer        AuthorizationServerConfig `yaml:"authorizationServer" json:"authorizationServer"`
	ResourceAggregate ResourceAggregateConfig   `yaml:"resourceAggregate" json:"resourceAggregate"`
	ResourceDirectory GrpcServerConfig          `yaml:"resourceDirectory" json:"resourceDirectory"`
}

func (c *ClientsConfig) Validate() error {
	err := c.AuthServer.Validate()
	if err != nil {
		return fmt.Errorf("authorizationServer.%w", err)
	}
	err = c.Eventbus.Validate()
	if err != nil {
		return fmt.Errorf("eventbus.%w", err)
	}
	err = c.AuthServer.Validate()
	if err != nil {
		return fmt.Errorf("authorizationServer.%w", err)
	}
	err = c.ResourceAggregate.Validate()
	if err != nil {
		return fmt.Errorf("resourceAggregate.%w", err)
	}
	err = c.ResourceDirectory.Validate()
	if err != nil {
		return fmt.Errorf("resourceDirectory.%w", err)
	}
	return nil
}

type GrpcServerConfig struct {
	Connection client.Config `yaml:"grpc" json:"grpc"`
}

func (c *GrpcServerConfig) Validate() error {
	err := c.Connection.Validate()
	if err != nil {
		return fmt.Errorf("grpc.%w", err)
	}
	return err
}

type ResourceAggregateConfig struct {
	Connection             client.Config                `yaml:"grpc" json:"grpc"`
	DeviceStatusExpiration DeviceStatusExpirationConfig `yaml:"deviceStatusExpiration" json:"deviceStatusExpiration"`
}

func (c *ResourceAggregateConfig) Validate() error {
	err := c.Connection.Validate()
	if err != nil {
		return fmt.Errorf("grpc.%w", err)
	}
	err = c.DeviceStatusExpiration.Validate()
	if err != nil {
		return fmt.Errorf("deviceStatusExpiration.%w", err)
	}
	return err
}

type DeviceStatusExpirationConfig struct {
	Enabled   bool          `yaml:"enabled" json:"enabled"`
	ExpiresIn time.Duration `yaml:"expiresIn" json:"expiresIn"`
}

func (c *DeviceStatusExpirationConfig) Validate() error {
	if !c.Enabled {
		return nil
	}
	if c.ExpiresIn < time.Second {
		return fmt.Errorf("expiresIn('%v')", c.ExpiresIn)
	}
	return nil
}

//String return string representation of Config
func (c Config) String() string {
	return config.ToString(c)
}
