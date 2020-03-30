import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    baseURL:"/",
    method: 'get',
    params,
    timeout: 60000
  })
}
