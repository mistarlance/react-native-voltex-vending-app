import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';

export default class RegistrationForm extends Component  {
  constructor(props){
    super(props)
  }
  render() {
    return (

    <View style={{flex:5}}>
      
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <TextInput  style={styles.inputBox} placeholder="Title" placeholderTextColor="#9ac035"/>
        <TextInput  style={styles.inputBox} placeholder="Username" placeholderTextColor="#9ac035"/>
        <TextInput  style={styles.inputBox} placeholder="First Name" placeholderTextColor="#9ac035"/>
        <TextInput  style={styles.inputBox} placeholder="Last Name" placeholderTextColor="#9ac035"/>
        <TextInput  style={styles.inputBox} placeholder="Last Name" placeholderTextColor="#9ac035"/>
        <TextInput  style={styles.inputBox} placeholder="Last Name" placeholderTextColor="#9ac035"/>
        <TextInput  style={styles.inputBox} placeholder="Last Name" placeholderTextColor="#9ac035"/>
        <TextInput  style={styles.inputBox} placeholder="Last Name" placeholderTextColor="#9ac035"/>
        <TextInput  style={styles.inputBox} placeholder="Last Name" placeholderTextColor="#9ac035"/>
        <TextInput  style={styles.inputBox} placeholder="Last Name" placeholderTextColor="#9ac035"/>
        <TextInput  style={styles.inputBox} placeholder="Last Name" placeholderTextColor="#9ac035"/>
        <TextInput  style={styles.inputBox} placeholder="Last Name" placeholderTextColor="#9ac035"/>
        <TextInput  style={styles.inputBox} placeholder="Last Name" placeholderTextColor="#9ac035"/>
        
      </ScrollView>

        <View style={{flex:1}}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 2,
   alignItems: 'center',
   justifyContent: 'center'
  },
  contentContainer: {
    paddingVertical: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    paddingVertical: 15
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
    height: 40,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    color: '#9ac035',
    fontWeight: 'bold'
}
});