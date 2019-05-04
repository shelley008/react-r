import axios from 'axios'


let BASE_API = 'http://cloud.hexmeet.com'

//通用配置的axios实例
const service = axios.create({
    baseURL: BASE_API+"/api/rest/v2.0", // api的base_url
    timeout: 10000 // 请求超时时间
})



// request请求前拦截器
service.interceptors.request.use(config => {
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})


// respone 响应后拦截器
service.interceptors.response.use(function (response) {
    return response
}, function (error) {
    // 处理统一的验证失效错误.
    let errorCode = error.response.data.errorCode ? error.response.data.errorCode : null
    return Promise.reject(error)
})

export default service