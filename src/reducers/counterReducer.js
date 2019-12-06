import {ADD_COUNTER} from '../action/types';

const initialState = {
  counterName: '',
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,

        value: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
