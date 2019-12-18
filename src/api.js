import {AsyncStorage} from 'react-native';
export const login = ({username, password}) => {
  AsyncStorage.setItem('userToken', 123);
  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve({
  //       data: {
  //         token: 'alksjdaçlksjd',
  //         usename: 'marcelosife@gmail.com',
  //       },
  //     });
  //   }, 1000);
  // });
};
