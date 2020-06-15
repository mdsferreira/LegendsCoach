import {BASE_URL} from 'react-native-dotenv';

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
};
