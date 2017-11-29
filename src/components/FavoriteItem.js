import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, TouchableOpacity } from 'react-native';

class FavoriteItem extends Component {
  render() {
    
    const { videoId, title, channelTitle, url } = this.props.favorite;
    const { containerStyle, imageStyle, infoContainerStyle, titleStyle } = styles;
    return (
      <TouchableOpacity style = { containerStyle } onPress = { () => Actions.ytPlayer(this) } >
        <Image source = { { uri: url } } style = { imageStyle } />        
        
        <View style = { infoContainerStyle } >
          <Text style = { titleStyle }>{ title }</Text>
          <Text>{ channelTitle }</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  containerStyle: {
    height: 72,
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 8
  },
  imageStyle: {
    flex: 1
  },
  infoContainerStyle: {
    flex: 4,
    paddingLeft: 8,
    justifyContent: 'center'
  },
  titleStyle: {
    color: '#000000',
    fontSize: 15
  }
};

export default FavoriteItem;