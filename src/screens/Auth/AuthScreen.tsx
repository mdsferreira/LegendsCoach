import React, {useState} from 'react';
// import {useDispatch} from 'react-redux';
import {Text, View, ImageBackground, ActivityIndicator} from 'react-native';
import styled from 'styled-components';
import {Input} from '../../components/Input';
import {Button, ButtonText} from '../../components/Button';
import {Colors} from '../../constants/Colors';
import {Images} from '../../constants/Images';
import {styles} from './style/Auth.css';
import {Formik} from 'formik';
import {Logo} from '../../components/Logo';
import {loginEmail} from '../../store/actions/Login';
import {useDispatch} from 'react-redux';

const initialState = {username: '', password: ''};

export const AuthScreen = ({navigation}) => {
  const [errorMsg, setErrorMesage] = useState('');
  const dispatch = useDispatch();

  const onSubmit = userData => {
    try {
      loginEmail(dispatch, userData);
      navigation.navigate('Home');
    } catch (error) {
      setErrorMesage('Usuário ou senha inválidos');
    }
  };
  return (
    <ImageBackground
      source={Images.backgroundLogin}
      style={styles.backgroundImage}>
      <View style={styles.screen}>
        <View style={styles.title}>
          <Logo />
        </View>
        <LoginBox>
          <Formik
            initialValues={initialState}
            onSubmit={values => {
              onSubmit(values);
            }}>
            {props => {
              const {values, isSubmitting, handleChange, handleSubmit} = props;
              return (
                <>
                  <Text style={styles.loginBoxTitle}>Iniciar sessão</Text>
                  <Input
                    name="email"
                    placeholder="type your email or username"
                    value={values.email}
                    onChangeText={handleChange('userName')}
                  />
                  <Input
                    name="password"
                    placeholder="type your password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    secureTextEntry
                  />
                  <Button>
                    {isSubmitting ? (
                      <ActivityIndicator />
                    ) : (
                      <ButtonText onPress={handleSubmit}>Entrar</ButtonText>
                    )}
                  </Button>
                </>
              );
            }}
          </Formik>
        </LoginBox>
        <View style={styles.newAcountText}>
          <Text style={[styles.titleText, {fontSize: 10}]}>
            Não possui conta? Crie seu time de Lendas
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const LoginBox = styled.View`
  border-radius: 3px;
  flex-direction: column;
  box-shadow: 1px 1px #ccc;
  background-color: #f1f1f1;
  padding: 10px;
  /* width: 90%; */
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 30px;
  color: ${Colors.gold};
  align-self: center;
  /* text-transform: uppercase; */
  font-family: 'Times New Roman';
`;
