import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import {colors} from '../../../utils';

const ButtonLoading = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <ActivityIndicator size="small" color="#FFFFFF" />
      <Text style={styles.text}>Loading ...</Text>
    </TouchableOpacity>
  );
};

export default ButtonLoading;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.border,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    color: colors.white,
    fontFamily: 'PublicSans-Bold',
    fontSize: 18,
  },
});
