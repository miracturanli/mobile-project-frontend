import React, { Component } from 'react';
import { View, Text,Dimensions ,TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
const {width,height} = Dimensions.get('window');
export default class Duzenle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  duzenleAnayemek = () => {
    this.props.navigation.navigate('duzenleAnayemek');
  }
  duzenleCorba = () => {
    this.props.navigation.navigate('duzenleCorba');
  }
  duzenleSalata = () => {
    this.props.navigation.navigate('duzenleSalata');
  }
  duzenleTatli = () => {
    this.props.navigation.navigate('duzenleTatli');
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.duzenleAnayemek} style={styles.touchStyle}>
            <ImageBackground
                source={require('../../assets/anayemekler.jpg')} 
                style={styles.imageStyle}>
            </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.duzenleCorba} style={styles.touchStyle}>
            <ImageBackground
                source={require('../../assets/corbalar.jpg')} 
                style={styles.imageStyle}>
            </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.duzenleSalata} style={styles.touchStyle}>
            <ImageBackground
                source={require('../../assets/salatalar.jpg')} 
                style={styles.imageStyle}>
            </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.duzenleTatli} style={styles.touchStyle}>
            <ImageBackground
                source={require('../../assets/tatlilar.jpg')} 
                style={styles.imageStyle}>
            </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    touchStyle: {
        width: width,
        height: height/4.5
    },
    imageStyle: {
        flex: 1
    }
});
