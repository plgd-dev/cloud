package main

import (
	"context"
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

func main() {
	const DB = "evenstore_db"
	const CName = "events_deviceID"
	const Zone = "EU"
	ctx := context.Background()

	client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:29000"))
	if err != nil {
		panic(fmt.Errorf("could not dial database: %w", err))
	}
	err = client.Ping(ctx, readpref.Primary())
	if err != nil {
		panic(fmt.Errorf("could not ping database: %w", err))
	}

	// setup during deployment
	err = client.Database("admin").RunCommand(ctx, bson.D{
		{"addShardToZone", "c1a"},
		{"zone", Zone},
	}).Err()
	if err != nil {
		panic(fmt.Errorf("could addShardToZone: %w", err))
	}

	err = client.Database("admin").RunCommand(ctx, bson.D{
		{
			"enableSharding",
			DB,
		},
	}).Err()
	if err != nil {
		panic(fmt.Errorf("could enableSharding: %w", err))
	}

	// called from Eventstore when collection is created
	t := time.Now()
	err = client.Database("admin").RunCommand(ctx, bson.D{
		{
			"shardCollection",
			DB + "." + CName,
		},
		{
			"key",
			bson.M{
				"_id": 1,
			},
		},
		{
			"unique",
			true,
		},
	}).Err()
	if err != nil {
		panic(fmt.Errorf("shardCollection: %w", err))
	}
	fmt.Printf("shardCollection takes %v\n", time.Now().Sub(t))

	t = time.Now()
	err = client.Database("admin").RunCommand(ctx, bson.D{
		{"updateZoneKeyRange", DB + "." + CName},
		{"min", bson.M{
			"_id": bson.RawValue{
				Type: bson.TypeMinKey,
			},
		}},
		{"max", bson.M{
			"_id": bson.RawValue{
				Type: bson.TypeMaxKey,
			},
		}},
		{"zone", Zone},
	}).Err()
	if err != nil {
		panic(fmt.Errorf("updateZoneKeyRange: %w", err))
	}
	fmt.Printf("updateZoneKeyRange takes %v\n", time.Now().Sub(t))

	err = client.Database(DB).Drop(ctx)
	if err != nil {
		panic(fmt.Errorf("drop: %w", err))
	}
}
