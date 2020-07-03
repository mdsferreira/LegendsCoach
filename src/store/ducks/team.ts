import {createActions, createReducer} from 'reduxsauce';
import {urls} from '../api/urls';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

/**Actions and types definitions **/
export const {Types, Creators} = createActions({
  getTeamRequest: null,
  getTeamSuccess: ['leagues'],
  getTeamFailure: ['error'],
});

const INITIAL_STATE = {
  team: {
    id: null,
    name: '',
    logo: {},
    points: 100,
  },
  loading: false,
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
  [Types.GET_TEAM_REQUEST]: request,
  [Types.GET_TEAM_SUCCESS]: success,
  [Types.GET_TEAM_FAILURE]: failure,
};
export default createReducer(INITIAL_STATE, HANDLERS);

/** Custom actions definition */
export const Actions = {
  ...Creators,
  getTeam: async dispatch => {
    dispatch(Creators.getTeamRequest());
    const token = await AsyncStorage.getItem('token');
    axios
      .get(urls.TEAMS, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
      .then(response => {
        const leagues = response.data;
        dispatch(Creators.getTeamSuccess(leagues));
      })
      .catch(error => {
        const errorMsg =
          error.response && error.response.data ? error.response.data : '';
        dispatch(Creators.getTeamFailure(errorMsg));
        throw error;
      });
  },
};
