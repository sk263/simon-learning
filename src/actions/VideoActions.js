import firebase from 'firebase';

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

