import request from '@/utils/request'
import restApi from '@/config/rest'

export function volume_list() {
  return request({
    url: restApi.provision.volume,
    method: 'get'
  })
}
