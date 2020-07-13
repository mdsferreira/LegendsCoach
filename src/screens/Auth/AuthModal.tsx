import React, {useState, useEffect} from 'react';
// import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Animated,
} from 'react-native';
import styled from 'styled-components';
import {Input} from '../../components/Input';
import {Button, ButtonText} from '../../components/Button';
import {Colors} from '../../constants/Colors';
import {Images} from '../../constants/Images';
import {styles} from './style/Auth.css';
import {Formik} from 'formik';
import {Logo} from '../../components/Logo';
import {Creators as userActions} from '../../store/ducks/user';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import {MainButton} from '../../components/MainButton';
import Icon from 'react-native-ionicons';

const initialValues = {email: '', password: ''};

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

export const AuthModal = ({
  onSubmit,
  errorMsg,
  loading,
  modalHeight,
  closeModal,
}) => {
  return (
    <Animated.View
      style={[
        styles.modalScreen,
        {
          // opacity: modalHeight,
          transform: [
            {
              translateY: modalHeight,
            },
          ],
        },
      ]}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.indicator}>
          <Icon name="arrow-dropdown" color={Colors.text.body} />
        </View>
      </TouchableWithoutFeedback>
      <LoginBox>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={values => {
            onSubmit(values);
          }}>
          {props => {
            const {
              values,
              isSubmitting,
              handleChange,
              handleSubmit,
              errors,
              touched,
              setFieldTouched,
              submitCount,
            } = props;
            return (
              <View style={styles.buttonsContainer}>
                {/* <Text style={styles.loginBoxTitle}>Iniciar sessão</Text> */}
                <View>
                  <Input
                    name="email"
                    placeholder={'Email'}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    hasError={touched.email && errors.email}
                    setTouched={() => setFieldTouched('email')}
                  />
                  <Input
                    name="password"
                    placeholder="Senha"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    secureTextEntry
                    hasError={touched.password && errors.password}
                    // setTouched={() => setFieldTouched('password')}
                  />
                </View>
                {errorMsg ? (
                  <Text style={styles.errorText}>{errorMsg}</Text>
                ) : null}
                <MainButton onPress={handleSubmit} title="ENTRAR">
                  {!!loading && <ActivityIndicator />}
                </MainButton>
              </View>
            );
          }}
        </Formik>
      </LoginBox>
      <View style={styles.socialContainer}>
        <View style={styles.socialButton}>
          <Icon name="logo-facebook" color={Colors.especial.main} />
        </View>
        <View style={styles.socialButton}>
          <Icon name="logo-google" color={Colors.especial.main} />
        </View>
        <View style={styles.socialButton}>
          <Icon name="logo-twitch" color={Colors.especial.main} />
        </View>
      </View>
      <View style={styles.newAcountText}>
        <Text style={[styles.titleText, {fontSize: 10}]}>
          Não possui conta? Crie seu time de Lendas
        </Text>
      </View>
    </Animated.View>
  );
};

const LoginBox = styled.View`
  border-radius: 3px;
  flex-direction: column;
  box-shadow: 1px 1px #ccc;
  /* background-color: ${Colors.primary.main}; */
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 30px;
  color: ${Colors.primary.contrastText};
  align-self: center;
  /* text-transform: uppercase; */
  font-family: 'Times New Roman';
`;
