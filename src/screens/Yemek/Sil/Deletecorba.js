import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import DuzenleInput from '../../../components/DuzenleInput';
import { openDatabase } from 'react-native-sqlite-storage';
import DuzenleButton from '../../../components/DuzenleButton';
var db = openDatabase({ name: 'foods.db', createFromLocation : 1});
export default class Deletecorba extends Component {
  constructor(props) {
    super(props);
    this.state = {
        input_corba_name: '',
    };
  }
  deleteCorba = () => {
    var that = this;
    const { input_corba_name } = this.state;
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  tbl_corba where corba_name=?',
        [input_corba_name],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Başarılı',
              'Çorba Silindi',
              [
                {
                  text: 'Ok',
                  onPress: () => that.props.navigation.navigate('duzenleCorba'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Çorba ismini girin.');
          }
        }
      );
    });
    };
  render() {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <DuzenleInput
                placeholder="çorba name"
                onChangeText={input_corba_name => this.setState({ input_corba_name })}
                style={{ padding:10 }}
            />
            <DuzenleButton
                title="Sil"
                customClick={this.deleteCorba.bind(this)}
            />
      </View>
    );
  }
}
