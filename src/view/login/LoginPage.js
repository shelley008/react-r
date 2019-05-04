import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,Dimensions,TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button } from 'react-native-elements';

import {storage} from '../../config/deviceStorage'
import {doLoginRest} from "../../api/login";
import crypto from 'node-forge';
import store from "../../reducers/storeFn";
//import DeviceStorage from '../../config/deviceStorage';
import {setUserInfos,setWorkInfo} from '../../action/settingUser'
import {connect} from "react-redux";



class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            serveAddress:'2222',
            account:'',
            password:'',
            focus: false

        }
        this.deviceSN=''
        this.deviceType='Windows'
        this.domain='local'
        this.tempToken=''
    }

    updateState = (key, text) => {
        this.setState({[key]: text});
    };

    onFocus = () => {
        this.setState({
            focus: true
        });
    };

    onBlur = () => {
        this.setState({
            focus: false
        });
    };


    _doLogin(){
       // this.props.setUser('zgh00001') //发送数据到store中
        let workNew = {
            age:20,
            name:'shelley'
        }
        this.props.setWork(workNew)
        console.log('userInfo all------',this.props.infoAll)
        console.log('global----',this.props.global.domain)
        console.log('work----',this.props.work)

        const {account,password} = this.state
        if(!account){
            console.log('---请输入账号')
            return
        }
        if(!password){
            console.log('----请输入密码')
            return
        }
        //let pwd = crypto.createHash('sha1').update(password, 'utf-8').digest('HEX')
        let pwd = crypto.md.sha1.create().update(password).digest().toHex()

        let params = {
            account:account,
            password:pwd,
            intranet: "false"
        }
        console.log('---param---')
        console.log(params)

        doLoginRest(params).then(res => {
            console.log(res.data)
            this.props.setUser(res.data) //发送数据到store中
            console.log('userInfo token------',this.props.infoAll)
           //  let temp = storage.load({
           //      key:'userProfile'
           //  }).then( res => {
           //      //store.dispatch(userInfo(res)) //发送数据到store中
           //      return res
           //  }).catch(err => {
           //      console.log(err)
           //      return 11111111
           //  })
           //  console.log('token=====1===',temp)
           //
           //  storage.save({
           //          key:'userProfile',
           //          data:res.data,
           //          expires: null
           //   });
           //
           // temp = storage.load({
           //          key:'userProfile'
           // }).then( res => {
           //     // this.props.setUser(res) //发送数据到store中
           //     // console.log('userInfo token------',this.props.infoAll)
           //     return res
           // }).catch(err => {
           //     console.log(err)
           //     return 11111111
           // })
           // console.log('token======2==',temp)
           // DeviceStorage.save(userToken,res.data.token)
            this.props.navigation.navigate('Setting')
        }).catch(err=>{
            console.log(err)
        })
    }


    render(){
        const {navigation} = this.props;
        const {account, password} = this.state;
        const id = navigation.getParam('id')
        const info = navigation.getParam('info')
        const name = navigation.getParam('name')


        return(
            <View style={{margin:10,flex:1,
                display:'flex',
                flexDirection:'column',justifyContent:'center',
               }}>

                {/*<View>*/}
                    {/*<Input*/}
                        {/*placeholder='请输入服务器地址'*/}
                        {/*leftIcon={*/}
                            {/*<Icon*/}
                                {/*name='user'*/}
                                {/*size={24}*/}
                                {/*color='black'*/}
                            {/*/>*/}
                        {/*}*/}
                        {/*value = {account}*/}
                        {/*update={this.updateState}*/}
                    {/*/>*/}
                {/*</View>*/}
                <View style={{marginTop:-100,marginBottom:20}}>
                    <Input placeholder='请输入账号'
                        leftIcon={
                            <Icon
                                name='user'
                                size={24}
                                color='#929292'

                            />
                        }
                        value = {account}
                        id="account"
                        //id="account" update={this.updateState}  value={account}
                       // onChangeText = { account => this.setState({account}) }
                        onChangeText={(text) => this.updateState('account', text)}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}


                    />
                </View>
                <View>
                    <Input
                        placeholder='请输入密码'
                        leftIcon={
                            <Icon
                                name='key'
                                size={24}
                                color='#929292'
                            />
                        }
                        value = {password}
                        id="password"
                        //onChangeText = { password => this.setState({password})
                        //id="password" update={this.updateState}  value={password}
                        onChangeText={(text) => this.updateState('password', text)}
                    />
                </View>
                <View style={{marginTop:40}}>
                    <Button
                            icon={<Icon name="arrow-right" size={15} color="white" />}
                            title='登录'
                            onPress={()=>{this._doLogin()}}
                    ></Button>
                </View>


            </View>
        )
    }
}

const mapStateToProps = state => {
    return{
        info : state.userInfo.info,
        infoAll : state.userInfo,
        global: state.global,
        work:state.work

    }
};

const mapDispatchToProps = dispatch =>{
  return {
      setUser:(data) =>{
          dispatch(setUserInfos(data))
      },
      setWork:(data) => {
          dispatch(setWorkInfo(data))
      }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)

//
//
// <TouchableHighlight style={{margin:20}} onPress={()=>{this._doLogin()}}>
//     <Text style={{backgroundColor:'blue',padding:10,fontSize:25}}>登录</Text>
// </TouchableHighlight>
//
//
//
// <TouchableHighlight style={{margin:20}} onPress={()=>{
//     this.props.navigation.navigate('SetPassword')
// }}>
// <Text style={{backgroundColor:'#ccc',padding:10,fontSize:25}}>找回密码</Text>
// </TouchableHighlight>
//
// <TouchableHighlight style={{margin:20}} onPress={()=>{
//     this.props.navigation.navigate('Home')
// }}>
// <Text style={{backgroundColor:'blue',padding:10,fontSize:25}}>进入首页</Text>
// </TouchableHighlight>