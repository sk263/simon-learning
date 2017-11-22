import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import SceneManager from './SceneManager';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCnVJizygcr6H6avaaQUtk41AEsmWcwHHw",
      authDomain: "firstapp-b0501.firebaseapp.com",
      databaseURL: "https://firstapp-b0501.firebaseio.com",
      projectId: "firstapp-b0501",
      storageBucket: "firstapp-b0501.appspot.com",
      messagingSenderId: "169841476081"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)) ;
    StatusBar.setTranslucent(true);
    StatusBar.setBarStyle('light-content', false);
    StatusBar.setBackgroundColor('#2c3e54');
    return (
      <Provider store={store}>
        <SceneManager />
      </Provider>
    );
  }
}

export default App;