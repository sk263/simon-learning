import {
  GET_U_ID
} from '../actions/types';

const INITIAL_STATE = {
  currentUser: ''
};

export default ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case GET_U_ID:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};