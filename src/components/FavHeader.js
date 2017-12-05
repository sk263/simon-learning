import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const FavHeader = () => {
  const { containerStyle, textStyle, favoritesStyle } = styles;
  return (
    <View style = { containerStyle }>
      <Text style = { textStyle }>Favorite</Text>
      <TouchableOpacity style = { favoritesStyle } onPress = { () => Actions.mainScene() } >
        <Icon
          name='ios-arrow-back'
          type='ionicon'
          color='#ffffff' />
      </TouchableOpacity>
    </View> 
  );
};

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
    left: 16,
    padding: 8
  },
};

export default FavHeader;