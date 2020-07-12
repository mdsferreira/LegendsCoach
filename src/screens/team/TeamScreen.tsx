import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {Screen} from '../../components/Screen';
import {Colors} from '../../constants/Colors';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-ionicons';
import Lottie from 'lottie-react-native';
import animation from '../../assets/img/animations/teamwork.json';
import {MainButton} from '../../components/MainButton';

export const TeamScreen = ({navigation}) => {
  const [openModal, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const {team} = useSelector(state => state.team);
  navigation.setOptions({
    headerShown: false,
  });
  return (
    <Screen color={Colors.background.main}>
      {!team.id && (
        <View style={styles.createTeamContainer}>
          <View style={styles.animatedHeader}>
            <Lottie
              resizeMode="contain"
              source={animation}
              autoPlay
              loop //={false}
            />
          </View>
          <View style={styles.subHeader}>
            {/* <Icon name="md-star-half" size={100} color={Colors.especial.main} /> */}
            <Text style={styles.subHeaderText}>*****</Text>
          </View>
          <View>
            <Text style={styles.titleText}>Crie o seu time</Text>
            <Text style={styles.subTitleText}>Para começar a jogar</Text>
          </View>
          <MainButton
            onPress={() => navigation.navigate('NewTeam')}
            title="CRIAR"
          />
        </View>
      )}
    </Screen>
  );
};

export const styles = StyleSheet.create({
  textTittle: {
    color: Colors.text.title,
  },

  createTeamContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  animatedHeader: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: 40,
  },
  subHeader: {
    height: 10,
  },
  subHeaderText: {
    color: Colors.secondary.main,
    fontSize: moderateScale(18),
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
  buttonText: {
    color: Colors.primary.main,
    // fontWeight: 'bold',
    fontSize: moderateScale(15),
  },
});
