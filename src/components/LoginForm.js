import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';
import { Input, Button, Spinner } from './common';
import { inputUpdate, loginStart } from '../actions';

class LoginForm extends Component {

  onEnter() {
    const { email, password } = this.props;
    this.props.loginStart({ email, password });
  }

  renderEnterButton() {
    if (this.props.loading){
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onEnter.bind(this)} >
        Enter
      </Button>
    );
  }

  render() {
    return (   
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <Input
            placeholderText="Email" 
            placeholderTextColor="#a8adb7"
            inputText={this.props.email} 
            onChangeText ={ (value) => this.props.inputUpdate({ prop: 'email', value }) } />

          <Input
            passwordProtector
            placeholderText="**********"
            placeholderTextColor="#a8adb7"
            inputText={this.props.password}
            onChangeText={ (value) => this.props.inputUpdate({ prop: 'password', value }) } />
        </View>
        <Text>{this.props.error}</Text>
        <View style={{ flexDirection: 'column', justifyContent: 'flex-end', flex: 1 }}>    
          {this.renderEnterButton()}
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableHighlight onPress={() => Actions.registerScene()}><Text style={{ color: '#a8adb7' }}>Don't have account? Register now!</Text></TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, loading, error } = auth;
  return {
    email,
    password,
    loading,
    error
  };
};

export default connect(mapStateToProps, { inputUpdate, loginStart })(LoginForm);