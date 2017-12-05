import firebase from 'firebase';
import { AsyncStorage } from 'react-native';
import {
  GET_U_ID
} from './types';
export const addFavorite = ({ videoId, url, title, channelTitle, description  }) => {
  const { currentUser } = firebase.auth();
  
  return () => {
    firebase.database().ref(`userFav/${currentUser.uid}/${videoId}`)
      .set({ videoId, url, title, channelTitle, description });
  };
};

export const removeFavorite = ({ videoId }) => {
  const { currentUser } = firebase.auth();
  
  return () => {
    firebase.database().ref(`userFav/${currentUser.uid}/${videoId}`)
      .remove();
  };
};

export const getUID = () => {
  return (dispatch) => {
    AsyncStorage.getItem('currentUser', (result) => {
      const storage = JSON.parse(result);
    })
    .then((result) => {
      dispatch({ type: GET_U_ID, payload: result });
    });
  };
};