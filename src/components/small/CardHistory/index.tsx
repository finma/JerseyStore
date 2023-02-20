import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {
  colors,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import {Gap} from '../..';

const CardHistory = ({order}: {order: OrderType}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.textBold]}>{order.orderDate}</Text>

      <Gap height={16} />

      {order.orders.map((item, index) => (
        <View key={item.id} style={styles.desc}>
          <Text style={[styles.text, styles.textBold]}>{index + 1}</Text>
          <Image source={item.product.image[0]} style={styles.image} />

          <View>
            <View>
              <Text style={[styles.text, styles.textBold]}>
                {item.product.name}
              </Text>
              <Text style={[styles.text, styles.textSmall]}>
                Harga: Rp. {numberWithCommas(item.product.price)}
              </Text>
            </View>

            <Gap height={10} />

            <View>
              <Text style={[styles.text, styles.textSmall]}>
                <Text style={styles.textBold}>Pesan:</Text> {item.totalOrder}
              </Text>
              <Text style={[styles.text, styles.textSmall]}>
                <Text style={styles.textBold}>Total Harga:</Text> Rp.{' '}
                {numberWithCommas(item.totalprice)}
              </Text>
            </View>
          </View>
        </View>
      ))}

      <View style={styles.footer}>
        <View style={styles.label}>
          <Text style={[styles.text, styles.textBold, styles.textBlue]}>
            Status:
          </Text>
          <Text style={[styles.text, styles.textBold, styles.textBlue]}>
            Ongkir (2-3 Hari):
          </Text>
          <Text style={[styles.text, styles.textBold, styles.textBlue]}>
            Total Harga:
          </Text>
        </View>
        <View style={styles.label}>
          <Text style={[styles.text, styles.textBold, styles.textBlue]}>
            Lunas
          </Text>
          <Text style={[styles.text, styles.textBold, styles.textBlue]}>
            Rp. {numberWithCommas(15000)}
          </Text>
          <Text style={[styles.text, styles.textBold, styles.textBlue]}>
            Rp. {numberWithCommas(order.totalPrice)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardHistory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 30,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 14,
    fontFamily: 'PublicSans-Regular',
    color: colors.black,
    textTransform: 'capitalize',
  },
  textBold: {
    fontFamily: 'PublicSans-Bold',
  },
  textSmall: {
    fontSize: 11,
  },
  textBlue: {
    color: colors.primary,
    textTransform: 'uppercase',
    textAlign: 'right',
  },
  image: {
    width: responsiveWidth(88),
    height: responsiveHeight(88),
    resizeMode: 'contain',
  },
  desc: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
  },
  label: {
    flex: 1,
  },
});
