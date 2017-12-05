import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

const YTPlayerHeader = () => {
  const { containerStyle, textStyle, backButtonStyle } = styles;
  return (
    <View style = { containerStyle }>
      <TouchableOpacity style = { backButtonStyle } onPress = { () => Actions.favoritesScene() }>
        <Icon
          name='ios-arrow-back'
          type='ionicon'
          color='#ffffff' />
      </TouchableOpacity>
      <Text style = { textStyle }>FirstApp</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 45,
    backgroundColor: '#2c3e54'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 24
  },
  backButtonStyle: {
    position: 'absolute',
    left: 16,
    padding: 8
  }
};

export default YTPlayerHeader;