package test

import (
	"context"
	"sync"
	"testing"
	"time"

	"github.com/plgd-dev/cloud/pkg/log"
	"github.com/plgd-dev/cloud/resource-aggregate/service"
	"github.com/plgd-dev/cloud/test/config"
	"github.com/stretchr/testify/require"
)

func MakeConfig(t *testing.T) service.Config {
	var cfg service.Config

	cfg.APIs.GRPC = config.MakeGrpcServerConfig(config.RESOURCE_AGGREGATE_HOST)

	cfg.Clients.AuthServer.CacheExpiration = time.Second
	cfg.Clients.AuthServer.PullFrequency = time.Millisecond * 500
	cfg.Clients.AuthServer.OwnerClaim = config.OWNER_CLAIM
	cfg.Clients.AuthServer.Connection = config.MakeGrpcClientConfig(config.AUTH_HOST)
	cfg.Clients.AuthServer.OAuth = config.MakeOAuthConfig()

	cfg.Clients.Eventbus.NATS = config.MakePublisherConfig()

	cfg.Clients.Eventstore.Connection.MongoDB = config.MakeEventsStoreMongoDBConfig()
	cfg.Clients.Eventstore.ConcurrencyExceptionMaxRetry = 8
	cfg.Clients.Eventstore.SnapshotThreshold = 16

	err := cfg.Validate()
	require.NoError(t, err)

	return cfg
}

func SetUp(t *testing.T) (TearDown func()) {
	return New(t, MakeConfig(t))
}

func New(t *testing.T, cfg service.Config) func() {
	ctx := context.Background()
	logger, err := log.NewLogger(cfg.Log)
	require.NoError(t, err)

	s, err := service.New(ctx, cfg, logger)
	require.NoError(t, err)

	var wg sync.WaitGroup
	wg.Add(1)
	go func() {
		defer wg.Done()
		err := s.Serve()
		require.NoError(t, err)
	}()

	return func() {
		s.Shutdown()
		wg.Wait()
	}
}
