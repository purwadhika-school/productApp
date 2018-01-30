import React, { Component } from 'react'
import Login from './src/Login'
import Register from './src/Register'
import Main from './src/Main'
import ProductDetails from './src/Product_detail'
import { StackNavigator } from 'react-navigation'
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native'
import axios from 'axios'


const logoutHandler = async () => {
  const dataToken = await AsyncStorage.getItem('token')
  console.log(dataToken)
  const url = `http://172.104.50.9:3000/api/Users/logout?access_token=${dataToken}`
  console.log(url)
  axios.post(url)
      .then(res => {
          AsyncStorage.removeItem('token')
          // this.props.navigation.goBack()
      })
      .catch(err => {
          console.log(err)
      })
}


const HomeNavigator = StackNavigator({
  loginPage: {
    screen: Login,
    navigationOptions: {
      header: null
    },
  },
  registerPage: {
    screen: Register,
    navigationOptions: {
      header: null
    },
  },
  mainPage: {
    screen: Main,
    navigationOptions: {
      headerTitle: 'Products',
      headerLeft: null,
      headerRight: (<TouchableOpacity onPress={() => logoutHandler()}>
        <Text style={{ 
            color: 'red',
            fontWeight: '600',
            marginRight: 15
        }}>Logout</Text> 
      </TouchableOpacity>)
    }
  },
  productDetails: {
    screen: ProductDetails,
    navigationOptions: {
      headerTitle: 'Product Detail'
    }
  }
})

export default HomeNavigator