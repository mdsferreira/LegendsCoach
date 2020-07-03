import React, {useState, useRef} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {Screen} from '../../components/Screen';
import styled from 'styled-components/native';
import {Colors} from '../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-ionicons';
import {TeamBeadgeList} from './TeamBadgeList';

export function CreateTeam({navigation}) {
  const defaultName = 'Digite o nome do seu time';
  const [teamName, onChangeText] = useState(defaultName);
  //   const [errorName, setErrorName] = useState('');
  const scrollRef = useRef(null);
  const [step, setStep] = useState(0);
  navigation.setOptions({
    title: teamName || defaultName,
    headerStyle: {
      backgroundColor: Colors.primary.main,
    },
    headerTintColor: Colors.especial.main,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  const validateTeamName = () => {
    return teamName.length > 3 && teamName != defaultName;
  };

  const nextStep = () => {
    if (step === 0) {
      if (validateTeamName()) {
        //#TODO check if is unic
        setStep(step + 1);
      }
    }
    scrollRef.current.scrollTo({
      x: 0,
      y: Dimensions.get('window').height * step,
      animated: true,
    });
  };

  return (
    <Screen>
      <ScrollView
        style={styles.scrollView}
        ref={scrollRef}
        scrollEnabled={false}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Input
              onChangeText={text => onChangeText(text)}
              value={teamName}
              onFocus={() => onChangeText('')}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.teamLogoContainer}>
            <TeamBeadgeList />
          </View>
        </View>
      </ScrollView>
      {!!(teamName && teamName !== defaultName) && (
        <ButtonStyled onPress={() => nextStep()} valid={validateTeamName()}>
          <View style={styles.buttonContainer}>
            {validateTeamName() ? (
              <Icon name="arrow-down" size={40} color={Colors.especial.main} />
            ) : (
              <Icon name="close" size={40} color={Colors.text.error} />
            )}
            <View>
              <Text
                style={
                  validateTeamName()
                    ? styles.buttonText
                    : styles.buttonTextError
                }>
                {validateTeamName() ? 'PRONTO' : 'Tamanho mínimo 3 '}
              </Text>
            </View>
          </View>
        </ButtonStyled>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
  },
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flexDirection: 'column',
    // justifyContent: 'center',
    paddingTop: 150,

    alignItems: 'center',
    // backgroundColor: '#0f0',
  },
  inputContainer: {
    justifyContent: 'center',
    width: '100%',
  },
  teamNameText: {
    textAlign: 'center',
    fontSize: moderateScale(30),
    color: Colors.text.body,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 10,
    color: Colors.especial.main,
    // fontWeight: 'bold',
    fontSize: moderateScale(15),
  },
  buttonTextError: {
    marginLeft: 10,
    color: Colors.text.error,
    // fontWeight: 'bold',
    fontSize: moderateScale(15),
  },
  teamLogoContainer: {
    height: moderateScale(250),
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamLogoView: {
    width: Dimensions.get('window').width - 100,
    height: moderateScale(250),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background.component,
    borderRadius: 10,
  },
});

const Input = styled(TextInput)`
  border-radius: 3px;
  flex-direction: column;
  box-shadow: 1px 1px #ccc;
  /* width: ${Dimensions.get('window').width}; */
  /* background-color: ${Colors.primary.light}; */
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.especial.main};
  color: ${Colors.text.main};
`;

export const ButtonStyled = styled(TouchableHighlight)`
  background-color: ${Colors.primary.main};
  border: 1px solid
    ${props => (!props.valid ? Colors.text.error : Colors.especial.main)};
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 20px;
  margin-top: 50px;
  height: 50px;
  border-radius: 5;
`;
