import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import {ListCart} from '../../components';
import {dummyOrders} from '../../data';

const Cart = () => {
  const [orders] = useState(dummyOrders[0]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
      <View>
        <ListCart orders={orders.orders} />
      </View>
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
