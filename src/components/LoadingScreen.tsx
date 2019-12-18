import React, {useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  AsyncStorage,
} from 'react-native';

export const LoadingScreen = ({navigation}) => {
  useEffect(() => {
    try {
      const userToken = 123; //await AsyncStorage.getItem('userToken');
      navigation.navigate(userToken ? 'App' : 'Auth');
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
