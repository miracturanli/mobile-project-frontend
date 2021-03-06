import React, { Component } from 'react';
import { View, Text, StyleSheet,ImageBackground,Dimensions } from 'react-native';
import DuzenleButton from '../../components/DuzenleButton';
const {width,height} = Dimensions.get('window');
export default class duzenleAnayemek extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground source={require('../../assets/anayc.jpg')} style={styles.touchStyle}>
        <View style={styles.Component}>
          <DuzenleButton title="Ekle" customClick={() => this.props.navigation.navigate('Registercorba')}></DuzenleButton>
          <DuzenleButton title="Sil" customClick={() => this.props.navigation.navigate('Deletecorba')}></DuzenleButton>
        </View>
      </ImageBackground>

    );
  }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    touchStyle: {
      width,
      height
    }
});
