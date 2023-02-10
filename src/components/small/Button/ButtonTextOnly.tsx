import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {colors} from '../../../utils';

const Button = (props: any) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 13,
    fontFamily: 'PublicSans-Bold',
    color: colors.white,
    textAlign: 'center',
  },
});
