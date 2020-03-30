import request from '@/utils/request'
import restApi from '@/config/rest'

export function getVolumeList() {
  return request({
    url: restApi.provision.volume,
    method: 'get'
  })
}
