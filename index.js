/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import Routes from './src';
import {name as appName} from './app.json';
import store from './src/store';

const APP = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

AppRegistry.registerComponent(appName, () => APP);
