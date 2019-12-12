import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {inject} from 'mobx-react';
import UserStore from '../../store/UserStore';
@inject('UserStore')
export default class AuthLoading extends Component {
  async componentDidMount() {
    await this.props.UserStore.setupUser();
  }
  render() {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}
