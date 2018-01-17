import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'
import axios from 'axios'
import { BASE_API_URL } from '../global/util'


export default class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  loginHandler(){
    const { email, password } = this.state  // Destructuring ES6
    console.log(email, password)

    if (email === '' || password === ''){
      Alert.alert('Warning', 'Email or Password can not be empty!')
    } else {
      const url = `${BASE_API_URL}/Users/login`  // ES6 template literals
      const bodyParams = {
        "email": email,
        "password": password
      }
      axios.post(url, bodyParams)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }


  render() {
    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <TextInput 
            onChangeText={(emailTxt) => this.setState({ email: emailTxt })}
            placeholder="Email" />
          <TextInput 
            onChangeText={(passTxt) => this.setState({ password: passTxt })}
            secureTextEntry={true}
            placeholder="Password" />
        </View>
        <TouchableOpacity 
          onPress={() => this.loginHandler()}
          style={{ marginTop: 25, backgroundColor: 'blue', width: '90%', alignSelf: 'center' }}>
          <Text style={{ margin: 25, color: 'white', fontSize: 20 }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('registerPage', { }) }
          style={{ marginTop: 25, backgroundColor: 'green', width: '90%', alignSelf: 'center' }}>
          <Text style={{ margin: 25, color: 'white', fontSize: 20 }}>Register</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
