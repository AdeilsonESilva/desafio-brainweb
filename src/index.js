// src/index.js

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Home: Screen1,
      About: Screen2,
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
