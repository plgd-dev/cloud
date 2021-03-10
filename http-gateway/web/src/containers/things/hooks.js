import { useApi } from '@/common/hooks'
import { useAppConfig } from '@/containers/app'
import { useEmitter } from '@/common/hooks'

import { thingsApiEndpoints, THINGS_STATUS_WS_KEY } from './constants'
import { updateThingsDataStatus } from './utils'

export const useThingsList = () => {
  const { httpGatewayAddress } = useAppConfig()

  // Fetch the data
  const { data, updateData, ...rest } = useApi(
    `${httpGatewayAddress}${thingsApiEndpoints.THINGS}`
  )

  // Update the status list when a WS event is emitted
  useEmitter(THINGS_STATUS_WS_KEY, newDeviceStatus => {
    if (data) {
      // Update the data with the current device status
      updateData(updateThingsDataStatus(data, newDeviceStatus))
    }
  })

  return { data, updateData, ...rest }
}

export const useThingDetails = deviceId => {
  const { httpGatewayAddress } = useAppConfig()

  // Fetch the data
  const { data, updateData, ...rest } = useApi(
    `${httpGatewayAddress}${thingsApiEndpoints.THINGS}/${deviceId}`
  )

  // Update the status when a WS event is emitted
  useEmitter(`${THINGS_STATUS_WS_KEY}.${deviceId}`, ({ status }) => {
    if (data) {
      updateData({ ...data, status })
    }
  })

  return { data, updateData, ...rest }
}