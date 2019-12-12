import React, { Component } from 'react';
import { View, StyleSheet,Image } from 'react-native';
export default class SignIn extends Component {
  render() {
    return (
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle} 
          source={require('../assets/sebze.jpeg')}>
        </Image>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imageContainer: {
    flex:1,
    alignItems: 'flex-end',
    position: 'relative',
  },  
  imageStyle: {
    width:130,
    height:512,
    alignItems: 'center',
    justifyContent: 'center'
  }
});