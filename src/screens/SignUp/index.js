import React, {Component} from 'react';
import {Body, Header, Title, View} from "native-base";
import { StyleSheet } from 'react-native';
import SignupForm from './SignupForm';
import SebzeComponent from '../../components/SebzeComponent';
export default class Signup extends Component {
	render() {
		return (
      <View style={styles.container}>
          <React.Fragment>
            <Header style={{backgroundColor: '#4285f4'}}>
              <Body>
              <Title style={styles.styleHeader}>Kayıt Ekranı</Title>
              </Body>
            </Header>        
            <SignupForm navigation={this.props.navigation}></SignupForm>   
            <SebzeComponent></SebzeComponent>          		
          </React.Fragment>                   
      </View>
		);
	}
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    position: 'relative'
  },
  styleHeader: {
    alignSelf: 'center'
  } 
});