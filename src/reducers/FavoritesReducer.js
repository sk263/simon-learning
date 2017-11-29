import { FAVORITES_FETCH } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FAVORITES_FETCH:
      return action.payload;
    default:
      return state;
  }
};