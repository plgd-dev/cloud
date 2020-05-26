package service

import (
	"encoding/json"
	"fmt"

	"github.com/go-ocf/kit/security/oauth/manager"
)

// Config represent application configuration
type Config struct {
	OAuth                 manager.Config `envconfig:"OAUTH"`
	ResourceDirectoryAddr string         `envconfig:"RESOURCE_DIRECTORY_ADDRESS"  default:"127.0.0.1:9100"`
}

//String return string representation of Config
func (c Config) String() string {
	b, _ := json.MarshalIndent(c, "", "  ")
	return fmt.Sprintf("config: \n%v\n", string(b))
}
