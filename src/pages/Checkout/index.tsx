import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {colors, numberWithCommas} from '../../utils';
import {CardAddress, Gap, Select} from '../../components';
import {dummyOrders, dummyProfile} from '../../data';

const Checkout = () => {
  const [profile] = useState(dummyProfile);
  const [orders] = useState(dummyOrders[0]);
  const [expedition] = useState([]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        {/* Address */}
        <Text style={[styles.text, styles.textBold]}>
          Apakah benar alamat ini?
        </Text>
        <CardAddress profile={profile} />

        <Gap height={30} />

        {/* Total Price */}
        <View style={styles.flexRow}>
          <Text style={[styles.text, styles.textBold]}>Total Harga:</Text>
          <Text style={[styles.text, styles.textBold]}>
            Rp. {numberWithCommas(orders.totalPrice)}
          </Text>
        </View>

        <Gap height={30} />

        {/* Select Ekspedisi */}
        <Select label="Pilih Ekspedisi" datas={expedition} />

        <Gap height={30} />

        {/* Biaya Ongkos Kirim */}
        <View style={styles.gap}>
          <Text style={[styles.text, styles.textBold]}>Biaya Ongkir:</Text>
          <View style={styles.flexRow}>
            <Text style={styles.text}>Untuk Berat: {orders.weight} kg</Text>
            <Text style={[styles.text, styles.textBold]}>
              Rp. {numberWithCommas(15000)}
            </Text>
          </View>
          <View style={styles.flexRow}>
            <Text style={styles.text}>Estimasi Waktu:</Text>
            <Text style={[styles.text, styles.textBold]}>2-3 Hari</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    padding: 30,
  },
  text: {
    fontSize: 18,
    fontFamily: 'PublicSans-Regular',
    color: colors.black,
  },
  textBold: {
    fontFamily: 'PublicSans-Bold',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gap: {
    gap: 15,
  },
});
