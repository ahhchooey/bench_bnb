import * as ApiUtil from '../utils/session_api_util';


export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER =  'LOGOUT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_USER,
  user
})

const logoutCurrentUser = () => ({
  type: LOGOUT_USER,
})


const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const signup = (user) => dispatch => {
  return ApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)))
}

export const login = (user) => dispatch => {
  return ApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)))
}

export const logout = () => dispatch => {
  return ApiUtil.logout().then(() => dispatch(logoutCurrentUser()))
}