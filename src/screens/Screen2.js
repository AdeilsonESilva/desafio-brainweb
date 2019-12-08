import React from 'react';
import {View, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Screen2 = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>About</Text>
  </View>
);

Screen2.navigationOptions = {
  title: 'Config',
  tabBarIcon: ({tintColor}) => (
    <FontAwesomeIcon icon={faStar} size={25} color={tintColor} />
  ),
};

export default Screen2;
