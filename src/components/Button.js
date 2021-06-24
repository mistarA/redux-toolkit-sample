import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 20,
    borderWidth: 1,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 5,
    borderColor: 'green',
  },
});

const Button = props => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={{color: 'black'}}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
