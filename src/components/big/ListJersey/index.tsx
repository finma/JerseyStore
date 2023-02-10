import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CardJersey} from '../../small';

const ListJersey = ({jerseys}: any) => {
  return (
    <View style={styles.container}>
      {jerseys.map((jersey: any) => (
        <CardJersey key={jersey.id} jersey={jersey} />
      ))}
    </View>
  );
};

export default ListJersey;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 10,
  },
});
