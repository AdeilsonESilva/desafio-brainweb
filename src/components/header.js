import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = props => (
  <View style={styles.container}>
    <Text style={styles.headerText}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#203158',
    flex: 1,
    margin: 10,
    justifyContent: 'flex-end',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default Header;
