import firebase from 'firebase';
import { FAVORITES_FETCH } from './types';

export const fetchFavorites = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/userFav/${currentUser.uid}`)
    .on('value', snapshot => {
        dispatch({ type: FAVORITES_FETCH, payload: snapshot.val() });
    });
  };
};