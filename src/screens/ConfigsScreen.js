import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {
  INCREASE_COUNTER,
  ADD_COUNTER,
  REMOVE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER,
} from '../actions/types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header';

const ConfigsScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const addCounter = () => {
    dispatch({
      type: ADD_COUNTER,
    });
  };

  const removeCounter = () => {
    dispatch({
      type: REMOVE_COUNTER,
    });
  };

  const increaseCounter = () => {
    dispatch({
      type: INCREASE_COUNTER,
    });
  };

  const decreaseCounter = () => {
    dispatch({
      type: DECREASE_COUNTER,
    });
  };

  const resetCounter = () => {
    dispatch({
      type: RESET_COUNTER,
    });
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Header title="Config" />
        <View style={styles.containerView}>
          <View style={styles.countersOperations}>
            <Text style={styles.blockTitle}>Counters</Text>
            <View style={styles.blockContainer}>
              <TouchableOpacity style={styles.button} onPress={addCounter}>
                <Text
                  style={styles.textButton}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {'Add\nCounter'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={removeCounter}>
                <Text style={styles.textButton}>{'Remove\nCounter'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.countersOperations}>
            <View style={styles.countersOperations}>
              <Text style={styles.blockTitle}>Selected Counter</Text>
              <View style={styles.blockContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={increaseCounter}>
                  <Text style={styles.textButton}>
                    {'Increase\nCounter\n(++)'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={decreaseCounter}>
                  <Text style={styles.textButton}>
                    {'Decrease\nCounter\n(--)'}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={[styles.button, styles.buttonReset]}
                onPress={resetCounter}>
                <Text style={styles.textButton}>{'Reset\nCounter'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

ConfigsScreen.navigationOptions = {
  title: 'Config',
  tabBarIcon: ({tintColor}) => (
    <FontAwesomeIcon icon={faStar} size={25} color={tintColor} />
  ),
  tabBarVisible: true,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#001c47',
    flex: 1,
  },
  containerView: {
    flex: 7,
    backgroundColor: '#3E86CB',
  },
  item: {
    margin: 15,
    borderRadius: 6,
    borderWidth: 4,
    borderColor: '#26497E',
    padding: 5,
  },
  itemSelected: {
    backgroundColor: '#DBDBDB',
  },
  itemNotSelected: {
    backgroundColor: '#6DADD1',
  },
  itemTitleSelected: {
    color: '#9E9E9E',
  },
  itemTitleNotSelected: {
    color: '#4E8EB2',
  },
  itemBodySelected: {
    color: '#000',
  },
  itemBodyNotSelected: {
    color: '#4E8EB2',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemBody: {
    fontWeight: 'bold',
    fontSize: 50,
    alignSelf: 'flex-end',
    marginTop: 30,
    marginBottom: 10,
    marginRight: 5,
  },
  title: {
    fontSize: 20,
  },
  countersOperations: {
    flex: 1,
  },
  blockTitle: {
    marginLeft: 30,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
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
  buttonReset: {
    margin: 20,
  },
  textButton: {
    fontSize: 15,
    color: '#14437b',
    fontWeight: 'bold',
    textAlign: 'center',
    minWidth: 90,
  },
  blockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
});

export default ConfigsScreen;
