import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const getToken = async () => {
  return await AsyncStorage.getItem('token');
};

export const axiosAuth = axios.create({
  //   baseUrl: API_URI,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: `Bearer  ${getToken()}`,
  },
});

export const axiosNoAuth = axios.create({
  //   baseUrl: API_URI,
  headers: {
    'Content-Type': 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
  },
});
