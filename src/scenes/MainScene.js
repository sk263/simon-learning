import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import Header from '../components/Header';

const API_KEY = 'AIzaSyAlEtJqvwP4oJc3BAiRW4B8XQw8T3XjIzU';

class MainScene extends Component {
  state = { loading: false, videos: [] }

  onSearch = term => {
    this.searchYT(term);
  }

  searchYT = term => {
    this.setState({ loading: true });
    YTSearch({ key: API_KEY, term }, videos => {
      console.log(this.state.videos);
      this.setState({ loading: false, videos });
    });
  }

 render() {
  const { loading, videos } = this.state;

  return (
    <View style={{ flex: 1 }} >
      <Header />
      <SearchBar 
        loading={loading}
        onSearch={this.onSearch} />
      <VideoList
        videos={videos} />
    </View>
    );
  }
}

export default MainScene;