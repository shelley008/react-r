import request from './request'


//登录请求
export const doLoginRest = data => {
    return request({
        url:'/web/login',
        method:'put',
        data
    })
}