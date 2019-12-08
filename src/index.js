// src/index.js

import CountersScreen from './screens/CountersScreen';
import ConfigsScreen from './screens/ConfigsScreen';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Home: CountersScreen,
      About: ConfigsScreen,
    },
    {
      tabBarOptions: {
        activeTintColor: '#F39502',
        style: {
          backgroundColor: '#203158',
        },
      },
    },
  ),
);

export default Routes;
