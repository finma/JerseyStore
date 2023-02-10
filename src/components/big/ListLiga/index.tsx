import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {dummyLigas} from '../../../data';
import {CardLiga} from '../../small';

const ListLiga = () => {
  const [ligas] = useState(dummyLigas);

  return (
    <View style={styles.container}>
      {ligas.map(liga => (
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
