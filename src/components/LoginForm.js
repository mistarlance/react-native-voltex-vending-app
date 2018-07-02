import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';

export default class LoginForm extends Component  {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput  style={styles.inputBox} placeholder="Email" placeholderTextColor="#9ac035"/>
        <TextInput  style={styles.inputBox} placeholder="Password" placeholderTextColor="#9ac035" secureTextEntry={true}/>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
  button: {
      backgroundColor: '#9ac035',
      borderRadius: 25,
      marginVertical: 10,
      width: 300,
      paddingVertical: 15
  },
  inputBox: {
    width: 300,
    height: 70,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    color: '#9ac035',
    fontWeight: 'bold'
}
});