package mongodb

import (
	"context"
	"fmt"
	"time"

	"github.com/plgd-dev/cloud/resource-aggregate/cqrs/eventstore"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func getEventsQueriesToMongoQuery(groupID string, queries []eventstore.GetEventsQuery) (interface{}, *options.FindOptions) {
	opts := options.Find()
	if len(groupID) == 0 {
		return bson.D{}, opts
	}

	return nil, opts

	// opts.SetAllowDiskUse(true)
	// TODO
	// opts.SetProjection(bson.M{
	// 	groupIDKey:     1,
	// 	aggregateIDKey: 1,
	// 	eventsKey: bson.M{
	// 		"$filter": bson.M{
	// 			"input": "$" + eventsKey,
	// 			"as":    eventsKey,
	// 			"cond": bson.M{
	// 				string(signOperator_gte): []string{"$$" + eventsKey + "." + versionKey, "$" + latestSnapshotVersionKey},
	// 			},
	// 		},
	// 	},
	// })
	// if len(queries) == 0 {
	// 	opts.SetHint(groupIDQueryIndex)
	// 	return bson.D{
	// 		{Key: groupIDKey, Value: groupID}, {Key: isActiveKey, Value: true},
	// 	}, opts
	// }

	// opts.SetHint(groupIDaggregateIDQueryIndex)
	// orQueries := make([]bson.D, 0, 32)
	// for _, q := range queries {
	// 	if q.AggregateID != "" {
	// 		orQueries = append(orQueries, bson.D{{Key: groupIDKey, Value: groupID}, {Key: aggregateIDKey, Value: q.AggregateID}, {Key: isActiveKey, Value: true}})
	// 	}
	// }
	// return bson.M{
	// 	"$or": orQueries,
	// }, opts
}

func (s *EventStore) getEvents(ctx context.Context, groupID string, queries []eventstore.GetEventsQuery, eventHandler eventstore.Handler) error {
	filter, opts := getEventsQueriesToMongoQuery(groupID, queries)
	return s.loadEventsQuery(ctx, eventHandler, nil, filter, opts)
}

func getNormalizedGetEventsQuery(queries []eventstore.GetEventsQuery) map[string][]eventstore.GetEventsQuery {
	normalizedQuery := make(map[string][]eventstore.GetEventsQuery)
	for _, query := range queries {
		v, ok := normalizedQuery[query.GroupID]
		if !ok {
			v = make([]eventstore.GetEventsQuery, 0, 1)
		}
		v = append(v, query)
		normalizedQuery[query.GroupID] = v
	}
	return normalizedQuery
}

// Get events from the eventstore.
func (s *EventStore) GetEvents(ctx context.Context, queries []eventstore.GetEventsQuery, eventHandler eventstore.Handler) error {
	s.LogDebugfFunc("mongodb.Evenstore.GetEvents start")
	t := time.Now()
	defer func() {
		s.LogDebugfFunc("mongodb.Evenstore.GetEvents takes %v", time.Since(t))
	}()
	if len(queries) == 0 {
		return fmt.Errorf("not supported")
	}

	normalizedQuery := getNormalizedGetEventsQuery(queries)

	var errors []error
	for groupID, queries := range normalizedQuery {
		s.LogDebugfFunc("GroupID: %v, #queries: %v", groupID, len(queries))
		err := s.getEvents(ctx, groupID, queries, eventHandler)
		if err != nil {
			errors = append(errors, err)
		}
	}
	if len(errors) > 0 {
		return fmt.Errorf("%+v", errors)
	}

	return nil
}
