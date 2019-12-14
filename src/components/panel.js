import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Panel = props => {
  return (
    <View style={styles.countersOperations}>
      <Text style={styles.blockTitle}>{props.title}</Text>
      <View style={styles.blockContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderRadius: 3,
    padding: 20,
    shadowColor: 'rgba(0,0,0,.7)',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 1,
  },
  textButton: {
    fontSize: 15,
    color: '#14437b',
    fontWeight: 'bold',
    textAlign: 'center',
    minWidth: 90,
  },
});

export default Panel;
