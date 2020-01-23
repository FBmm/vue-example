import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
    baseURL: '', // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// 拦截器
service.interceptors.request.use(
    config => {
        // 请求头配置X-TOKEN， TODO: 登录鉴权，web安全性策略，  例如：设置用户登录超时时间 每次请求携带token进行鉴权，如果登录超时则返回登录界面
        // if (store.getters.token) {
        //     // let each request carry token
        //     // ['X-Token'] is a custom headers key
        //     // please modify it according to the actual situation
        //     config.headers['X-Token'] = getToken()
        // }
        console.log(config)
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
);

// 拦截请求成功的响应
// TODO: 拦截业务错误码，在拦截器统一报错
service.interceptors.response.use(
    // res.code = 0 表示正常，其余统一报错
    response => {
      const res = response.data
  
      // if the custom code is not 0, it is judged as an error.
      if (res.code !== 0) {
        Message({
          message: res.msg || 'Error',
          type: 'error',
          duration: 5 * 1000
        })
        // 鉴权失败，或者登录超时等异常码，提示返回登录
        if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
          // to re-login
          MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
            confirmButtonText: 'Re-Login',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }).then(() => {
            // store.dispatch('user/resetToken').then(() => {
            //   location.reload()
            // })
          })
        }
        return Promise.reject(new Error(res.message || 'Error'))
      } else {
        return res
      }
    },
    error => {
      console.log('err' + error) // for debug
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  )
  
  export default service