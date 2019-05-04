import React from "react";
import {TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class HeadGoBackItem extends React.Component {
    render(){
        const {navigation} = this.props

        return(
            <TouchableOpacity onPress={()=>{
                navigation.pop()
            }}>
                <Icon name="angle-left" size={30} color="#e6e6e6" />
            </TouchableOpacity>
        )
    }
}
