import {ADD_COUNTER, INCREASE_COUNTER} from '../actions/types';

const INITIAL_STATE = [
  {
    number: 8,
    selected: true,
  },
  {
    number: 12,
  },
  {
    number: 1,
  },
  {
    number: 2,
  },
  {
    number: 3,
  },
];

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return [...state, action.counter];
    case INCREASE_COUNTER:
      const newState = state.map((item, index) => {
        if (action.index === index) {
          item.selected = true;
          return item;
        }

        item.selected = false;
        return item;
      });
      return newState;
    default:
      return state;
  }
};

export default counterReducer;
