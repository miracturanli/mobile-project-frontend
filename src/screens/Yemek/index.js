import React, { Component } from 'react';
import { StyleSheet, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import {Body, Header, Title, View, Text} from "native-base";
import DrawerButton from '../../components/DrawerButton';
import MenuButton from '../../components/MenuButton';
export default class Yemek extends Component {
  constructor(props) {
    super(props);
  }
  duzenleFunction = () => {
    this.props.navigation.navigate('Duzenle');
  }
  render() {
    return (
      <View style={styles.container}>
        <React.Fragment>
          <Header style={styles.styleHeader2}>
            <DrawerButton navigation={this.props.navigation}></DrawerButton>
            <Body>
              <Title style={styles.styleHeader}>Yiyecekler</Title>
            </Body>
          </Header>            		
        </React.Fragment>   
        <ImageBackground 
          style={styles.imageStyle}
          source={require('../../assets/anayemek.jpg')}>
        <MenuButton title="Ana Yemekler" customClick={() => this.props.navigation.navigate('AnaYemek')}></MenuButton>
        <MenuButton title="Çorbalar" customClick={() => this.props.navigation.navigate('Corba')}></MenuButton>
        <MenuButton title="Tatlılar" customClick={() => this.props.navigation.navigate('Tatli')}></MenuButton>
        <MenuButton title="Salatalar" customClick={() => this.props.navigation.navigate('Salata')}></MenuButton>
        <TouchableOpacity onPress={this.duzenleFunction}
          style={styles.duzenle}><Text style={{color:'white'}}>Düzenle</Text></TouchableOpacity>
        </ImageBackground>   
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1
  },
  styleHeader: {
    alignSelf:'center',
    marginRight: 30,
  },
  styleHeader2: {
    backgroundColor: '#4285f4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    width: '100%',
    height: '100%'
  },
  duzenle: {
    alignItems:'center',
    backgroundColor:'#E50914',
    padding: 10,
    marginTop: 100,
    opacity: 0.9,
    marginHorizontal: 100,
    borderRadius: 15
  }
});