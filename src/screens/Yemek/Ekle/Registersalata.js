import React, { Component } from 'react';
import { View , Alert,KeyboardAvoidingView,ScrollView } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import DuzenleButton from '../../../components/DuzenleButton';
import DuzenleInput from '../../../components/DuzenleInput';
var db = openDatabase({ name: 'foods.db', createFromLocation : 1});
export default class Registersalata extends Component {
  constructor(props) {
    super(props);
    this.state = {
        salata_photo: '',
        salata_name: ''
    };
  }
  register_salata = () => {
    var that = this;
    const { salata_photo } = this.state;
    const { salata_name } = this.state;
    if (salata_photo) {
      if (salata_name) {
      {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO tbl_salata (salata_photo, salata_name) VALUES (?,?)',
              [salata_photo, salata_name],
              (tx, results) => {
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Salata Eklendi',
                    'Kayıt Başarılı',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('duzenleSalata'),
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
                    onChangeText={salata_photo => this.setState({ salata_photo })}
                    maxLength={600}
                    style={{ padding:10 }}
                />
                <DuzenleInput
                    placeholder="Enter name"
                    onChangeText={salata_name => this.setState({ salata_name })}
                    maxLength={100}
                    style={{ padding:10 }}
                />
                <DuzenleButton
                title="Submit"
                customClick={this.register_salata.bind(this)}
                />
            </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
  }
}
