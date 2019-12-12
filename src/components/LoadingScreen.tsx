import React, {useEffect} from 'react';
import {View, ActivityIndicator, StatusBar, StyleSheet} from 'react-native';

export const LoadingScreen = ({navigation}) => {
  useEffect(() => {
    const userToken = ''; //await AsyncStorage.getItem('userToken');
    navigation.navigate(userToken ? 'App' : 'Auth');
    //   const userToken = await AsyncStorage.getItem('userToken');
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
