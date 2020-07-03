import React from 'react';
import {View, Text, StyleSheet, Platform, Image} from 'react-native';
// import Consultor from '../assets/img/svg/consultor.svg';
import {moderateScale} from 'react-native-size-matters';
import {Colors} from '../constants/Colors';
import {Images} from '../constants/Images';

export const Logo = () => {
  return (
    <View style={styles.container}>
      {/* <Consultor
        width={moderateScale(100)}
        height={moderateScale(50)}
        fill={Colors.primary.light}
      /> */}
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Images.logo} />
      </View>
      <View style={styles.logoTextView}>
        <Text style={styles.initialLetter}>L</Text>
        <Text style={styles.logoText}>egends </Text>
        <Text style={styles.initialLetter}>C</Text>
        <Text style={styles.logoText}>oach</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoTextView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: -20,
  },
  initialLetter: {
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    color: Colors.primary.contrastText,
    ...Platform.select({
      ios: {fontFamily: 'Arial'},
      android: {fontFamily: 'Roboto'},
    }),
  },
  logoContainer: {
    // margin: moderateScale(30),
  },
  logo: {
    width: moderateScale(70),
    height: moderateScale(70),
    // resizeMode: 'stretch',
  },
  logoText: {
    fontSize: moderateScale(30),
    color: Colors.primary.contrastText,
    ...Platform.select({
      ios: {fontFamily: 'Arial'},
      android: {fontFamily: 'Roboto'},
    }),
  },
});
