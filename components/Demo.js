import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Demo extends Component {  
    render() {  
      return (  
          <View style={{alignItems: 'center'}}>  
            <Text style={styles.welcome}>Hello {this.props.name}!</Text>  
          </View>  
      );  
    }  
  }  

  const styles = StyleSheet.create({  
    welcome: {  
     fontSize: 30,  
   }  
 });  