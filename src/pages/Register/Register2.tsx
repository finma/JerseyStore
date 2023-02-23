import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {IllustrationRegister2} from '../../assets';
import {Button, Gap, Input, Select} from '../../components';
import {colors, responsiveHeight, responsiveWidth} from '../../utils';

const Register2 = () => {
  const [dataCity] = useState([]);
  const [dataProvince] = useState([]);

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.page}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.btnBack}>
            <Button
              type="icon-only"
              icon="arrow-left"
              onPress={() => navigation.goBack()}
            />
          </View>

          {/* Illustration */}
          <View style={styles.illustration}>
            <IllustrationRegister2 />
            <Gap height={responsiveHeight(12)} />
            <Text style={styles.title}>Isi Alamat</Text>
            <Text style={styles.title}>Lengkap Anda</Text>
          </View>

          <Gap height={responsiveHeight(12)} />

          {/* Circle */}
          <View style={styles.wrapperCircle}>
            <View style={[styles.circle, styles.circleDisabled]} />
            <Gap width={responsiveHeight(12)} />
            <View style={[styles.circle, styles.circlePrimary]} />
          </View>

          {/* Form Register */}
          <View style={styles.card}>
            <Input label="Alamat:" textarea />
            <Select label="Kota/Kabupaten:" datas={dataCity} />
            <Select label="Provinsi:" datas={dataProvince} />
            <Gap height={responsiveHeight(30)} />
            <Button
              title="Continue"
              type="icon-text"
              icon="submit"
              onPress={() => navigation.navigate('MainApp' as never)}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register2;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  illustration: {
    alignItems: 'center',
    marginTop: responsiveHeight(50),
  },
  title: {
    fontSize: 24,
    fontFamily: 'PublicSans-Light',
    color: colors.primary,
  },
  wrapperCircle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: responsiveWidth(11) / 2,
  },
  circlePrimary: {
    backgroundColor: colors.primary,
  },
  circleDisabled: {
    backgroundColor: colors.border,
  },
  card: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 30,
    paddingTop: 10,
    borderRadius: 10,
    marginVertical: 32,
  },
  btnBack: {
    marginTop: 10,
    marginLeft: 10,
    position: 'absolute',
  },
});
