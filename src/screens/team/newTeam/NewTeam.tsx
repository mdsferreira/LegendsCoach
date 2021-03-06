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
import {Screen} from '../../../components/Screen';
import styled from 'styled-components/native';
import {Colors} from '../../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-ionicons';
import {TeamBadgeList, SelectBadge} from './TeamBadgeList';
import {TeamLogoList, SelectLogo} from './TeamLogoList';
import {ColorsPick} from './ColorsPick';
import {MainButton} from '../../../components/MainButton';
import {SecondaryButton} from '../../../components/SecondaryButton';
import {ConclusionStep} from './ConclusionStep';
import {Actions as teamActions} from '../../../store/ducks/team';
import {useDispatch, useSelector} from 'react-redux';

const status = {ERROR: 'ERROR', WARNING: 'WARNNING', SUCCESS: 'SUCCESS'};

export function CreateTeam({navigation}) {
  const defaultName = 'Digite o nome do seu time';
  const defaultColor = Colors.background.component;
  const [teamName, onChangeText] = useState(defaultName);
  const [selectedBadge, setBadge] = useState({_id: 0, color: defaultColor});
  const [selectedLogo, setLogo] = useState({_id: 0, color: defaultColor});
  //status warnning , error or success
  const dispatch = useDispatch();

  const [buttonStatus, setButtonStatus] = useState({
    text: defaultName,
    status: status.WARNING,
  });
  //   const [errorName, setErrorName] = useState('');
  const setBadgeColor = color => {
    setBadge({...selectedBadge, color});
  };
  const setLogoColor = color => {
    setLogo({...selectedLogo, color});
  };
  const scrollRef = useRef(null);
  const [step, setStep] = useState(0);

  navigation.setOptions({
    title: teamName !== defaultName ? teamName : '',
    headerStyle: {
      backgroundColor: Colors.primary.main,
    },
    headerTintColor: Colors.secondary.main,
    headerTitleStyle: {
      fontWeight: 'bold',
      justifyContent: 'center',
    },
    headerShown: step !== 6,
  });

  const validateTeamNameSize = () => {
    if (teamName.length > 3 && teamName != defaultName) {
      setButtonStatus({text: 'Próximo passo', status: status.SUCCESS});
    }
    return teamName.length > 3 && teamName != defaultName;
  };

  const validateTeamNameUniq = async () => {
    const response = await teamActions.validateTeamName(teamName);
    if (response == true) return !!response;
    return {error: 'Nome já existe'};
  };

  const createTeam = () => {
    const team = {
      name: teamName,
      badge: selectedBadge,
      logo: selectedLogo,
    };
    return teamActions.createTeam(dispatch, team);
  };

  const validateTeam = () => {
    switch (step) {
      case 0:
        return teamName.length > 3 && teamName != defaultName;
      case 1:
        return !!selectedBadge._id;
      case 2:
        return !!selectedBadge.color;
      case 3:
        return !!selectedLogo._id;
      case 4:
        return !!selectedLogo.color;
      case 5:
        return (
          selectedLogo._id &&
          selectedLogo.color &&
          selectedBadge.color &&
          selectedBadge._id
        );
      default:
        return false;
    }
  };
  const backToStart = () => {
    setStep(0);
    scrollRef.current.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
    setButtonStatus({text: 'Próximo passo', status: status.SUCCESS});
  };
  const nextStep = async () => {
    if (step === 0) {
      if (validateTeamNameSize()) {
        const isValid = await validateTeamNameUniq();
        console.log(isValid);
        if (isValid && !isValid.error) {
          setStep(step + 1);
          Keyboard.dismiss();
          setButtonStatus({
            text: 'Selecione uma Brazão',
            status: status.WARNING,
          });
        } else {
          setButtonStatus({text: isValid.error, status: status.ERROR});
        }
      } else {
        setButtonStatus({text: 'Tamanho mínimo 3', status: status.ERROR});
      }
    }
    if (step === 1) {
      if (selectedBadge._id) {
        setButtonStatus({text: 'Selecione uma cor', status: status.WARNING});
        setStep(step + 1);
      }
    }
    if (step === 2) {
      if (selectedBadge._id && selectedBadge.color) {
        setButtonStatus({text: 'Selecione um Logo', status: status.WARNING});
        setStep(step + 1);
      }
    }
    if (step === 3) {
      if (selectedLogo._id) {
        setButtonStatus({text: 'Selecione uma cor', status: status.WARNING});
        setStep(step + 1);
      }
    }
    if (step === 4) {
      if (selectedLogo._id && selectedLogo.color) {
        setButtonStatus({text: '', status: status.SUCCESS});
        setStep(step + 1);
      }
    }
    if (step === 5) {
      if (
        selectedLogo._id &&
        selectedLogo.color &&
        selectedBadge._id &&
        selectedBadge.color
      ) {
        setStep(step + 1);
      }
    }
    if (step === 6) {
      createTeam();
    }
    if (validateTeam()) {
      scrollRef.current.scrollTo({
        x: 0,
        y: Dimensions.get('window').height * (step + 1),
        animated: true,
      });
    }
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
              onChangeText={text => {
                onChangeText(text);
                validateTeamNameSize();
              }}
              value={teamName}
              onFocus={() => onChangeText('')}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.teamBadgeContainer}>
            <TeamBadgeList
              setBadge={badge => {
                setBadge(badge);
                setButtonStatus({
                  text: 'Próximo passo',
                  status: status.SUCCESS,
                });
              }}
              selectedBadge={selectedBadge}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.teamBadgeContainer}>
            <View style={styles.teamBadgeView}>
              <SelectBadge
                color={selectedBadge.color || defaultColor}
                badgeId={selectedBadge._id}
              />
            </View>
            <View>
              <ColorsPick
                selectedColor={selectedBadge.color}
                setColor={color => {
                  setBadgeColor(color);
                  setButtonStatus({
                    text: 'Próximo passo',
                    status: status.SUCCESS,
                  });
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.teamLogoContainer}>
            <TeamLogoList
              selectedLogo={selectedLogo}
              setLogo={logo => {
                setLogo(logo);
                setButtonStatus({
                  text: 'Próximo passo',
                  status: status.SUCCESS,
                });
              }}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.teamLogoContainer}>
            <View style={styles.teamLogoView}>
              <SelectLogo
                color={selectedLogo.color || defaultColor}
                badgeId={selectedLogo._id}
              />
            </View>
            <View>
              <ColorsPick
                selectedColor={selectedLogo.color}
                setColor={color => {
                  setLogoColor(color);
                  setButtonStatus({
                    text: 'Próximo passo',
                    status: status.SUCCESS,
                  });
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.teamLogoContainer}>
            <View style={styles.teamLogoView}>
              <SelectBadge
                color={selectedBadge.color || defaultColor}
                badgeId={selectedBadge._id}
              />
            </View>
            <View style={styles.teamFinalLogoView}>
              <SelectLogo
                color={selectedLogo.color || defaultColor}
                badgeId={selectedLogo._id}
              />
            </View>
          </View>
        </View>
        <ConclusionStep
          selectedBadge={selectedBadge}
          selectedLogo={selectedLogo}
          defaultColor={defaultColor}
          teamName={teamName}
          onPressButton={() => navigation.push('Team')}
        />
      </ScrollView>
      {buttonStatus.status === status.SUCCESS && step < 5 && (
        <SecondaryButton onPress={() => nextStep()} title={buttonStatus.text}>
          <Icon name="arrow-down" style={styles.iconNext} />
        </SecondaryButton>
      )}
      {step === 5 && (
        <View style={styles.buttonsConclusion}>
          <MainButton onPress={() => nextStep()} title="Finalizar">
            <Icon name="checkmark" style={styles.iconDone} />
          </MainButton>
          <MainButton onPress={() => backToStart()} outLine title="Refazer">
            <Icon name="close" style={styles.iconRework} />
          </MainButton>
        </View>
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
    paddingTop: 150,
    alignItems: 'center',
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
  buttonTextWarning: {
    marginLeft: 10,
    color: Colors.secondary.main,
    // fontWeight: 'bold',
    fontSize: moderateScale(15),
  },
  teamBadgeContainer: {
    height: moderateScale(250),
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamBadgeView: {
    width: Dimensions.get('window').width - 100,
    height: moderateScale(250),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.background.component,
    borderRadius: 10,
  },
  teamLogoContainer: {
    height: moderateScale(250),
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamLogoContainerDone: {
    height: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamLogoView: {
    width: Dimensions.get('window').width - 100,
    height: moderateScale(250),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.background.body,
    borderRadius: 10,
  },
  teamFinalLogoView: {
    width: Dimensions.get('window').width - 100,
    height: moderateScale(100),
    // backgroundColor: Colors.background.body,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconNext: {
    marginHorizontal: 10,
    color: Colors.especial.main,
  },
  iconDone: {
    marginHorizontal: 10,
    color: Colors.primary.main,
  },
  iconRework: {
    marginHorizontal: 10,
    color: Colors.secondary.main,
  },
  buttonsConclusion: {
    width: '100%',
    height: 150,
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
  border-bottom-color: ${Colors.secondary.main};
  color: ${Colors.text.main};
`;

export const ButtonStyled = styled(TouchableHighlight)`
  background-color: ${Colors.primary.main};
  border: 1px solid
    ${props =>
      props.status === status.SUCCESS
        ? Colors.especial.main
        : props.status === status.ERROR
        ? Colors.text.error
        : Colors.secondary.main};
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 20px;
  margin-top: 50px;
  height: 50px;
  border-radius: 5;
`;
