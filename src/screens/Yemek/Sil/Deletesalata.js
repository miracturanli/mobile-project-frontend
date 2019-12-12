import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import DuzenleInput from '../../../components/DuzenleInput';
import { openDatabase } from 'react-native-sqlite-storage';
import DuzenleButton from '../../../components/DuzenleButton';
var db = openDatabase({ name: 'foods.db', createFromLocation : 1});
export default class Deletesalata extends Component {
  constructor(props) {
    super(props);
    this.state = {
        input_salata_name: '',
    };
  }
  deleteSalata = () => {
    var that = this;
    const { input_salata_name } = this.state;
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  tbl_salata where salata_name=?',
        [input_salata_name],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Başarılı',
              'Salata Silindi',
              [
                {
                  text: 'Ok',
                  onPress: () => that.props.navigation.navigate('duzenleSalata'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Salata ismini girin.');
          }
        }
      );
    });
    };
  render() {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <DuzenleInput
                placeholder="salata name"
                onChangeText={input_salata_name => this.setState({ input_salata_name })}
                style={{ padding:10 }}
            />
            <DuzenleButton
                title="Sil"
                customClick={this.deleteSalata.bind(this)}
            />
      </View>
    );
  }
}
