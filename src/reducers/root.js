import {combineReducers} from "redux";
import {userInfo} from './userInfo';
import {globalInfo} from "./global";
import {workInfo} from './workInfo'
import store from "./storeFn";




const allReducer = {
    global: globalInfo,
    userInfo: userInfo,
    work:workInfo
}


const rootReducer = combineReducers(allReducer)
export default rootReducer