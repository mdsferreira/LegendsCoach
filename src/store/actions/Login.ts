export const loginEmail = (dispatch, {userName, password}) => {
  dispatch({type: 'AUTH_USER', payload: {userName, password}});
};
