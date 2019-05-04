import React,{Component} from 'react'
import {Text, StyleSheet, View, Image} from 'react-native'
import * as baseStyle from "../styles/base";
import {Icon as Icons} from "react-native-elements";
import {createStackNavigator,createAppContainer,createBottomTabNavigator} from "react-navigation";

import Conference from './Conference';
import Contact from './Contact';
import Setting from './Setting';


class TabBarIcon extends Component {
    render() {
        return(
            <Icons name='g-translate'color='#00aced' size={20}/>
        )
    }
}

class TabBarIconItem extends Component {
    render(){
        return(
            <Image source={this.props.focused ? this.props.selectedImage : this.props.normalImage}
            style={{tintColor:this.props.tintColor,width:20, height:20}}/>
        )
    }
}

const BottomTabNavBar = createBottomTabNavigator({
        Conference:{
            screen:Conference,
            navigationOptions:  ({navigation, screenProps}) => ({
                tabBarLabel: '首页',
                tabBarIcon:({focused,tintColor}) =>{
                    return <TabBarIcon
                            tintColor={ tintColor }
                            focused={ focused }
                            normalImage={ { uri:baseStyle.globalIcons.sorryImg } }
                            selectedImage={ { uri:baseStyle.globalIcons.sorryImg } }
                    />
                }
            })
        },
        Contact:{
            screen:Contact,
            navigationOptions: ({navigation, screenProps}) => ({
                tabBarLabel: '通讯录',
                headerStyle: {
                    backgroundColor: 'red',
                },
                tabBarIcon:({focused}) =>{
                    return <TabBarIconItem />
                }
            })
        },
        Setting:{
            screen:Setting,
            navigationOptions: ({navigation, screenProps}) => ({
                tabBarLabel: '我'
            })
        }
    },
    {
        tabBarOptions: {
            showIcon: true,
            activeTintColor: 'blue',
            labelStyle: {
                fontSize:18,
            },
            style: {
                backgroundColor: '#d2d2d2 ',
            },
        }
    }
)

const BottomTabNav = createAppContainer(BottomTabNavBar)
export default BottomTabNav