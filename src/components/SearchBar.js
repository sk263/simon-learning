import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Spinner } from '../components/common';

class SearchBar extends Component {
  state = { term: '' };
  
  renderLoading() {
    if (this.props.loading) {
      return <Spinner size="small" />;      
    }
    else if (this.state.term !== '') {
      return (
        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ term: '' })} >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon 
              name = 'x-circle'
              type = 'foundation'
              color = 'red' />
          </View>
        </TouchableOpacity>
      );
    }
  }

  render(){
    return (
      <View style = { styles.containerStyle  }>
        <TextInput
          style = { { flex: 9, height: 50 } }
          onChangeText = { term => {
            this.setState({ term });
            this.props.onSearch(term);
            }}
          value = { this.state.term }
          placeholder = 'Search...' />
        
        {this.renderLoading()}
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row', 
    height:58, 
    justifyContent: 'center', 
    borderBottomColor: '#a3a3a3',
    borderBottomWidth: 3,
    paddingLeft: 16,
    paddingRight: 16
  }
};

export default SearchBar;