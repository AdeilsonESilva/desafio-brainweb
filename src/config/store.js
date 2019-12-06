import {createStore, combineReducers} from 'redux';
import counterReducer from '../reducers/counterReducer';

const rootReducer = combineReducers({
  counters: counterReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
