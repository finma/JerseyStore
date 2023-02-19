import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import Gap from '../Gap';

const CardAddress = ({profile}: any) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.textBold]}>Alamat Saya:</Text>
      <Gap height={6} />
      <Text style={styles.text}>{profile.address}</Text>
      <Text style={styles.text}>Kota/Kab. {profile.city}</Text>
      <Text style={styles.text}>Provinsi {profile.province}</Text>
      <TouchableOpacity>
        <Text style={[styles.text, styles.textBold, styles.link]}>
          Ubah Alamat
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardAddress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    fontFamily: 'PublicSans-Regular',
    fontSize: 14,
    color: colors.black,
  },
  textBold: {
    fontFamily: 'PublicSans-Bold',
  },
  link: {
    color: colors.primary,
    textAlign: 'right',
  },
});
