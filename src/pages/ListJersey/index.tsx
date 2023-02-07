import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ListJersey = () => {
  return (
    <View style={styles.container}>
      <Text>ListJersey Screen</Text>
    </View>
  );
};

export default ListJersey;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
