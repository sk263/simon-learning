import {
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
  REG_USER_SUCCESS,
  REG_USER_FAILED,
  INPUT_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  regConfPass: '',  
  error: '',
  user: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOGIN_USER_FAILED:
      return { ...state, password: '', error: 'Invalid email or password', loading: false };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case REG_USER_FAILED:
      return { ...state, password: '', regConfPass: '', loading: false, error: action.payload };
    case REG_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    default:
      return state;
  }
};