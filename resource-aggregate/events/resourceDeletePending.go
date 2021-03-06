package events

import (
	"time"

	pkgTime "github.com/plgd-dev/cloud/pkg/time"
	"google.golang.org/protobuf/proto"
)

const eventTypeResourceDeletePending = "resourcedeletepending"

func (e *ResourceDeletePending) Version() uint64 {
	return e.GetEventMetadata().GetVersion()
}

func (e *ResourceDeletePending) Marshal() ([]byte, error) {
	return proto.Marshal(e)
}

func (e *ResourceDeletePending) Unmarshal(b []byte) error {
	return proto.Unmarshal(b, e)
}

func (e *ResourceDeletePending) EventType() string {
	return eventTypeResourceDeletePending
}

func (e *ResourceDeletePending) AggregateID() string {
	return e.GetResourceId().ToUUID()
}

func (e *ResourceDeletePending) GroupID() string {
	return e.GetResourceId().GetDeviceId()
}

func (e *ResourceDeletePending) IsSnapshot() bool {
	return false
}

func (e *ResourceDeletePending) Timestamp() time.Time {
	return pkgTime.Unix(0, e.GetEventMetadata().GetTimestamp())
}

func (e *ResourceDeletePending) CopyData(event *ResourceDeletePending) {
	e.ResourceId = event.GetResourceId()
	e.AuditContext = event.GetAuditContext()
	e.EventMetadata = event.GetEventMetadata()
}
