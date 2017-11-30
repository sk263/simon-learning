import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchFavorites } from '../actions';
import FavoriteItem from '../components/FavoriteItem';
import FavHeader from '../components/FavHeader';

class FavoritesScene extends Component {
  componentWillMount() {
    this.props.fetchFavorites();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ favorites }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(favorites);
  }

  renderRow(favorite) {
    return <FavoriteItem favorite = { favorite } />;
  }

  render() {
    return (
      <View>
        <FavHeader />
        <ListView
          enableEmptySections
          dataSource = { this.dataSource }
          renderRow = { this.renderRow } />
      </View>
    );
  }
}

const mapStateToProps = state => {

  const favorites = _.map(state.favorites, (val, uid) => {
    return { ...val, uid };
  });

  return { favorites };
};

export default connect(mapStateToProps, { fetchFavorites })(FavoritesScene);