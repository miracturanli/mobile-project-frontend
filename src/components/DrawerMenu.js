import React, { Component } from 'react';
import { View, Text, ImageBackground , StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoutButton from './LogoutButton';
export default class DrawerMenu extends Component {
    navigateToScreen = (route) => () => {
        this.props.navigation.navigate(route);
    };
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('../assets/saglık.jpg')}>
        <ScrollView>
            <TouchableOpacity
                onPress={this.navigateToScreen('Home')} 
                style={styles.homeItem}>
                <Text style={styles.menuText}>Anasayfa          </Text>
                <View style={styles.iconPosition}>
                    <Icon name="ios-home" style={styles.iconStyle}></Icon>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={this.navigateToScreen('Yemek')} 
                style={styles.testItem}>
                <Text style={styles.menuText}>Yiyecek Listesi</Text>
                <View style={styles.iconPosition}>
                    <Icon name="ios-pizza" style={styles.iconStyle}></Icon>
                </View>       
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={this.navigateToScreen('Profil')} 
                style={styles.testItem}>
                <Text style={styles.menuText}>Profil                 </Text>
                <View style={styles.iconPosition}>
                    <Icon name="ios-person" style={styles.iconStyle}></Icon>
                </View>       
            </TouchableOpacity>
        </ScrollView>
        <View style={styles.logoutStyle}>
            <LogoutButton></LogoutButton>
        </View>
        <View style={styles.footer}>
            <Text style={styles.footerText}>Menü</Text>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingVertical: 20
    },
    footer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        paddingVertical: 10
    },
    footerText: {
        fontSize: 15,
        textAlign: 'center',
        color: '#AAB8C2'
        
    },
    homeItem: {
        backgroundColor: '#E50914',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 5,
        opacity: 0.9
    },
    testItem: {
        backgroundColor: '#E50914',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 30,
        marginBottom: 5,
        opacity: 0.9
    },
    menuText: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 20,
    },
    iconStyle: {
        fontSize: 20,
        color: 'white'
    },
    logoutStyle:{
        textAlign: 'center',
        alignItems: 'center',
        opacity: 0.9
    },
    iconPosition:{
        marginLeft: 80
    }
});
