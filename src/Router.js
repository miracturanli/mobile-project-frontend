import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import Profil from './screens/Profil';
import Yemek from './screens/Yemek';
import AuthLoading from './screens/AuthLoading';
import AnaYemek from './screens/Yemek/AnaYemek';
import Corba from './screens/Yemek/Corba';
import Salata from './screens/Yemek/Salata';
import Tatli from './screens/Yemek/Tatli';
import Duzenle from './screens/Yemek/Duzenle';
import duzenleAnayemek from './screens/Yemek/duzenleAnayemek';
import duzenleCorba from './screens/Yemek/duzenleCorba';
import duzenleTatli from './screens/Yemek/duzenleTatli';
import duzenleSalata from './screens/Yemek/duzenleSalata';
import Registeranayemek from './screens/Yemek/Ekle/Registeranayemek';
import Deleteanayemek from './screens/Yemek/Sil/Deleteanayemek';
import Registertatli from './screens/Yemek/Ekle/Registertatli';
import Deletetatli from './screens/Yemek/Sil/Deletetatli';
import Registercorba from './screens/Yemek/Ekle/Registercorba';
import Deletecorba from './screens/Yemek/Sil/Deletecorba';
import Registersalata from './screens/Yemek/Ekle/Registersalata';
import Deletesalata from './screens/Yemek/Sil/Deletesalata';
import { Icon } from 'native-base';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DrawerMenu from './components/DrawerMenu';
const AppStack = createStackNavigator({
    Home:{
        screen: Home,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
});
const ProfilStack = createStackNavigator({
    Profil:{
        screen: Profil,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
});
const YemekStack = createStackNavigator({
    Yemek:{
        screen: Yemek,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
    AnaYemek: {
        screen: AnaYemek,
        navigationOptions: {
          title: 'Ana Yemekler',
          headerStyle: { backgroundColor: '#E50914' },
          headerTintColor: 'white'
        }
    },
    Corba: {
        screen: Corba,
        navigationOptions: {
          title: 'Çorbalar',
          headerStyle: { backgroundColor: '#E50914' },
          headerTintColor: 'white'
        }
    },
    Salata: {
        screen: Salata,
        navigationOptions: {
          title: 'Salatalar',
          headerStyle: { backgroundColor: '#E50914' },
          headerTintColor: 'white'
        }
    },
    Tatli: {
        screen: Tatli,
        navigationOptions: {
          title: 'Tatlılar',
          headerStyle: { backgroundColor: '#E50914' },
          headerTintColor: 'white'
        }
    },
    Duzenle: {
        screen: Duzenle,
        navigationOptions: {
          title: 'Yiyecek Düzenleme Sayfası',
          headerStyle: { backgroundColor: '#E50914' },
          headerTintColor: 'white'
        }
    },
    duzenleAnayemek: {
        screen: duzenleAnayemek,
        navigationOptions: {
          title: 'Anayemek Düzenleme Sayfası',
          headerStyle: { backgroundColor: '#E50914' },
          headerTintColor: 'white'
        }
    },
    duzenleCorba: {
        screen: duzenleCorba,
        navigationOptions: {
          title: 'Çorba Düzenleme Sayfası',
          headerStyle: { backgroundColor: '#E50914' },
          headerTintColor: 'white'
        }
    },
    duzenleSalata: {
        screen: duzenleSalata,
        navigationOptions: {
          title: 'Salata Düzenleme Sayfası',
          headerStyle: { backgroundColor: '#E50914' },
          headerTintColor: 'white'
        }
    },
    duzenleTatli: {
        screen: duzenleTatli,
        navigationOptions: {
          title: 'Tatlı Düzenleme Sayfası',
          headerStyle: { backgroundColor: '#E50914' },
          headerTintColor: 'white'
        }
    },
    Registeranayemek: {
        screen: Registeranayemek,
        navigationOptions: {
          title: 'Ana Yemek Ekle',
          headerStyle: { backgroundColor: '#E50914' },
          headerTintColor: 'white'
        }
    },
    Registertatli: {
        screen: Registertatli,
        navigationOptions: {
          title: 'Tatlı Ekle',
          headerStyle: { backgroundColor: '#E50914' },
          headerTintColor: 'white'
        }
    },
    Registercorba: {
        screen: Registercorba,
        navigationOptions: {
          title: 'Çorba Ekle',
          headerStyle: { backgroundColor: '#E50914' },
          headerTintColor: 'white'
        }
    },
    Registersalata: {
        screen: Registersalata,
        navigationOptions: {
          title: 'Salata Ekle',
          headerStyle: { backgroundColor: '#E50914' },
          headerTintColor: 'white'
        }
    },
    Deleteanayemek: {
        screen: Deleteanayemek,
        navigationOptions: {
          title: 'Ana Yemek Sil',
          headerStyle: { backgroundColor: '#E50914' },
          headerTintColor: 'white'
        }
    },
    Deletetatli: {
        screen: Deletetatli,
        navigationOptions: {
          title: 'Tatlı Sil',
          headerStyle: { backgroundColor: '#E50914' },
          headerTintColor: 'white'
        }
    },
    Deletecorba: {
        screen: Deletecorba,
        navigationOptions: {
          title: 'Çorba Sil',
          headerStyle: { backgroundColor: '#E50914' },
          headerTintColor: 'white'
        }
    },
    Deletesalata: {
        screen: Deletesalata,
        navigationOptions: {
          title: 'Salata Sil',
          headerStyle: { backgroundColor: '#E50914' },
          headerTintColor: 'white'
        }
    },
});
const UserStack = createBottomTabNavigator
(
    {
        SignIn: {
            screen: SignIn,
            navigationOptions: {
                title: 'Giriş',
                tabBarIcon: ({ tintColor }) => <Icon name='log-in' style={{color: tintColor}}></Icon>
            }
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                title: 'Kayıt',
                tabBarIcon: ({ tintColor }) => <Icon name='person' style={{color: tintColor}}></Icon>
            }
        }
    },
    {
        initialRouteName: 'SignIn',
        tabBarOptions: {
            activeTintColor: '#34a853',
            inactiveTintColor: '#ea4335',
            style: {
                backgroundColor: '#fbbc05'
            },
            labelStyle: {
                fontSize: 15
            }
        }
    }
);

const SwitchNavigator = createSwitchNavigator
(
    {
        AuthLoading: {
            screen: AuthLoading
        },
        App: AppStack,
        User: UserStack
    },
    {
        initialRouteName: 'AuthLoading'
    }
);
const Drawer = createDrawerNavigator({
    Ana: {
        screen: SwitchNavigator
    },
    Anasayfa: {
        screen: AppStack,
        navigationOptions:{
            drawerIcon: ({tintColor}) => (
                <Icon
                    name="ios-home"
                    size={20}
                    color={tintColor}>
                </Icon>
            )
        },
    },
    Profil: {
        screen: Profil,
        navigationOptions:{
            drawerIcon: ({tintColor}) => (
                <Icon
                    name="ios-person"
                    size={20}
                    color={tintColor}>
                </Icon>
            )
        },
    },
    Yemek:{
        screen: YemekStack,
        navigationOptions:{
            drawerIcon: ({tintColor}) => (
                <Icon
                    name="ios-home"
                    size={20}
                    color={tintColor}>
                </Icon>
            )
        },
    }
},
{
    drawerWidth: 250,
    contentComponent: DrawerMenu
});
export default createAppContainer(Drawer);