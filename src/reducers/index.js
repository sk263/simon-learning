import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import VideoReducer from './VideoReducer';
import FavoritesReducer from './FavoritesReducer';

export default combineReducers({
  auth: AuthReducer,
  video: VideoReducer,
  favorites: FavoritesReducer
});