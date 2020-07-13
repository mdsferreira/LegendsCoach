import React, {useState, useEffect, useRef} from 'react';
// import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {Text, View, ImageBackground, Dimensions, Animated} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';
import {Images} from '../../constants/Images';
import {styles} from './style/Auth.css';
import {Logo} from '../../components/Logo';
import {Creators as userActions} from '../../store/ducks/user';
import {useDispatch, useSelector} from 'react-redux';
import {MainButton} from '../../components/MainButton';
import {AuthModal} from './AuthModal';

const {height} = Dimensions.get('window');

export const AuthScreen = ({navigation}) => {
  const [errorMsg, setErrorMesage] = useState('');
  const [show, setModalOpen] = useState(false);
  const modalHeight = useRef(new Animated.Value(height)).current;
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);
  const {loading, user, error} = userState;
  const login = userData => dispatch(userActions.authUser(userData));
  const onSubmit = async userData => {
    try {
      await login(userData);
    } catch (error) {
      setErrorMesage('Usuário ou senha inválidos');
    }
  };
  useEffect(() => {
    if (error) {
      setErrorMesage(error);
    } else {
      if (user) {
        setErrorMesage('');
      }
    }
  }, [userState]);

  const openModal = () => {
    Animated.sequence([
      Animated.spring(modalHeight, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(modalHeight, {
        toValue: height,
        duration: 350,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (show) {
      openModal();
    } else {
      closeModal();
    }
  }, [show]);

  useEffect(() => {
    (async () => {
      // AsyncStorage.clear();
      const email = await AsyncStorage.getItem('email');
      const password = await AsyncStorage.getItem('password');
      if (email && password) {
        onSubmit({email, password});
      }
    })();
  }, []);
  return (
    <ImageBackground
      source={Images.backgroundLogin}
      style={styles.backgroundImage}>
      <View style={styles.screen}>
        <View style={styles.title}>
          <Logo />
        </View>
        <View style={styles.newAcountText}>
          <Button onPress={() => setModalOpen(true)}>
            <TitleButton>LOGIN</TitleButton>
          </Button>
          <View>
            <Text style={[styles.titleText, {fontSize: 10}]}>
              Não possui conta? Crie seu time de Lendas
            </Text>
          </View>
        </View>
        <AuthModal
          onSubmit={onSubmit}
          errorMsg={errorMsg}
          loading={loading}
          modalHeight={modalHeight}
          closeModal={() => setModalOpen(false)}
        />
      </View>
    </ImageBackground>
  );
};

const Button = styled(MainButton)`
  height: 70;
  border-radius: 35;
  width: '${Dimensions.get('window').width}';
`;

const TitleButton = styled.Text`
  font-weight: bold;
  font-size: 20px;
  font-family: 'Roboto';
  color: ${Colors.secondary.contrastText};
  align-self: center;
  /* text-transform: uppercase; */
`;
