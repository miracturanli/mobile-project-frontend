import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Body, Header, Title, View} from "native-base";
import DrawerButton from '../../components/DrawerButton';
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <React.Fragment>
          <Header style={styles.styleHeader2}>
            <DrawerButton navigation={this.props.navigation}></DrawerButton>
            <Body>
              <Title style={styles.styleHeader}>Anasayfa</Title>
            </Body>
          </Header>              		
        </React.Fragment>                   
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
  }
});