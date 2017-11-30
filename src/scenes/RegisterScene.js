import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Input, Button, Spinner } from '../components/common';
import { regStart, passDontMatch, inputUpdate, noEmail, passTooShort } from '../actions';


class RegisterScene extends Component {

  onRegisterPress(){
    const { email, password, regConfPass } = this.props;
    if (email === '') {
      this.props.noEmail();
    } else if (password !== regConfPass) {
      this.props.passDontMatch();
    } else if (password.length < 6) {
      this.props.passTooShort();
    } else {
      this.props.regStart({ email, password });    
    }
  }

  renderRegButton() {
    if (this.props.loading){
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onRegisterPress.bind(this)} >
        Register
      </Button>
    );
  }

 render() {
  return (
    <View style={{ flex:1, flexDirection: 'column', paddingTop: 20, paddingLeft: 20, paddingRight: 20, backgroundColor: "#2c3e54" }} >
      <View style={{ flex: 2 }} />
      <View style={{ flex:2, flexDirection: 'column', justifyContent: 'center' }}>
        <Input
          placeholderText="Email" 
          placeholderTextColor="#a8adb7"
          inputText={this.props.email}
          onChangeText = { (value) => this.props.inputUpdate({ prop: 'email', value }) } />
        <Input
          passwordProtector
          placeholderText="Password" 
          placeholderTextColor="#a8adb7"
          onChangeText = { (value) => this.props.inputUpdate({ prop: 'password', value }) }
          inputText = { this.props.password } />
        <Input
          passwordProtector
          placeholderText="Confirm password" 
          placeholderTextColor="#a8adb7"
          onChangeText={ (value) => this.props.inputUpdate({ prop: 'regConfPass', value }) }
          inputText={this.props.regConfPass} />
          
        <Text>{this.props.error}</Text>
      
      </View>
      <View style={{ flex: 3, justifyContent: 'center' }}>
        {this.renderRegButton()}
      </View>
    </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, regConfPass, loading, error } = auth;
  return {
    email,
    password,
    regConfPass,
    loading,
    error
  };
};

export default connect(mapStateToProps, { inputUpdate, regStart, passDontMatch, passTooShort, noEmail, passDontMatch })(RegisterScene);