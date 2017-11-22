import React from 'react';
import { View, Text, Image } from 'react-native';

const VideoListItem = ({ video }) => {
  const { imageStyle, titleStyle } = styles;
  const {
    title,
    channelTitle,
    description,
    thumbnails: { medium: { url } }
  } = video.snippet;
  return (
    <View style={{ marginTop: 32, borderBottomWidth: 1, borderBottomColor: '#2c3e54', backgroundColor: '#efefef' }}>
      <Image 
        style = { imageStyle }
        source={{ uri: url }} />
      <View style={{ width: 270, alignSelf: 'center' }}>
        <Text style={ titleStyle }>{title}</Text>
        <Text>{channelTitle}</Text>
        <Text style={{ paddingTop: 8, paddingBottom: 8 }}>{description}</Text>      
      </View>    
    </View>
  );
};

const styles = {
  imageStyle: {
    alignSelf: 'stretch',
    height: 180
  },
  titleStyle: {
    marginTop: 8,
    fontSize: 16,
    color: '#000'
  }
};

export default VideoListItem;