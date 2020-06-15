import React, {useState, useEffect} from 'react';
// import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {Text, View, ImageBackground, ActivityIndicator} from 'react-native';
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

export const AuthScreen = ({navigation}) => {
  const [errorMsg, setErrorMesage] = useState('');
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

  useEffect(() => {
    (async () => {
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
                <>
                  <Text style={styles.loginBoxTitle}>Iniciar sessão</Text>
                  <Input
                    name="email"
                    placeholder={'Digite o seu email de acesso'}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    hasError={touched.email && errors.email}
                    setTouched={() => setFieldTouched('email')}
                  />
                  <Input
                    name="password"
                    placeholder="Digite a sua senha"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    secureTextEntry
                    hasError={touched.password && errors.password}
                    setTouched={() => setFieldTouched('password')}
                  />
                  {errorMsg ? (
                    <Text style={styles.errorText}>{errorMsg}</Text>
                  ) : null}
                  <Button>
                    {loading ? (
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
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 30px;
  color: ${Colors.gold};
  align-self: center;
  /* text-transform: uppercase; */
  font-family: 'Times New Roman';
`;
