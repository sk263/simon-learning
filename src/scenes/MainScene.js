import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import YTSearch from 'youtube-api-search';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import Header from '../components/Header';
import { getUID } from '../actions';

const API_KEY = 'AIzaSyAlEtJqvwP4oJc3BAiRW4B8XQw8T3XjIzU';

class MainScene extends Component {
  state = { loading: false, videos: [] }

  componentWillMount(){
    if (this.props.currentUser === ''){
      this.props.getUID();
    }
  }

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
        loading = { loading }
        onSearch = { this.onSearch } />
      <VideoList
        videos = { videos } />
    </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentUser } = state.video;
  return {
    currentUser
  };
};

export default connect(mapStateToProps, { getUID })(MainScene);