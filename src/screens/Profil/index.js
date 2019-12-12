import React, { Component } from 'react';
import { StyleSheet,Image,View,Dimensions,TouchableOpacity } from 'react-native';
import {Body, Header, Title} from "native-base";
import DrawerButton from '../../components/DrawerButton';
const { width } = Dimensions.get("window");
import ImagePicker from 'react-native-image-picker';
import UserForm from './UserForm';
const options = {
  title: 'Fotoğraf Ekle',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  takePhotoButtonTitle: 'Fotoğraf Çek',
  chooseFromLibraryButtonTitle: 'Galeriden Seç',
  cancelButtonTitle: 'Vazgeç',
  allowsEditing: true
};
export default class Profil extends Component {
  state = {
    avatarSource: null
  };
  onSelectPicture = () => {
    ImagePicker.showImagePicker(options, (response) => {   
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        const source = { uri: response.uri };
        this.setState({
          avatarSource: source,
        });
      }
    });
  }
  render() {
    const {avatarSource} = this.state;
    return (
        <View style={styles.container}>
            <React.Fragment>
                <Header style={styles.styleHeader2}>
                    <DrawerButton navigation={this.props.navigation}></DrawerButton>
                    <Body>
                        <Title style={styles.styleHeader}>Profil Bilgileri</Title>
                    </Body>
                </Header>  
                <View style={styles.mainStyle}>
                  <TouchableOpacity onPress={this.onSelectPicture}>
                    {
                      avatarSource ? <Image style={styles.imageStyle} source={this.state.avatarSource}></Image> : <Image style={styles.imageStyle} source={require('../../assets/usernone.jpg')}></Image>     
                    }
                  </TouchableOpacity>
                <UserForm></UserForm>
                </View>
            </React.Fragment>                   
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'space-between'
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
        width: width*0.35,
        height: width*0.35,
        borderRadius: width*0.35*0.5,
        marginTop: 30
    },
    mainStyle: {
        flex: 1,
        alignItems: 'center'
    }
  });