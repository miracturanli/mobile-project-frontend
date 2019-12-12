import React, { Component } from 'react';
import { View , Alert,KeyboardAvoidingView,ScrollView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import DuzenleButton from '../../../components/DuzenleButton';
import DuzenleInput from '../../../components/DuzenleInput';
var db = openDatabase({ name: 'foods.db', createFromLocation : 1});
export default class Registercorba extends Component {
  constructor(props) {
    super(props);
    this.state = {
        corba_photo: '',
        corba_name: ''
    };
  }
  register_corba = () => {
    var that = this;
    const { corba_photo } = this.state;
    const { corba_name } = this.state;
    if (corba_photo) {
      if (corba_name) {
      {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO tbl_corba (corba_photo, corba_name) VALUES (?,?)',
              [corba_photo, corba_name],
              (tx, results) => {
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'çorba Eklendi',
                    'Kayıt Başarılı',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('duzenleCorba'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  alert('Kayıt eklenemedi');
                }
              }
            );
          });
        } 
      } else {
        alert('Name alanını giriniz.');
      }
    } else {
      alert('Photo Url alanını giriniz.');
    }
  };
  render() {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
                behavior="padding"
                style={{ flex: 1, justifyContent: 'space-between' }}>
                <DuzenleInput
                    placeholder="Enter photo"
                    onChangeText={corba_photo => this.setState({ corba_photo })}
                    maxLength={600}
                    style={{ padding:10 }}
                />
                <DuzenleInput
                    placeholder="Enter name"
                    onChangeText={corba_name => this.setState({ corba_name })}
                    maxLength={100}
                    style={{ padding:10 }}
                />
                <DuzenleButton
                title="Submit"
                customClick={this.register_corba.bind(this)}
                />
            </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
  }
}
