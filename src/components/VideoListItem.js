import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../actions';

class VideoListItem extends Component {
  state = { user: '', databId: '' };

  componentWillMount() {
    const { currentUser } = firebase.auth();
    this.setState({ user: currentUser.uid });
  }

  componentDidMount() {
    const { video } = this.props;
    const { videoId } = video.id;

    firebase.database().ref(`userFav/${this.state.user}/${videoId}`).once('value')
      .then(snapshot => this.setState({ databId: (snapshot.val().videoId) }))
      .catch(() => {});
  }

  isClicked() {
    const { video } = this.props;   
    const { videoId } = video.id;
    
    const {
      title,
      channelTitle,
      description,
      thumbnails: { medium: { url } }
    } = video.snippet;

    if (this.state.databId === videoId) {
      this.props.removeFavorite({ videoId });
      this.setState({ databId: '' });
    } else {
      this.props.addFavorite({ videoId, url, title, channelTitle, description });
      this.setState({ databId: videoId });
    }
  }

  renderStar() {
    const { video } = this.props;
    const { videoId } = video.id;
    const { starStyle } = styles;

    if (videoId === this.state.databId) {
      return ( 
        <Image 
          style = { starStyle } 
          source = { require( '../images/starGold.png' ) } /> 
      );
    }
    else {
      return ( 
        <Image 
          style = { starStyle } 
          source = { require( '../images/star.png' ) } /> 
      );
   
    }
  }

  renderIsLiveText() {
    const { video } = this.props;
    const { liveBroadcastContent } = video.snippet;

    if (liveBroadcastContent === 'live'){
      return 'Live';
    }
  }

  render() {
    const { containerStyle, imageStyle, titleStyle, starContainer } = styles;

    const { video } = this.props;

    const {
      title,
      channelTitle,
      description,
      thumbnails: { medium: { url } }
    } = video.snippet;
      
    return (
      <View style = { containerStyle }>
        <Image 
          style = { imageStyle }
          source = {{ uri: url }} />
        <View style = {{ width: 270, alignSelf: 'center' }}>
          <Text style = { titleStyle }>{ title } </Text>
          <Text style = {{ color: 'green' }}>{ this.renderIsLiveText() }</Text>
          <Text>{ channelTitle }</Text>
          <Text style = {{ paddingTop: 8, paddingBottom: 8 }}>{ description }</Text>
        </View>
        <View style = { starContainer } >
          <TouchableOpacity
            onPress={this.isClicked.bind(this)}>
            {this.renderStar()}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  imageStyle: {
    alignSelf: 'stretch',
    height: 180
  },
  titleStyle: {
    marginTop: 8,
    fontSize: 16,
    color: '#000'
  },
  containerStyle: {
    position: 'relative',
    marginTop: 32, 
    borderBottomWidth: 1, 
    borderBottomColor: '#2c3e54',
    backgroundColor: '#efefef'
  },
  starContainer: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  starStyle: {
    width: 60,
    height: 60
  }
};

const mapStateToProps = (state) => {
  const { currentUser, dbVideoId } = state.video;
  return {
    currentUser,
    dbVideoId
  };
};

export default connect(mapStateToProps, { addFavorite, removeFavorite })(VideoListItem);