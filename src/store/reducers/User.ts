import {AUTH_USER} from '../actionTypes';

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      console.log(state, 'action');
      return {
        ...state,
        userName: action.payload.userName,
      };

    default:
      return state;
  }
};

export default UserReducer;
