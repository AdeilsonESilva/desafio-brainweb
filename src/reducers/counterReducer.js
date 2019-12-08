import {ADD_COUNTER} from '../actions/types';

const INITIAL_STATE = [];

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return [...state, action.counter];
    default:
      return state;
  }
};

export default counterReducer;
