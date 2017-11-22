import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Spinner } from '../components/common';

class SearchBar extends Component {
  state = { term: '' };
  
  renderLoading() {
    if (this.props.loading) {
      return <Spinner size="small" />;      
    }
    else if (this.state.term !== '') {
      return <Text>XXXXXX</Text>;
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