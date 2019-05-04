import React from 'react';
import {View,Text,StyleSheet,Image,Dimensions,TouchableHighlight} from 'react-native'
import * as baseStyle from "../../styles/base";



export default class Welcome extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props){
        super(props)
        this.timer;
        this.state = {
            seconds :2
         }

    }

    goHome(){
        console.log('---go-home')
        this.props.navigation.navigate('Login',{
            id:110,
            info:'This Login ',
            name:'zgh'
        })
    }


    getSecond(){
        this.timer=setTimeout(()=>{
            this.props.navigation.navigate('Login',{
                id:110,
                info:'Login ',
                name:'guihua'
            });//7秒后进入底部导航主页
        },2000)
    }

    componentDidMount(){
        console.log('did----')
        this.getSecond()
    }


    //卸载计时器
    componentWillUnmount(){
        this.timer&&clearTimeout(this.timer);//同时为真的才执行卸载
    }


    render(){
        return(
            <View style={styles.wrap}>
                <View style={styles.wrapBg}>
                    <Image source={require('../../images/start.png')}  resizeMode={'stretch'} style={styles.imgBg}/>
                </View>
                <TouchableHighlight style={styles.goLogin}
                      onPress={() =>{ this.goHome()}}
                >
                     <Text style={styles.btn}>跳过{this.state.seconds}</Text>
                </TouchableHighlight>



            </View>
        )
    }
}

//先通过Dimensions难拿到屏幕宽度
const win = Dimensions.get('window');

const styles = StyleSheet.create({
     wrap:{
         backgroundColor:'#ccc',
         flex:1
     },
    wrapBg:{
         flex:1,
         position:'absolute',
         left:0,
         right:0,
         bottom:0,
         top:0,
         zIndex:1
    },
    imgBg:{
        width: win.width,
        height:win.height
    },
    goLogin:{
        zIndex: 2,
        position:'absolute',
        right:20,
        top:20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'blue',
        width:110,
        height:40,
        borderRadius: 3,
    },
    btn:{
         color:'#fff',
        fontSize:20
    }
})