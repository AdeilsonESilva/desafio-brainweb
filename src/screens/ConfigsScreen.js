import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {INCREASE_COUNTER} from '../actions/types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header';

const ConfigsScreen = ({navigation}) => {
  // const [textValue, setTextValue] = useState('');
  const dispatch = useDispatch();
  const counters = useSelector(state => state.counters);

  // const addCounter = () => {
  //   dispatch(addCounterAction({textValue}));
  //   setTextValue('');
  // };

  // const onChangeText = text => setTextValue(text);

  // const addCounterAction = counter => {
  //   return {type: ADD_COUNTER, counter};
  // };

  const increaseCounterAction = (item, index) => {
    return {
      type: INCREASE_COUNTER,
      item,
      index,
    };
  };

  const increaseCounter = (item, index) => {
    const newItem = item;
    newItem.number += 1;
    dispatch(increaseCounterAction(newItem, --index));
  };

  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        style={[
          styles.item,
          item.selected ? styles.itemSelected : styles.itemNotSelected,
        ]}
        onPress={() => increaseCounter(item, index)}>
        <Text
          style={[
            styles.itemTitle,
            item.selected
              ? styles.itemTitleSelected
              : styles.itemTitleNotSelected,
          ]}>{`Counter ${++index}`}</Text>
        <Text
          style={[
            styles.itemBody,
            item.selected
              ? styles.itemBodySelected
              : styles.itemBodyNotSelected,
          ]}>
          {item.number.toString().padStart(4, '0')}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Header title="Config" />
        <View style={styles.containerList}>
          {/* <Button
              title="Ir para About"
              onPress={() => {
                setTextValue('ade');
                addCounter();
                return navigation.navigate('About');
              }}
            /> */}
          {/* <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => onChangeText(text)}
            value={textValue}
          />
          <TouchableOpacity onPress={addCounter}>
            <Text>Ade</Text>
          </TouchableOpacity> */}
          <FlatList
            data={counters}
            renderItem={({item, index}) => renderItem(item, index)}
            keyExtractor={(item, index) => index.toString()}
          />
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
  containerList: {
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
});

export default ConfigsScreen;
