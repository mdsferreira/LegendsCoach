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
        <Text style={styles.firstText}>LEGENDS</Text>
        <Text style={styles.lastText}>COACH</Text>
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 100,
  },
  firstText: {
    fontSize: moderateScale(40),
    fontWeight: 'bold',
    color: Colors.primary.contrastText,
    fontFamily: 'Roboto',
  },
  lastText: {
    fontSize: moderateScale(24),
    color: Colors.especial.main,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginTop: -10,
  },
  logoContainer: {
    // margin: moderateScale(30),
  },
  logo: {
    width: moderateScale(120),
    height: moderateScale(120),
    // resizeMode: 'stretch',
  },
});
