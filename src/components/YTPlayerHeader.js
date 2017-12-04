import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const YTPlayerHeader = () => {
  const { containerStyle, textStyle } = styles;
  return (
    <View style = { containerStyle }>
      <Text style = { textStyle }>Header</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    height: 45,
    backgroundColor: '#2c3e54'
  },
  textStyle: {
    color: '#ffffff'
  }
};

export default YTPlayerHeader;