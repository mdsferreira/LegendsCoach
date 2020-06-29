import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreen} from '../screens/Auth/AuthScreen';
import HomeScreen from '../screens/home/HomeScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {TeamScreen} from '../screens/team/TeamScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {SearchScreen} from '../screens/search/SearchScreen';
import Icon from 'react-native-ionicons';
import {Colors} from '../constants/Colors';
const LogoutStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigator() {
  const user = useSelector(state => state.user.user);
  return (
    <>
      {!user ? (
        <NavigationContainer>
          <LogoutStack.Navigator>
            <LogoutStack.Screen
              name="Login"
              component={AuthScreen}
              options={{headerShown: false}}
            />
          </LogoutStack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName = route.name.toLocaleLowerCase();

                if (route.name === 'Team') {
                  iconName = 'shirt';
                }

                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: Colors.secondary.light,
              inactiveTintColor: Colors.secondary.main,
              labelStyle: {
                fontSize: 12,
              },
              style: {
                backgroundColor: Colors.primary.main,
                borderTopColor: '#707070',
                borderTopWidth: 1,
                padding: 5,
              },
            }}>
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Team" component={TeamScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
