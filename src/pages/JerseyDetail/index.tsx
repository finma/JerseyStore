import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  Button,
  CardLiga,
  Gap,
  Input,
  JerseySlider,
  Select,
} from '../../components';
import {
  colors,
  responsiveHeight,
  heightMobileUI,
  numberWithCommas,
  responsiveWidth,
} from '../../utils';

const JerseyDetail = (props: any) => {
  const [jersey] = useState(props.route.params.jersey);
  const [images] = useState(props.route.params.jersey.image);

  return (
    <View style={styles.page}>
      <View style={styles.button}>
        <Button icon="arrow-left" onPress={() => props.navigation.goBack()} />
      </View>

      <JerseySlider images={images} />

      <View style={styles.container}>
        <View style={styles.liga}>
          <CardLiga liga={jersey.liga} />
        </View>
        <View style={styles.desc}>
          <Text style={styles.name}>{jersey.name}</Text>
          <Text style={styles.price}>
            Harga : Rp. {numberWithCommas(jersey.price)}
          </Text>

          <View style={styles.line} />

          <View style={styles.wrapperTypePrice}>
            <Text style={styles.typeWeight}>Jenis : {jersey.type}</Text>
            <Text style={styles.typeWeight}>Berat : {jersey.weight}</Text>
          </View>

          <View style={styles.wrapperInput}>
            <Input
              label="Jumlah"
              width={responsiveWidth(166)}
              height={responsiveHeight(33)}
              fontSize={13}
            />
            <Select
              label="Pilih Ukuran"
              width={responsiveWidth(166)}
              height={responsiveHeight(33)}
              fontSize={13}
              datas={jersey.size}
            />
          </View>
          <Input textarea label="Keterangan" fontSize={13} />

          <Gap height={15} />

          <Button
            type="icon-text"
            icon="shopping-cart-white"
            title="Masukan Keranjang"
          />
        </View>
      </View>
    </View>
  );
};

export default JerseyDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(493),
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  button: {
    position: 'absolute',
    marginTop: 30,
    marginLeft: 30,
    zIndex: 1,
  },
  desc: {
    marginHorizontal: 30,
  },
  name: {
    fontSize: RFValue(24, heightMobileUI),
    fontFamily: 'PublicSans-Bold',
    textTransform: 'capitalize',
    color: colors.black,
  },
  price: {
    fontSize: RFValue(24, heightMobileUI),
    fontFamily: 'PublicSans-Light',
    color: colors.black,
  },
  liga: {
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: -30,
  },
  line: {
    borderWidth: 0.5,
    marginVertical: 5,
    color: colors.black,
  },
  wrapperTypePrice: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  typeWeight: {
    fontSize: 13,
    fontFamily: 'PublicSans-Regular',
    marginRight: 30,
    color: colors.black,
  },
  wrapperInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
