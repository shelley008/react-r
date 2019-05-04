import {createStackNavigator,createAppContainer} from "react-navigation"
import React from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native'

import HeadGoBackItem from '../../component/headGoBackItem'

import BottomTabNav from '../Home'
import Contact from '../Contact'
import Setting from '../Setting'
import Welcome from '../login/welcome'
import Login from '../login/LoginPage'
import SetPassword from '../login/setPassword'


class TopHeadTitle extends React.Component{
    render(){
        const {navigation} =  this.props
        const title = navigation.getParam('info')

        return (
            <View style={{backgroundColor:'#2089dc',flex:1}}>
                <Text style={{color:'#ffffff'}}>{title}</Text>
            </View>
        )
    }
}


const navigator = createStackNavigator({
    Welcome:{screen:Welcome},
    Login:{
        screen:Login,
        navigationOptions:({navigation})=>{
            return {
                title:navigation.getParam('info')
            }
        }
    },
    SetPassword:{
      screen:SetPassword,
        navigationOptions:{
           title:'找回密码'
        }
    },
    Home:{screen:BottomTabNav}
},{
    initialRouteName: 'Welcome',
    mode:'card',

    // 配置统一的导航栏样式
    defaultNavigationOptions:({navigation})=>{
        return{
            headerStyle:{
                backgroundColor:'#2089dc'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                fontSize:23,
                color:'#f9f9f9'
            },
            headerRight:<TopHeadTitle navigation={navigation}/>,
            headerLeft:<HeadGoBackItem navigation={navigation}/>
        }
    }
})


const App = createAppContainer(navigator)
export default App;
