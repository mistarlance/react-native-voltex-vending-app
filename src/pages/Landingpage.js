import React, { Component } from 'react';
import { StyleSheet, Text,View, TouchableOpacity } from 'react-native';


import Logo from '../components/Logo';

import { Actions } from 'react-native-router-flux';

export default class Landingpage extends Component  {
  
  signup(){
      Actions.signup();
    }

    login(){
      Actions.login();
  }

  render() {
    return (

      <View style={styles.container}>
          <Logo/>
          <Text style={styles.logoText}>VOLTEX LANDING PAGE</Text>
          <View style={styles.signupTextCont}>
              <TouchableOpacity onPress={this.login}><Text style={styles.signupButton}> Log In </Text></TouchableOpacity> 
              <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Register </Text></TouchableOpacity> 
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
    color: 'grey'
  }
});






