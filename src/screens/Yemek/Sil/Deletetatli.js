import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import DuzenleInput from '../../../components/DuzenleInput';
import { openDatabase } from 'react-native-sqlite-storage';
import DuzenleButton from '../../../components/DuzenleButton';
var db = openDatabase({ name: 'foods.db', createFromLocation : 1});
export default class Deletetatli extends Component {
  constructor(props) {
    super(props);
    this.state = {
        input_tatli_name: '',
    };
  }
  deleteTatli = () => {
    var that = this;
    const { input_tatli_name } = this.state;
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  tbl_tatli where tatli_name=?',
        [input_tatli_name],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Başarılı',
              'Tatlı Silindi',
              [
                {
                  text: 'Ok',
                  onPress: () => that.props.navigation.navigate('duzenleTatli'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('tatlı ismini girin.');
          }
        }
      );
    });
    };
  render() {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <DuzenleInput
                placeholder="tatlı name"
                onChangeText={input_tatli_name => this.setState({ input_tatli_name })}
                style={{ padding:10 }}
            />
            <DuzenleButton
                title="Sil"
                customClick={this.deleteTatli.bind(this)}
            />
      </View>
    );
  }
}
