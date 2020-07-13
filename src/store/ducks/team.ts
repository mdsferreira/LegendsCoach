import {createActions, createReducer} from 'reduxsauce';
import {urls} from '../api/urls';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {ITeam, IStatus, createTeamBackend, createTeam} from '../types/team';

/**Actions and types definitions **/
export const {Types, Creators} = createActions({
  getTeamRequest: null,
  getTeamSuccess: ['team'],
  getTeamFailure: ['error'],
  createTeamRequest: null,
  createTeamSuccess: ['team'],
  createTeamFailure: ['error'],
});

interface IState {
  team: ITeam;
  loading: boolean;
  error: string;
  status: IStatus;
}

const INITIAL_STATE: IState = {
  team: {
    id: null,
    name: '',
    logo: {
      id: null,
      badge: '',
      badgeColor: '',
      logo: '',
      logoColor: '',
    },
    points: 100,
  },
  loading: false,
  error: '',
  status: '',
};

export const request = (state = INITIAL_STATE): IState => {
  return {
    ...state,
    loading: true,
  };
};
export const success = (state = INITIAL_STATE, action): IState => {
  return {
    ...state,
    loading: false,
    error: '',
    team: action.leagues,
  };
};
export const failure = (state = INITIAL_STATE, action): IState => {
  return {
    ...state,
    loading: false,
    team: null,
    error: action.error,
  };
};

export const createRequest = (state = INITIAL_STATE): IState => {
  return {
    ...state,
    loading: true,
  };
};
export const createSuccess = (state = INITIAL_STATE, action): IState => {
  return {
    ...state,
    loading: false,
    error: '',
    team: action.team,
  };
};
export const createFailure = (state = INITIAL_STATE, action): IState => {
  return {
    ...state,
    loading: false,
    team: null,
    error: action.error,
  };
};

export const HANDLERS = {
  [Types.GET_TEAM_REQUEST]: request,
  [Types.GET_TEAM_SUCCESS]: success,
  [Types.GET_TEAM_FAILURE]: failure,
  [Types.CREATE_TEAM_REQUEST]: createRequest,
  [Types.CREATE_TEAM_SUCCESS]: createSuccess,
  [Types.CREATE_TEAM_FAILURE]: createFailure,
};
export default createReducer(INITIAL_STATE, HANDLERS);

/** Custom actions definition */
export const Actions = {
  ...Creators,
  validateTeamName: async teamName => {
    let isValid = false;
    const token = await AsyncStorage.getItem('token');
    await axios
      .post(
        urls.VALIDATE_TEAM,
        {name: teamName},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        },
      )
      .then(response => {
        isValid = response.data;
      })
      .catch(error => {
        isValid = false;
      });
    return isValid;
  },
  createTeam: async (dispatch, team) => {
    dispatch(Creators.createTeamRequest());
    const token = await AsyncStorage.getItem('token');
    axios
      .post(urls.NEW_TEAM, createTeamBackend(team), {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
      .then(response => {
        const team = response.data;
        dispatch(Creators.createTeamSuccess(createTeam(team)));
      })
      .catch(error => {
        const errorMsg =
          error.response && error.response.data ? error.response.data : '';
        dispatch(Creators.createTeamFailure(errorMsg));
        throw error;
      });
  },
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
