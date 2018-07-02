import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

import { Navigation } from 'react-native-navigation';

import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';


import { Actions } from 'react-native-router-flux';

export default class Login extends Component  {
  

  signup(){
    Actions.signup()
  }

  render() {
    return (

      <View style={styles.container}>
          <Logo/>
          <Text style={styles.logoText}>LOGIN</Text>
          <LoginForm type="Log In"/>
          <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Don't have an account yet?</Text>
              <TouchableOpacity onPress={this.signup}>
              <Text style={styles.signupButton}> Sign Up </Text>
              </TouchableOpacity> 
          </View> 
      </View>
  
    ); 
  }
};

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#ffffff',
   flexGrow: 1,
   alignItems: 'center',
   justifyContent: 'center'
  },

  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 16
  },
  signupText: {
    color: '#9ac035',
    fontSize: 16
  },
  signupButton: {
    color:'blue',
    fontSize: 16,
    fontWeight: '500'
  },
  logoText:{
    marginVertical: 17,
    fontSize: 18,
    color: 'grey',
    fontWeight: 'bold',
  }
});






