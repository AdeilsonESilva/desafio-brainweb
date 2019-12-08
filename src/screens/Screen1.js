import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  TextInput,
  View,
  Button,
  Text,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector, useDispatch} from 'react-redux';
import {ADD_COUNTER} from '../actions/types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Screen1 = ({navigation}) => {
  const [textValue, setTextValue] = useState('');
  // const counters = useSelector(state => state.data.slice(0, qty));
  const dispatch = useDispatch();

  const addCounter = () => {
    dispatch(addCounterAction({textValue}));
    setTextValue('');
  };

  const onChangeText = text => setTextValue(text);

  const addCounterAction = counter => {
    return {type: ADD_COUNTER, counter};
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home ;D</Text>
            <Button
              title="Ir para About"
              onPress={() => {
                setTextValue('ade');
                addCounter();
                return navigation.navigate('About');
              }}
            />
          </View>
          <View>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={text => onChangeText(text)}
              value={textValue}
            />
            <TouchableOpacity onPress={addCounter}>
              <Text>Ade</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

Screen1.navigationOptions = {
  title: 'Counters',
  tabBarIcon: ({tintColor}) => (
    <FontAwesomeIcon icon={faStar} size={25} color={tintColor} />
  ),
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Screen1;
