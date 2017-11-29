import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const FavHeader = () => {
  const { containerStyle, textStyle, favoritesStyle, favIconStyle } = styles;
  return (
    <View style = { containerStyle }>
      <Text style = { textStyle }>Favorite</Text>
      <TouchableOpacity style = { favoritesStyle } onPress = { () => Actions.mainScene() } >
        <Image
          style = { favIconStyle }
          source = { require('../images/back.png') } />
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
  favIconStyle: {
    width: 20,
    height: 20
  },
  favoritesStyle: {
    position: 'absolute',
    left: 24
  },
};

export default FavHeader;