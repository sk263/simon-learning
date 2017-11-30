import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import LoginForm from '../components/LoginForm';

class LoginScene extends Component {
  
  onFBClick() {

  }

  render() {
    const { containerStyle, headerStyle } = styles;
    return (
      <View style = { containerStyle }>
        <View style={ headerStyle }>
          <Image
            style={{ width: 75, height: 75 }}
            source = { require('../images/react.png') } />
          <Text style={{ fontSize: 48, color: '#fff' }}>FirstAPP</Text>
        </View>
        <View style={{ flex: 1 }}>
          <LoginForm />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex:1, 
    flexDirection: 'column', 
    paddingLeft: 20, 
    paddingRight: 20, 
    backgroundColor: "#2c3e54", 
    alignItems: 'center'
  },
  headerStyle: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
};

export default LoginScene;