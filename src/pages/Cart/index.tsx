import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {Button, ListCart} from '../../components';
import {dummyOrders} from '../../data';
import {colors, numberWithCommas} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const [orders] = useState(dummyOrders[0]);

  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      {/* List Cart */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListCart orders={orders.orders} />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        {/* Total Price */}
        <View style={styles.totalPrice}>
          <Text style={styles.text}>Total Harga:</Text>
          <Text style={styles.text}>
            Rp. {numberWithCommas(orders.totalPrice)}
          </Text>
        </View>

        {/* Button Checkout */}
        <Button
          title="Checkout"
          type="icon-text"
          icon="shopping-cart-white"
          onPress={() => navigation.navigate('Checkout' as never)}
        />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  footer: {
    paddingHorizontal: 30,
    paddingBottom: 30,
    borderTopWidth: 0.3,
    borderTopColor: colors.border,
    backgroundColor: colors.white,
  },
  totalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: 'PublicSans-Bold',
    color: colors.black,
  },
});
