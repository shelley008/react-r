import React from 'react'
import {Provider} from 'react-redux'
import store from '../../reducers/store'
import App from './globalNavigation'

export default class Root extends  React.Component {
    render(){
        return(
            <Provider store={store}>
                  <App />
            </Provider>
        )
    }
}