import * as types from '../action/actionTypes'


//设置用户信息
export function setUserInfos(data){
    return (dispatch) => {
        dispatch({
            type:types.SET_USERINFOR,
            data:data
        })
    }
}



//工作信息
export function setWorkInfo(data){
    return (dispatch) => {
        dispatch({
            type:types.SET_WORK,
            data:data
        })
    }
}