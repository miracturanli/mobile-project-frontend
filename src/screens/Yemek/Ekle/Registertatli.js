import React, { Component } from 'react';
import { View , Alert,KeyboardAvoidingView,ScrollView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import DuzenleButton from '../../../components/DuzenleButton';
import DuzenleInput from '../../../components/DuzenleInput';
var db = openDatabase({ name: 'foods.db', createFromLocation : 1});
export default class Registertatli extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tatli_photo: '',
        tatli_name: ''
    };
  }
  register_tatli = () => {
    var that = this;
    const { tatli_photo } = this.state;
    const { tatli_name } = this.state;
    if (tatli_photo) {
      if (tatli_name) {
      {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO tbl_tatli (tatli_photo, tatli_name) VALUES (?,?)',
              [tatli_photo, tatli_name],
              (tx, results) => {
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'tatlı Eklendi',
                    'Kayıt Başarılı',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('duzenleTatli'),
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
                    onChangeText={tatli_photo => this.setState({ tatli_photo })}
                    maxLength={600}
                    style={{ padding:10 }}
                />
                <DuzenleInput
                    placeholder="Enter name"
                    onChangeText={tatli_name => this.setState({ tatli_name })}
                    maxLength={100}
                    style={{ padding:10 }}
                />
                <DuzenleButton
                title="Submit"
                customClick={this.register_tatli.bind(this)}
                />
            </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
  }
}
