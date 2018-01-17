import React, { Component } from 'react'
import { 
    View, 
    Text, 
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native'
import axios from 'axios'
import { BASE_API_URL } from '../global/util'


class Register extends Component {
    state = {
        email: '',
        password: '',
        passwordConfirm: ''
    } 

    signupHandler(){
        const { email, password, passwordConfirm } = this.state

        if (email === '' || password === '' || passwordConfirm === ''){
            Alert.alert('Warning', 'Email and Password can not be empty!')
        } else {

            if (password === passwordConfirm){
                this.doSignup(email, password)
            } else {
                Alert.alert('Warning', 'Your password and Password Confirmation should be the same')
            }

        }
    }

    doSignup(email, password){
        const url = `${BASE_API_URL}/Users`
        const bodyParam = {
            "email": email,
            "password": password
        }
        axios.post(url, bodyParam)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        console.log(this.props)
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
              <TextInput 
                onChangeText={(confirmPassTxt) => this.setState({ passwordConfirm: confirmPassTxt })}
                secureTextEntry={true}
                placeholder="Password Confirmation" />
            </View>
            <TouchableOpacity onPress={() => this.signupHandler()}
              style={{ marginTop: 25, backgroundColor: 'blue', width: '90%', alignSelf: 'center' }}>
              <Text style={{ margin: 25, color: 'white', fontSize: 20 }}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}
              style={{ marginTop: 25, backgroundColor: 'green', width: '90%', alignSelf: 'center' }}>
              <Text style={{ margin: 25, color: 'white', fontSize: 20 }}>Back to Login Page</Text>
            </TouchableOpacity>
          </View>
        )
    }
}

export default Register