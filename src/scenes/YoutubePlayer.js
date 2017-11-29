import React, { Component } from 'react';
import { View } from 'react-native';
import Youtube from 'react-native-youtube';

class YoutubePlayer extends Component {

  render(){
    const apiKey = "AIzaSyAlEtJqvwP4oJc3BAiRW4B8XQw8T3XjIzU";
    const { videoId } = this.props;
    return (
      <View>
        <Youtube  apiKey = { apiKey } videoId = 'snpatsa1kRw' play ={true} hidden = { false } fullscreen = { true } loop = { false } style = {{ alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10 }} />
      </View> 
    );
  }
}

export default YoutubePlayer;