import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Toast from './toast';

const ButtonDefault = props => {
  const press = () => {
    props.onPress();
    Toast(props.toast);
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.button, props.styleButton]}
        onPress={press}>
        <Text style={styles.textButton} numberOfLines={2} ellipsizeMode="tail">
          {props.text}
        </Text>
      </TouchableOpacity>
    </>
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

export default ButtonDefault;
