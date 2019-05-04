import * as types from '../action/actionTypes'

//设置初始数据
const users = {
    info:'用户基本信息',
    userToken:'',
    profile:{}
}

export function userInfo (state=users,action){
     switch(action.type){
         case types.SET_USERINFOR:
             return Object.assign({},
                 state,
                 {
                     userToken:action.data.token,
                     profile:action.data.profile
                 })
         default: return state
     }
}
