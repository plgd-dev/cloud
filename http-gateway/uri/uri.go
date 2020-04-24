package uri

// KiConnect API URIs.
const (
	ResourceLinkHrefKey string = "resourceLinkHref"
	DeviceIDKey         string = "deviceId"

	InterfaceQueryKey      string = "interface"
	SkipShadowQueryKey     string = "skipShadow"
	DeviceIDFilterQueryKey string = "deviceId"
	TypeFilterQueryKey     string = "type"

	API string = "/api/v1"
	//client
	ClientConfiguration = API + "/client-configuration"

	//devices
	Devices         = API + "/devices"
	Device          = Devices + "/{" + DeviceIDKey + "}"
	DeviceResources = Device + "/"

	//maintenance
	DeviceReboot       = Device + "/reboot"
	DeviceFactoryReset = Device + "/factory-reset"

	//ws
	WS                                = "/ws"
	WSDevices                         = API + WS + "/devices"
	WsStartDevicesObservation         = WSDevices
	WsStartDeviceResourcesObservation = WSDevices + "/{" + DeviceIDKey + "}"
	WsStartDeviceResourceObservation  = WsStartDeviceResourcesObservation + "/"
)
