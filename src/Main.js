import React, { Component } from 'react'
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native'
// import { Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base'
import axios from 'axios'
import Products from './Products'


// http://172.104.50.9:3000/api/Users/logout?access_token=uPhddAMajnm7HtmwfD3wFMJvSGqykr8b5iYO2iRSryZAVv8jARfdRFOdmHncdGxD

// 1. hit api POST logout
// 2. klo berhasil, ASyncStorage token dihapus
// 3. user di redirect ke page login


class Main extends Component {
    // componentDidMount(){
    //     this.logoutHandler()
    // }
    
    render(){
        return (
            <View>
                <Products />
            </View>
        )
    }
}

export default Main