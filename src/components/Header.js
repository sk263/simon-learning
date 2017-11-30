import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={{ alignSelf: 'stretch', height: 45, justifyContent: 'center', backgroundColor: '#2c3e54' }}> 
      <Text style={{ fontSize: 24, textAlign: 'center', color: '#fff' }}>HEADER</Text>
    </View> 
  );
};

export default Header;