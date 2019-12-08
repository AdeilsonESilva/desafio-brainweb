import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import counterReducer from '../reducers/counterReducer';

const rootReducer = combineReducers({
  counters: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
