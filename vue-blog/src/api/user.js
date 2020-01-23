import request from '@/utils/request'

export function login(data) {
    console.log(data)
    return request({
        url: '/login',
        method: 'post',
        data
    })
}