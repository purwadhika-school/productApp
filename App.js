import React, { Component } from 'react'
import Login from './src/Login'
import Register from './src/Register'
import { StackNavigator } from 'react-navigation'


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
})

export default HomeNavigator