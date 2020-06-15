import {createActions, createReducer} from 'reduxsauce';
import {urls} from '../api/urls';
import {axiosAuth, axiosNoAuth} from '../api/config';
import AsyncStorage from '@react-native-community/async-storage';

/**Actions and types definitions **/
export const {Types, Creators} = createActions({
  authUser: authUser,
  authUserRequest: null,
  authUserSuccess: ['user'],
  authUserFailure: ['error'],
});

const INITIAL_STATE = {
  loading: false,
  user: null,
  error: '',
};

export const request = (state = INITIAL_STATE) => {
  return {
    ...state,
    loading: true,
  };
};
export const success = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: false,
    error: '',
    user: action.user,
  };
};
export const failure = (state = INITIAL_STATE, action) => {
  return {
    loading: false,
    user: null,
    error: action.error,
  };
};

export const HANDLERS = {
  [Types.AUTH_USER_REQUEST]: request,
  [Types.AUTH_USER_SUCCESS]: success,
  [Types.AUTH_USER_FAILURE]: failure,
};
export default createReducer(INITIAL_STATE, HANDLERS);

/** Custom actions definition */
function authUser(params) {
  return dispatch => {
    dispatch(Creators.authUserRequest());
    axiosNoAuth
      .post(urls.LOGIN, params)
      .then(response => {
        const user = response.data;
        AsyncStorage.setItem('token', user.token);
        // AsyncStorage.setItem('email', params.email);
        // AsyncStorage.setItem('password', params.password);
        dispatch(Creators.authUserSuccess(user));
      })
      .catch(error => {
        const errorMsg =
          error.response && error.response.data
            ? error.response.data
            : 'Network error';
        dispatch(Creators.authUserFailure(errorMsg));
        throw error;
      });
  };
}
