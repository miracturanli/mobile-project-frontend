import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
const DuzenleButton = props => {
    return (
            <TouchableOpacity style={styles.button} onPress={props.customClick}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
    );
  };
const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#E50914',
      color: '#ffffff',
      padding: 10,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      marginBottom: 5,
      borderRadius: 15,
      opacity: 0.9
    },
    text: {
      color: 'white',
    },
  });
  export default DuzenleButton;