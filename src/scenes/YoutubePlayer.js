import React from 'react';
import { View } from 'react-native';
import YouTube from 'react-native-youtube';
import YTPlayerHeader from '../components/YTPlayerHeader';

const YoutubePlayer = ({ videoId }) => {

    return (
      <View style = { { flex: 1 } }>
        <YTPlayerHeader />
        <YouTube
          apiKey = "AIzaSyAlEtJqvwP4oJc3BAiRW4B8XQw8T3XjIzU"
          videoId={ videoId }   // The YouTube video ID
          play={true}             // control playback of video with true/false
          fullscreen={true}       // control whether the video should play in fullscreen or inline
          loop={true}             // control whether the video should loop when ended
          style={{ alignSelf: 'stretch', height: 300 }} />
      </View>
    );
};

export default YoutubePlayer;