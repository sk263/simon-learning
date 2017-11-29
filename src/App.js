import React, { Component } from 'react';
import { StatusBar, View, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import SceneManager from './SceneManager';
import reducers from './reducers';
import { Spinner } from './components/common';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)) ;


class App extends Component {
  state = { loggedIn: false, loading: true };

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
 
  componentDidMount() {
    AsyncStorage.getItem('currentUser', (result) => {
      const storage = JSON.parse(result);
    })
    .then((result) => {
      console.log(result);
      if (result) {
        this.setState({ loggedIn: true, loading: false });
      } else {
        this.setState({ loggedIn: false, loading: false });
      }
    });
  }

  render() {
    StatusBar.setTranslucent(true);
    StatusBar.setBarStyle('light-content', false);
    StatusBar.setBackgroundColor('#2c3e54');
    if (this.state.loading) {
      return (
        <View style = { { flex: 1, backgroundColor: '#2c3e54' } }>
          <Spinner size='large' />
        </View>
      );
    } else {
        return (
          <Provider store = { store } >
            <SceneManager loggedIn = { this.state.loggedIn } />
          </Provider>
        );
    }
  }
}

export default App;