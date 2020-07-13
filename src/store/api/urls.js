// import {BASE_URL} from 'react-native-dotenv';
const BASE_URL = 'http://192.168.15.5:3000/api';

export const getURL = (baseUrl, params) => {
  const searchParamsKeys = Object.keys(params);
  let url = '';
  searchParamsKeys.map((param, index) => {
    url +=
      index === searchParamsKeys.length - 1
        ? `${param}=${params[param]}`
        : `${param}=${params[param]}&`;
  });
  return `${baseUrl}?${url}`;
};

export const urls = {
  LOGIN: `${BASE_URL}/user/login/`,
  LEAGUES: `${BASE_URL}/league/list`,
  TEAMS: `${BASE_URL}/team/list`,
  NEW_TEAM: `${BASE_URL}/team/create`,
  VALIDATE_TEAM: `${BASE_URL}/team/validate`,
};
