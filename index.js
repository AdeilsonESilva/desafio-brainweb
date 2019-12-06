/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import App from './src/App';
import {name as appName} from './app.json';
import configureStore from './src/config/store';

const store = configureStore();

const APP = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => APP);
