import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreen} from '../screens/Auth/AuthScreen';
import HomeScreen from '../screens/home/HomeScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {TeamScreen} from '../screens/team/TeamScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const LogoutStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <LogoutStack.Navigator>
        <LogoutStack.Screen
          name="Login"
          component={AuthScreen}
          options={{headerShown: false}}
        />
        <LogoutStack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </LogoutStack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Team" component={TeamScreen} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}
