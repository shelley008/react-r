import React,{Component} from 'react'
import {Text, StyleSheet, View, Image} from 'react-native'

import { Button,Icon as Icons} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as baseStyle from "../styles/base";

import {storage} from '../config/deviceStorage'



export default class Conference extends Component{
    constructor(props){
        super(props)
        this.state = {
            userAcount:'',
            displayName:'',
        }
    }

    getData(){
        let temp1 = storage.load({
            key:'userProfile'
        }).then( res => {
            return res.profile.displayName
        }).catch(err => {
            console.log(err)
            return 11111111
        })
        console.log('displayName====1=1===',temp1)
    }

    render() {
        return (
          <View>
            <Text>会议列表</Text>
              <Button title='get' onPress={()=>{this.getData()}}/>
            <Button title="Login"  onPress={() => this.props.navigation.navigate('Login')} />
            <Button title="Outline button" type="outline" />
            <Button  icon={ <Icon name="arrow-right" size={15} color="white"/>}  title="Button with i334400000" />
            <View style={{padding:30,flex:1}}>
                <Image source={{ uri: baseStyle.globalIcons.sorryImg}} style={{width: 70, height: 70}}/>
             </View>


            <View style={{padding:30,flex:1}}>
                <Icons name='g-translate'color='#00aced' size={80}/>
            </View>



          </View>
       )
    }
}



const msgStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10
    },
    noDatas: {
        justifyContent: 'center',
        paddingTop: 50,
        alignItems: 'center',
    },
    noDatasImg: {
        justifyContent: 'center',
        padding: 50,
        flex: 1
    },
    noDatasTxt: {
        textAlign: 'center',
        fontSize: 16
    }

});
