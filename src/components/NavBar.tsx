import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Dimensions, StyleSheet} from 'react-native';

export const NavBar = () => (
  <View style={styles.container}>
    <Icon name="arrowleft" size={30} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: Dimensions.get('window').width,
    position: 'absolute',
    top: 0,
  },
});
