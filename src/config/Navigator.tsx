import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {AuthScreen} from '../screens/Auth/AuthScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {LoadingScreen} from '../components/LoadingScreen';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {TeamScreen} from '../screens/team/TeamScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../constants/Colors';
import {TeamIcon} from '../components/TeamIcon';

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

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: () => <Icon name="home" size={30} />,
      },
    },
    Team: {
      screen: TeamScreen,
      navigationOptions: {
        tabBarIcon: () => <TeamIcon />,
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({activeTintColor}) => <Icon name="user" size={30} />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#161F3D',
      inactiveTintColor: '#ccc',
      showLabel: false,
    },
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
