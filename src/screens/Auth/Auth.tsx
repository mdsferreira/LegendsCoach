import React from 'react';
import {Text, View, ImageBackground, ActivityIndicator} from 'react-native';
import {Screen} from '../../components/Screen';
import styled from 'styled-components';
import {Input} from '../../components/Input';
import {Button, ButtonText} from '../../components/Button';
import {Colors} from '../constants/Colors';
import {Images} from '../constants/Images';
import {styles} from './style/Auth.css';
import {useFormik} from 'formik';
import * as api from '../../api';
const initialState = {username: '', password: ''};

export const Auth = () => {
  const formik = useFormik({
    initialValues: initialState,
    onSubmit: async () => {
      try {
        const {data} = await api.login();
        console.log(data);
      } catch (error) {}
    },
  });
  return (
    <ImageBackground
      source={Images.backgroundLogin}
      style={styles.backgroundImage}>
      <Screen color={Colors.black}>
        <View style={styles.title}>
          <Title style={styles.titleText}>Crie seu time de lendas</Title>
        </View>
        <LoginBox>
          <Text style={styles.loginBoxTitle}>Iniciar sessão</Text>
          <Input
            name="email"
            placeholder="type your email or username"
            value={formik.values.email}
            onChangeText={formik.handleChange('username')}
          />
          <Input
            name="password"
            placeholder="type your password"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
          />
          <Button>
            {formik.isSubmitting ? (
              <ActivityIndicator />
            ) : (
              <ButtonText onPress={formik.handleSubmit}>Entrar</ButtonText>
            )}
          </Button>
        </LoginBox>
      </Screen>
    </ImageBackground>
  );
};

const LoginBox = styled.View`
  border-radius: 3px;
  flex-direction: column;
  box-shadow: 1px 1px #ccc;
  background-color: ${Colors.white};
  padding: 10px;
  width: 100%;
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 30px;
  color: ${Colors.gold};
  align-self: center;
  text-transform: uppercase;
  font-family: 'Times New Roman';
`;
