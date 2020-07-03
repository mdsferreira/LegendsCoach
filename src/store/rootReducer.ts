import {combineReducers} from 'redux';
import userReducer from './ducks/user';
import leagueReducer from './ducks/league';
import teamReducer from './ducks/team';

const rootReducer = combineReducers({
  user: userReducer,
  league: leagueReducer,
  team: teamReducer,
});

export default rootReducer;
