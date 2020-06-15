import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const getToken = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
};

export const axiosAuth = axios.create({
  //   baseUrl: API_URI,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
});

export const axiosNoAuth = axios.create({
  //   baseUrl: API_URI,
  headers: {'Content-Type': 'application/json'},
});
