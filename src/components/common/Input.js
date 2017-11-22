import React from 'react';
import { TextInput, View } from 'react-native';

const Input = ({ inputText, onChangeText, placeholderText, passwordProtector, placeholderTextColor }) => {
 
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={passwordProtector}
        placeholder={placeholderText}
        placeholderTextColor={placeholderTextColor}
        autoCorrect={false}
        style={inputStyle}
        value={inputText}
        onChangeText={onChangeText} />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: 40,
    width: 100
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };