import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.count);

  const dispatch = useDispatch();

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={() => {
          console.log('==== counter', 'i was here');
          dispatch(increment());
        }}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity
        onPress={() => {
          console.log('==== counter', 'i was here');
          dispatch(decrement());
        }}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
