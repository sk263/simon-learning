import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import LoginForm from '../components/LoginForm';

class LoginScene extends Component {

 render() {
  return (
    <View style={{ flex:1, flexDirection: 'column', paddingLeft: 20, paddingRight: 20, backgroundColor: "#2c3e54", alignItems: 'center' }} >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{ width: 75, height: 75 }}
          source={require('../images/react.png')} />
        <Text style={{ fontSize: 48, color: '#fff' }}>Naslov</Text>
      </View>
      <View style={{ flex: 1 }}>
        <LoginForm />
      </View>
    </View>
    );
  }
}

export default LoginScene;