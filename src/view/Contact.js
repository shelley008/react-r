import React,{Component} from 'react'
import {Text,StyleSheet,View} from 'react-native'

import { Icon } from 'react-native-elements'


export default class Contact extends Component{
    static navigationOption = {
        title:'HomeScreen'
    }

    render() {
        return (
            <View>
                 <Text>contact</Text>
            <Icon
        name='rowing' />

            <Icon
        name='g-translate'
        color='#00aced' />

            <Icon
        name='sc-telegram'
        type='evilicon'
        color='#517fa4'
            />
            </View>
        )
    }
}



const styles = StyleSheet.create({

})