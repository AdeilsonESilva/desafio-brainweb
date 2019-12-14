import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View, Text} from 'react-native';
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
import ButtonDefault from '../components/buttonDefault';
import Panel from '../components/panel';

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
        <Panel title="ade123">
          <Text style={{backgroundColor: 'red'}}>ade</Text>
        </Panel>
        <View style={styles.containerView}>
          <View style={styles.countersOperations}>
            <Text style={styles.blockTitle}>Counters</Text>
            <View style={styles.blockContainer}>
              <ButtonDefault onPress={addCounter} text={'Add\nCounter'} />
              <ButtonDefault onPress={removeCounter} text={'Remove\nCounter'} />
            </View>
          </View>
          <View style={styles.countersOperations}>
            <Text style={styles.blockTitle}>Selected Counter</Text>
            <View style={styles.countersOperations}>
              <View style={styles.blockContainer}>
                <ButtonDefault
                  onPress={increaseCounter}
                  text={'Increase\nCounter\n(++)'}
                />
                <ButtonDefault
                  onPress={decreaseCounter}
                  text={'Decrease\nCounter\n(--)'}
                />
              </View>
              <ButtonDefault
                onPress={resetCounter}
                text={'Reset\nCounter'}
                styleButton={styles.buttonReset}
              />
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
  blockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  buttonReset: {
    marginHorizontal: 10,
  },
});

export default ConfigsScreen;
