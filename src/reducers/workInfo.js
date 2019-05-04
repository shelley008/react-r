import * as types from '../action/actionTypes'


//设置初始数据
const initWork = {
    work:'design',
    address:'Beijing',
    name:'huahua'
}


export function workInfo (state=initWork,action){
    switch(action.type){
        case types.SET_WORK:
             return Object.assign({},state,{age:action.data.age,name:action.data.name})
        default:return state
    }
}