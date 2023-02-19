import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  colors,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import {IconDelete} from '../../../assets';

const CardCart = ({order}: any) => {
  return (
    <View style={styles.container}>
      {/* Image Product */}
      <Image source={order.product.image[0]} style={styles.image} />

      {/* Order Description */}
      <View>
        <Text style={styles.name}>{order.product.name}</Text>
        <Text style={styles.text}>
          Harga: Rp. {numberWithCommas(order.product.price)}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.textBold}>Pesan:</Text> {order.totalOrder}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.textBold}>Ukuran:</Text> {order.size}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.textBold}>Total Harga:</Text> {order.totalPrice}
        </Text>
        <Text style={[styles.text, styles.textBold]}>Keterangan:</Text>
        <Text style={styles.text}>{order.information}</Text>
      </View>

      {/* Delete Button */}
      <View style={styles.delete}>
        <IconDelete />
      </View>
    </View>
  );
};

export default CardCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image: {
    width: responsiveWidth(88),
    height: responsiveHeight(88),
    resizeMode: 'contain',
  },
  delete: {
    flex: 1,
    alignItems: 'flex-end',
  },
  name: {
    fontFamily: 'PublicSans-Bold',
    fontSize: 13,
    color: colors.black,
  },
  text: {
    fontFamily: 'PublicSans-Regular',
    fontSize: 11,
    color: colors.black,
  },
  textBold: {
    fontFamily: 'PublicSans-Bold',
  },
});
