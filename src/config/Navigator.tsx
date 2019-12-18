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

const HomeStack = createStackNavigator(
  {Home: {screen: HomeScreen}},
  {
    navigationOptions: {
      tabBarLabel: 'Home!',
      tabBarIcon: () => <Icon name="home" size={30} />,
    },
    defaultNavigationOptions: {
      title: 'Welcome',
      headerStyle: {
        backgroundColor: Colors.black,
      },
      headerTintColor: Colors.blueButton,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const TeamStack = createStackNavigator(
  {
    Team: {
      screen: TeamScreen,
    },
  },
  {
    navigationOptions: {
      tabBarLabel: 'Meu Time',
      tabBarIcon: () => <TeamIcon />,
    },
    defaultNavigationOptions: {
      title: 'Meu Time',
    },
  },
);

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    navigationOptions: {
      tabBarLabel: 'Perfil',
      tabBarIcon: props => <Icon name="user" size={30} />,
    },
    defaultNavigationOptions: {
      title: 'Perfil',
    },
  },
);

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
    Home: HomeStack,
    Team: TeamStack,
    Profile: ProfileStack,
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
