import React from 'react';
import { FlatList, Text, View, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'foods.db', createFromLocation : 1});
 
export default class Corba extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM tbl_corba', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp,
        });
      });
    });
  }
  renderContactsItem = ({item,index}) => {
    return(
      <TouchableOpacity style={[styles.itemContainer,{backgroundColor: index % 2 === 1 ? '#E5FFE4' : '#FDE1E1' }]}>
          <Image 
              style={styles.foodStyle}  
              source={{uri: item.corba_photo}}>
          </Image> 
          <View style={styles.textContainer}>
               <Text style={styles.nameStyle}>{item.corba_name}</Text>
          </View>
      </TouchableOpacity>
    )    
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item,index) => index.toString()}
          renderItem={this.renderContactsItem}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  foodStyle: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginHorizontal: 20,
  },
  nameStyle:{
      fontSize: 20
  },
  textContainer: {
    justifyContent: 'center'
  }
});