import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {inject,observer} from 'mobx-react';
@inject('UserStore')
@observer
export default class LogoutButton extends Component {
  render() {
    return (
        <TouchableOpacity 
            onPress={()=>this.props.UserStore.removeToken()}
            style={styles.buttonContainer}>
            <Text style={styles.textContainer}>Çıkış</Text>
        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
    buttonContainer: {
        padding: 10,
        backgroundColor: '#FFDC80',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 40,
        width: 70
    },
    textContainer: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
    }
});