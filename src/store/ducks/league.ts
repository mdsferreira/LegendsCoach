import {createActions, createReducer} from 'reduxsauce';
import {urls} from '../api/urls';
import {axiosAuth} from '../api/config';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

/**Actions and types definitions **/
export const {Types, Creators} = createActions({
  getLeague: getLeague,
  getLeagueRequest: null,
  getLeagueSuccess: ['leagues'],
  getLeagueFailure: ['error'],
});

const INITIAL_STATE = {
  loading: false,
  leagues: null,
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
    leagues: action.leagues,
  };
};
export const failure = (state = INITIAL_STATE, action) => {
  return {
    loading: false,
    leagues: null,
    error: action.error,
  };
};

export const HANDLERS = {
  [Types.GET_LEAGUE_REQUEST]: request,
  [Types.GET_LEAGUE_SUCCESS]: success,
  [Types.GET_LEAGUE_FAILURE]: failure,
};
export default createReducer(INITIAL_STATE, HANDLERS);

/** Custom actions definition */
function getLeague() {
  return async dispatch => {
    dispatch(Creators.getLeagueRequest());
    const token = await AsyncStorage.getItem('token');
    axios
      .get(urls.LEAGUES, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
      .then(response => {
        const leagues = response.data;
        dispatch(Creators.getLeagueSuccess(leagues));
      })
      .catch(error => {
        const errorMsg =
          error.response && error.response.data ? error.response.data : '';
        dispatch(Creators.getLeagueFailure(errorMsg));
        throw error;
      });
  };
}
