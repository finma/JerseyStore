import {StyleSheet, View} from 'react-native';
import React from 'react';

import {CardLiga} from '../../small';

const ListLiga = ({ligas}: any) => {
  return (
    <View style={styles.container}>
      {ligas.map((liga: any) => (
        <CardLiga key={liga.id} liga={liga} />
      ))}
    </View>
  );
};

export default ListLiga;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
