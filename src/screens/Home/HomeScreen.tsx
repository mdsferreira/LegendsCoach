import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {Screen} from '../../components/Screen';
import {Colors} from '../../constants/Colors';
import {styles} from '../Auth/style/Auth.css';

export const HomeScreen = () => {
  return (
    <Screen color={Colors.white}>
      <View>
        <Text>Legends Coach</Text>
      </View>
    </Screen>
  );
};
