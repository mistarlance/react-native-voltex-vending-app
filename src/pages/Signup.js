import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';


import Logo from '../components/Logo';
import { Actions } from 'react-native-router-flux';
import RegistrationForm from '../components/RegistrationForm';

export default class Signup extends Component  {
  
    login(){
        Actions.login();
    }

  render() {
    return (

      <View style={styles.container}>
          <Logo/>
          <Text style={styles.logoText}>REGISTRATION</Text>
          <RegistrationForm type="Sign Up"/>
          <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Already have an Account?</Text>
              <TouchableOpacity onPress={this.login}><Text style={styles.signupButton}> Sign In </Text></TouchableOpacity> 
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
    fontSize: 16,

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






