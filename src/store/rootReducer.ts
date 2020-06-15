import {combineReducers} from 'redux';
import userReducer from './ducks/user';
import leagueReducer from './ducks/league';

const rootReducer = combineReducers({
  user: userReducer,
  league: leagueReducer,
});

export default rootReducer;
