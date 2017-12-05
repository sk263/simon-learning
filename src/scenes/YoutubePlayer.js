import React from 'react';
import { View, WebView } from 'react-native';
import YTPlayerHeader from '../components/YTPlayerHeader';

const YoutubePlayer = ({ videoId }) => {
    return (
      <View style = { { flex: 1 } }>
        <YTPlayerHeader />
        <WebView
          source = { { uri: 'https://www.youtube.com/watch?v=' +  videoId + '?rel=0&autoplay=1' } }
          style = { { flex: 1 } } />
      </View>
    );
};

export default YoutubePlayer;