import {StyleSheet, View} from 'react-native';
import React from 'react';

import {CardCart} from '../../small';
import {colors} from '../../../utils';

const ListCart = ({orders}: any) => {
  return (
    <View style={styles.container}>
      {orders.map((order: any) => (
        <CardCart order={order} key={order.id} />
      ))}
    </View>
  );
};

export default ListCart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    marginTop: 20,
  },
});
