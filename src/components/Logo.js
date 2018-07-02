import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, Text, TextInput, View, Image, StatusBar } from 'react-native';

export default class Logo extends Component  {
  
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../img/logos/appLogo.jpg')} style={{ alignItems: 'center' }} />
        
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
  flexGrow: 1,
   alignItems: 'center',
   justifyContent: 'flex-end'
  }
});