import {applyMiddleware, createStore} from 'redux'
import rootReducer from './root'
import thunk from 'redux-thunk';  //引入异步中间件
//https://www.jianshu.com/p/b1a039feac26
const logger = store => next => action => {
    let result = next(action);
    return result;
};

let middlewares = [
    logger,
    thunk
];

function configStore(){
    const store = createStore(rootReducer,applyMiddleware(...middlewares))
    return store
}


const store = configStore()
export default store




console.log('store中的数据------------')
console.log(store.getState())
console.log('store中的数据------------')

//通过store注册listener
const storeListener = store.subscribe(function(){
    console.log('------改变后的 store中的数据--------')
    console.log(store.getState())
    console.log('------改变后的 store中的数据--------')
})
storeListener()