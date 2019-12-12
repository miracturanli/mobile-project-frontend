import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class DrawerButton extends Component {
    toggleMenu = () => {
        this.props.navigation.toggleDrawer();
    }
  render() {
    return (
        <TouchableOpacity 
            onPress={this.toggleMenu}
            style={{marginLeft: 10}}>
            <Icon name="ios-menu" size={30}>
            </Icon>
        </TouchableOpacity>
    );
  }
}
