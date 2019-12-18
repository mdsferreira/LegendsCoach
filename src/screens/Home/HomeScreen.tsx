import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {Screen} from '../../components/Screen';
import {Colors} from '../../constants/Colors';
import {styles} from '../Auth/style/Auth.css';
import Icon from 'react-native-vector-icons/FontAwesome';

export class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home!',
    headerTitleStyle: {textAlign: 'center'},
  };

  render() {
    return (
      <Screen color={Colors.white}>
        <View>
          <Text>Legends Coach</Text>
        </View>
      </Screen>
    );
  }
}
