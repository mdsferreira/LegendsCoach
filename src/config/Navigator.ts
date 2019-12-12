import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {AuthScreen} from '../screens/Auth/AuthScreen';
import {View} from 'react-native';
import {LoadingScreen} from '../components/LoadingScreen';
import {HomeScreen} from '../screens/Home/HomeScreen';

const AppStack = createStackNavigator({
  Home: HomeScreen,
});
const AuthStack = createStackNavigator({
  Auth: {
    screen: AuthScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
