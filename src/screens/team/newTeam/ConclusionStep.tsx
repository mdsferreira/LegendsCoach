import React, {useState, useRef} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Keyboard,
} from 'react-native';
import Lottie from 'lottie-react-native';
import animation from '../../../assets/img/animations/successful-check.json';
import animationTeam from '../../../assets/img/animations/success.json';

import {SelectBadge} from './TeamBadgeList';
import {SelectLogo} from './TeamLogoList';
import {SecondaryButton} from '../../../components/SecondaryButton';
import {moderateScale} from 'react-native-size-matters';
import {Colors} from '../../../constants/Colors';

export const ConclusionStep = ({
  selectedBadge,
  selectedLogo,
  teamName,
  defaultColor,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.animatedDone}>
        <Lottie resizeMode="contain" source={animation} autoPlay loop={false} />
      </View>
      <View>
        <Text style={styles.titleText}>Excelente!</Text>
        <Text style={styles.subTitleText}>
          Seu time foi criado com sucesso.
        </Text>
      </View>
      <View style={styles.teamLogoContainer}>
        <Lottie resizeMode="contain" source={animationTeam} autoPlay loop />
        <View style={styles.teamLogoView}>
          <SelectBadge
            color={selectedBadge.color || defaultColor}
            badgeId={selectedBadge._id}
            width={100}
          />
        </View>
        <View style={styles.teamFinalLogoView}>
          <SelectLogo
            color={selectedLogo.color || defaultColor}
            badgeId={selectedLogo._id}
            width={50}
          />
        </View>
        <View>
          <Text style={styles.teamNameText}>{teamName}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <SecondaryButton title="Ok" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingTop: 50,
  },
  animatedDone: {
    width: '100%',
    height: 250,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: 70,
  },
  titleText: {
    fontSize: moderateScale(30),
    textAlign: 'center',
  },
  subTitleText: {
    fontSize: moderateScale(16),
    textAlign: 'center',
    color: Colors.text.subTitle,
  },
  teamBadgeContainer: {
    height: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamBadgeView: {
    width: Dimensions.get('window').width - 100,
    height: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.background.component,
    borderRadius: 10,
  },
  teamLogoContainer: {
    width: Dimensions.get('window').width - 100,
    height: moderateScale(100),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.background.component,
  },
  teamLogoView: {
    width: 100,
    height: moderateScale(120),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary.light,
    borderRadius: 20,
  },
  teamNameText: {
    color: Colors.secondary.main,
  },
  teamFinalLogoView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 40,
  },
});
