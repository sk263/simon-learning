import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
  REG_USER_FAILED,
  REG_USER_SUCCESS,
  INPUT_UPDATE
} from './types';

//LOGIN USER

export const loginStart = ({ email, password }) => {
  
    return (dispatch) => {
      dispatch({ type: INPUT_UPDATE, payload: { prop: 'loading', value: true } });
    
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFailed(dispatch));
    
    };
  };
  
  const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    
    Actions.mainSceens();
  };
  
  const loginUserFailed = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAILED });
  };
  
//REGISTERING USER

export const regStart = ({ email, password }) => {
  
    return (dispatch) => {
      dispatch({ type: INPUT_UPDATE, payload: { prop: 'loading', value: true } });
    
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => regUserSuccess(dispatch))
        .catch(() => regUserFailed(dispatch));
    
    };
  };
  
  const regUserSuccess = (dispatch, user) => {
    dispatch({ type: REG_USER_SUCCESS, payload: user });
    
    Actions.registerScene();
  };
  
  const regUserFailed = (dispatch) => {
    dispatch({ type: REG_USER_FAILED, payload: 'Email is already in use!' });
  };


  // PROVJRE
  export const inputUpdate = ({ prop, value }) => {
    return {
      type: INPUT_UPDATE,
      payload: { prop, value }
    };
  };

  export const passDontMatch = () => {
    return {
      type: REG_USER_FAILED,
      payload: 'Passwords dont match!'
    };
  };

  export const passTooShort = () => {
    return {
      type: REG_USER_FAILED,
      payload: 'Password is too short'
    };
  };

  export const noEmail = () => {
    return {
      type: REG_USER_FAILED,
      payload: 'Please enter an email'
    };
  };