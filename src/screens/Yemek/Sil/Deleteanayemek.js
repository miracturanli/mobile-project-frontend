import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import DuzenleInput from '../../../components/DuzenleInput';
import { openDatabase } from 'react-native-sqlite-storage';
import DuzenleButton from '../../../components/DuzenleButton';
var db = openDatabase({ name: 'foods.db', createFromLocation : 1});
export default class Deleteanayemek extends Component {
  constructor(props) {
    super(props);
    this.state = {
        input_yemek_name: '',
    };
  }
  deleteUser = () => {
    var that = this;
    const { input_yemek_name } = this.state;
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  tbl_anayemekler where yemek_name=?',
        [input_yemek_name],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Başarılı',
              'Yemek Silindi',
              [
                {
                  text: 'Ok',
                  onPress: () => that.props.navigation.navigate('duzenleAnayemek'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Yemek ismini girin.');
          }
        }
      );
    });
    };
  render() {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <DuzenleInput
                placeholder="yemek name"
                onChangeText={input_yemek_name => this.setState({ input_yemek_name })}
                style={{ padding:10 }}
            />
            <DuzenleButton
                title="Sil"
                customClick={this.deleteUser.bind(this)}
            />
      </View>
    );
  }
}
