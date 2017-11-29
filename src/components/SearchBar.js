import React, { Component } from 'react';
import { View, TextInput, Image, TouchableHighlight } from 'react-native';
import { Spinner } from '../components/common';

class SearchBar extends Component {
  state = { term: '' };
  
  renderLoading() {
    if (this.props.loading) {
      return <Spinner size="small" />;      
    }
    else if (this.state.term !== '') {
      return (
        <TouchableHighlight style={{ flex: 1 }} onPress={() => this.setState({ term: '' })} >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image style = {{ width: 20, height: 20 }} source = { require('../images/icon-x.png') } />
          </View>
        </TouchableHighlight>
      );
    }
  }

  render(){
    return (
      <View style={{ flexDirection: 'row', height: 60, paddingTop: 10 }}>
        <TextInput
          style={{ flex: 9, height: 50 }}
          onChangeText={term => {
            this.setState({ term });
            this.props.onSearch(term);
            }}
          value={this.state.term}
          placeholder='Search...' />
        
        {this.renderLoading()}
      </View>
    );
  }
}

export default SearchBar;