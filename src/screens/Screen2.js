import React from 'react';
import {View, Text} from 'react-native';

const Screen2 = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>About</Text>
  </View>
);

Screen2.navigationOptions = {
  title: 'About',
};

export default Screen2;
