import React from 'react';
import {View,Text,TouchableHighlight} from 'react-native';




export default class SetPassword extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <Text>
                    找回密码
                </Text>

                <TouchableHighlight style={{margin:10}} onPress={()=>{
                    this.props.navigation.navigate('Login')
                }}>
                    <Text style={{backgroundColor:'#ccc'}}>返回Login</Text>
                </TouchableHighlight>
            </View>
        )
    }

}