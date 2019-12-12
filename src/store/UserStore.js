import {observable, action} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage'; 
import NavigationService from '../NavigationService';
class UserStore{
    @observable token = null;
    @action async saveToken(token){
        try {         
            await AsyncStorage.setItem('token',token);
            await this.setupUser();
        } catch (e) {
            console.log(e);
        }
    }
    @action async setupUser(){
        await this.getToken();
    }
    @action async getToken(){
        try {
            const token = await AsyncStorage.getItem('token');
            if(!token){
                NavigationService.navigate('User');
                return false;
            }
            this.token = token;
            NavigationService.navigate('App');
        } catch (e) {
            console.log(e);
        }
    }
    @action async removeToken(){
        try {
            await AsyncStorage.removeItem('token');
            this.token = null
            await this.setupUser();
        } catch (e) {
            console.log(e);
        }
    }
}
export default new UserStore();