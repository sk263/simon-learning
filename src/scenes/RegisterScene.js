import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import { Input, Button, Spinner } from '../components/common';
import { regStart, passDontMatch, inputUpdate, noEmail, passTooShort } from '../actions';
import { Actions } from 'react-native-router-flux';


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
   const { containerStyle, backButtonStyle } = styles;
  return (
    <View style = { containerStyle } >
      <View style={{ flex: 2, position: 'relative' }}>
      
        <TouchableHighlight style = { backButtonStyle } onPress={() => Actions.loginScene()}>
          <Image style={{ width: 70, height:70 }} source={ require('../images/back.png') } />
        </TouchableHighlight>

      </View>

      <View style = { { flex:2, flexDirection: 'column', justifyContent: 'center' } } >
        <Input
          placeholderText = "Email" 
          placeholderTextColor = "#a8adb7"
          inputText={this.props.email}
          onChangeText = { (value) => this.props.inputUpdate({ prop: 'email', value }) } />
        <Input
          passwordProtector
          placeholderText = "Password" 
          placeholderTextColor = "#a8adb7"
          onChangeText = { (value) => this.props.inputUpdate({ prop: 'password', value }) }
          inputText = { this.props.password } />
        <Input
          passwordProtector
          placeholderText = "Confirm password" 
          placeholderTextColor = "#a8adb7"
          onChangeText={ (value) => this.props.inputUpdate({ prop: 'regConfPass', value }) }
          inputText = { this.props.regConfPass } />
          
        <Text style={{ color: 'red', textAlign: 'center' }}>{ this.props.error }</Text>
        <Text style={{ color: 'green', textAlign: 'center' }}>{ this.props.success }</Text>
        
      
      </View>
      <View style={{ flex: 3, justifyContent: 'center' }}>
        {this.renderRegButton()}
      </View>
    </View>
    );
  }
}
const styles = {
  backButtonStyle: {
    width: 70, 
    height: 70, 
    position: 'absolute', 
    top: 10, 
    left: 0
  },
  containerStyle: {
    flex:1, 
    flexDirection: 'column', 
    paddingTop: 20, 
    paddingLeft: 20, 
    paddingRight: 20, 
    backgroundColor: "#2c3e54"
  }
};


const mapStateToProps = ({ auth }) => {
  const { email, password, regConfPass, loading, error, success } = auth;
  return {
    email,
    password,
    regConfPass,
    loading,
    error,
    success
  };
};

export default connect(mapStateToProps, 
  { inputUpdate, regStart, passDontMatch, passTooShort, noEmail, passDontMatch })(RegisterScene);