import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import firebase from 'firebase';
import { LoginManager } from 'react-native-fbsdk';

class Header extends Component {
  render() {
    const { containerStyle, textStyle, favoritesStyle, logoutStyle } = styles;
    
    return (  
      <View style = { containerStyle }>
        <Text style = { textStyle }>FirstAPP</Text>
        <TouchableOpacity 
          style = { favoritesStyle } 
          onPress = { () => Actions.favoritesScene() } >
          <Icon
            name='favorite-border'
            type='materialicons'
            color='#ffffff' />
        </TouchableOpacity>
        <TouchableOpacity 
          style = { logoutStyle } 
          onPress = { () => { AsyncStorage.removeItem('currentUser')
                              .then(() => firebase.auth().signOut())
                              .then(() => LoginManager.logOut())
                              .then(() => Actions.root()); } } >
          <Icon
            name='md-log-out'
            type='ionicon'
            color='#ffffff' />
        </TouchableOpacity>
      </View> 
    );
  }
}

const styles = {
  containerStyle: {
    position: 'relative',
    alignSelf: 'stretch', 
    height: 45, 
    justifyContent: 'center',
    backgroundColor: '#2c3e54'
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center', 
    color: '#fff'
  },
  favoritesStyle: {
    position: 'absolute',
    right: 24
  },
  logoutStyle: {
    position: 'absolute',
    left: 24
  }
};

export default Header;