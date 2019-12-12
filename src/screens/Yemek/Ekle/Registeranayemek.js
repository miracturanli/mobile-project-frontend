import React, { Component } from 'react';
import { View, Text , Alert,KeyboardAvoidingView,ScrollView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import DuzenleButton from '../../../components/DuzenleButton';
import DuzenleInput from '../../../components/DuzenleInput';
var db = openDatabase({ name: 'foods.db', createFromLocation : 1});
export default class Registeranayemek extends Component {
  constructor(props) {
    super(props);
    this.state = {
        yemek_photo: '',
        yemek_name: ''
    };
  }
  register_anayemek = () => {
    var that = this;
    const { yemek_photo } = this.state;
    const { yemek_name } = this.state;
    if (yemek_photo) {
      if (yemek_name) {
      {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO tbl_anayemekler (yemek_photo, yemek_name) VALUES (?,?)',
              [yemek_photo, yemek_name],
              (tx, results) => {
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Yemek Eklendi',
                    'Kayıt Başarılı',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('duzenleAnayemek'),
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
                    onChangeText={yemek_photo => this.setState({ yemek_photo })}
                    maxLength={600}
                    style={{ padding:10 }}
                />
                <DuzenleInput
                    placeholder="Enter name"
                    onChangeText={yemek_name => this.setState({ yemek_name })}
                    maxLength={100}
                    style={{ padding:10 }}
                />
                <DuzenleButton
                title="Submit"
                customClick={this.register_anayemek.bind(this)}
                />
            </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
  }
}
