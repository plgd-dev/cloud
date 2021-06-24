package service

import (
	"github.com/plgd-dev/cloud/grpc-gateway/pb"
	"github.com/plgd-dev/cloud/pkg/log"
	"github.com/plgd-dev/cloud/resource-aggregate/commands"
)

type filterBitmask uint64

const (
	filterBitmaskResourceCreatePending       filterBitmask = 1
	filterBitmaskResourceCreated             filterBitmask = 1 << 1
	filterBitmaskResourceRetrievePending     filterBitmask = 1 << 2
	filterBitmaskResourceRetrieved           filterBitmask = 1 << 3
	filterBitmaskResourceUpdatePending       filterBitmask = 1 << 4
	filterBitmaskResourceUpdated             filterBitmask = 1 << 5
	filterBitmaskResourceDeletePending       filterBitmask = 1 << 6
	filterBitmaskResourceDeleted             filterBitmask = 1 << 7
	filterBitmaskDeviceMetadataUpdatePending filterBitmask = 1 << 8
	filterBitmaskDeviceMetadataUpdated       filterBitmask = 1 << 9
	filterBitmaskDeviceRegistered            filterBitmask = 1 << 10
	filterBitmaskDeviceUnregistered          filterBitmask = 1 << 11
	filterBitmaskResourceChanged             filterBitmask = 1 << 12
	filterBitmaskResourcesPublished          filterBitmask = 1 << 13
	filterBitmaskResourcesUnpublished        filterBitmask = 1 << 14
)

func filterPendingCommandToBitmask(f pb.GetPendingCommandsRequest_Command) filterBitmask {
	bitmask := filterBitmask(0)
	switch f {
	case pb.GetPendingCommandsRequest_RESOURCE_CREATE:
		bitmask |= filterBitmaskResourceCreatePending
	case pb.GetPendingCommandsRequest_RESOURCE_RETRIEVE:
		bitmask |= filterBitmaskResourceRetrievePending
	case pb.GetPendingCommandsRequest_RESOURCE_UPDATE:
		bitmask |= filterBitmaskResourceUpdatePending
	case pb.GetPendingCommandsRequest_RESOURCE_DELETE:
		bitmask |= filterBitmaskResourceDeletePending
	case pb.GetPendingCommandsRequest_DEVICE_METADATA_UPDATE:
		bitmask |= filterBitmaskDeviceMetadataUpdatePending
	}
	return bitmask
}

func filterPendingsCommandsToBitmask(commandsFilter []pb.GetPendingCommandsRequest_Command) filterBitmask {
	bitmask := filterBitmask(0)
	if len(commandsFilter) == 0 {
		bitmask = filterBitmaskResourceCreatePending | filterBitmaskResourceRetrievePending | filterBitmaskResourceUpdatePending | filterBitmaskResourceDeletePending | filterBitmaskDeviceMetadataUpdatePending
	} else {
		for _, f := range commandsFilter {
			bitmask |= filterPendingCommandToBitmask(f)
		}
	}
	return bitmask
}

func devicesEventFilterToBitmask(f pb.SubscribeToEvents_CreateSubscription_Event) filterBitmask {
	bitmask := filterBitmask(0)
	switch f {
	case pb.SubscribeToEvents_CreateSubscription_RESOURCE_CREATE_PENDING:
		bitmask |= filterBitmaskResourceCreatePending
	case pb.SubscribeToEvents_CreateSubscription_RESOURCE_CREATED:
		bitmask |= filterBitmaskResourceCreated
	case pb.SubscribeToEvents_CreateSubscription_RESOURCE_RETRIEVE_PENDING:
		bitmask |= filterBitmaskResourceRetrievePending
	case pb.SubscribeToEvents_CreateSubscription_RESOURCE_RETRIEVED:
		bitmask |= filterBitmaskResourceRetrieved
	case pb.SubscribeToEvents_CreateSubscription_RESOURCE_UPDATE_PENDING:
		bitmask |= filterBitmaskResourceUpdatePending
	case pb.SubscribeToEvents_CreateSubscription_RESOURCE_UPDATED:
		bitmask |= filterBitmaskResourceUpdated
	case pb.SubscribeToEvents_CreateSubscription_RESOURCE_DELETE_PENDING:
		bitmask |= filterBitmaskResourceDeletePending
	case pb.SubscribeToEvents_CreateSubscription_RESOURCE_DELETED:
		bitmask |= filterBitmaskResourceDeleted
	case pb.SubscribeToEvents_CreateSubscription_DEVICE_METADATA_UPDATE_PENDING:
		bitmask |= filterBitmaskDeviceMetadataUpdatePending
	case pb.SubscribeToEvents_CreateSubscription_DEVICE_METADATA_UPDATED:
		bitmask |= filterBitmaskDeviceMetadataUpdated
	case pb.SubscribeToEvents_CreateSubscription_REGISTERED:
		bitmask |= filterBitmaskDeviceRegistered
	case pb.SubscribeToEvents_CreateSubscription_UNREGISTERED:
		bitmask |= filterBitmaskDeviceUnregistered
	case pb.SubscribeToEvents_CreateSubscription_RESOURCE_PUBLISHED:
		bitmask |= filterBitmaskResourcesPublished
	case pb.SubscribeToEvents_CreateSubscription_RESOURCE_UNPUBLISHED:
		bitmask |= filterBitmaskResourcesUnpublished
	case pb.SubscribeToEvents_CreateSubscription_RESOURCE_CHANGED:
		bitmask |= filterBitmaskResourceChanged
	}
	return bitmask
}

func devicesEventsFilterToBitmask(commandsFilter []pb.SubscribeToEvents_CreateSubscription_Event) filterBitmask {
	bitmask := filterBitmask(0)
	if len(commandsFilter) == 0 {
		bitmask = filterBitmask(0xffffffff)
	} else {
		for _, f := range commandsFilter {
			bitmask |= devicesEventFilterToBitmask(f)
		}
	}
	return bitmask
}

func toPendingCommands(resource *Resource, commandsFilter filterBitmask, contentEncoder func(ec *commands.Content) (*commands.Content, error)) []*pb.PendingCommand {
	if resource.projection == nil {
		return nil
	}
	pendingCmds := make([]*pb.PendingCommand, 0, 32)
	if commandsFilter&filterBitmaskResourceCreatePending > 0 {
		for _, pendingCmd := range resource.projection.resourceCreatePendings {
			p := pendingCmd.Clone()
			content, err := contentEncoder(p.GetContent())
			if err != nil {
				log.Errorf("cannot send create pending command (%+v): %v", pendingCmd, err)
				continue
			}
			p.Content = content
			pendingCmds = append(pendingCmds, &pb.PendingCommand{
				Command: &pb.PendingCommand_ResourceCreatePending{
					ResourceCreatePending: p,
				},
			})
		}
	}
	if commandsFilter&filterBitmaskResourceRetrievePending > 0 {
		for _, pendingCmd := range resource.projection.resourceRetrievePendings {
			pendingCmds = append(pendingCmds, &pb.PendingCommand{
				Command: &pb.PendingCommand_ResourceRetrievePending{
					ResourceRetrievePending: pendingCmd,
				},
			})
		}
	}
	if commandsFilter&filterBitmaskResourceUpdatePending > 0 {
		for _, pendingCmd := range resource.projection.resourceUpdatePendings {
			p := pendingCmd.Clone()
			content, err := contentEncoder(p.GetContent())
			if err != nil {
				log.Errorf("cannot send update pending command (%+v): %v", pendingCmd, err)
				continue
			}
			p.Content = content
			pendingCmds = append(pendingCmds, &pb.PendingCommand{
				Command: &pb.PendingCommand_ResourceUpdatePending{
					ResourceUpdatePending: p,
				},
			})
		}
	}
	if commandsFilter&filterBitmaskResourceDeletePending > 0 {
		for _, pendingCmd := range resource.projection.resourceDeletePendings {
			pendingCmds = append(pendingCmds, &pb.PendingCommand{
				Command: &pb.PendingCommand_ResourceDeletePending{
					ResourceDeletePending: pendingCmd,
				},
			})
		}
	}
	return pendingCmds
}
