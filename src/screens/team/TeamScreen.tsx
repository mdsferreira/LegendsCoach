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

export const TeamScreen = ({navigation}) => {
  const [openModal, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const {team} = useSelector(state => state.team);

  return (
    <Screen color={Colors.background.main}>
      {!team.id && (
        <View style={styles.createTeamContainer}>
          <View>
            <Icon name="md-star-half" size={100} color={Colors.especial.main} />
          </View>
          <Text style={styles.createTeamText}>
            Crie o seu time para começar
          </Text>
          <ButtonStyled onPress={() => navigation.navigate('NewTeam')}>
            <Text style={styles.buttonText}>CRIAR</Text>
          </ButtonStyled>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  createTeamText: {
    fontSize: moderateScale(35),
    textAlign: 'center',
  },
  buttonText: {
    color: Colors.primary.main,
    // fontWeight: 'bold',
    fontSize: moderateScale(15),
  },
});

export const ButtonStyled = styled(TouchableHighlight)`
  background-color: ${Colors.secondary.main};
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 20px;
  margin-top: 50px;
  height: 50px;
  border-radius: 5;
`;
