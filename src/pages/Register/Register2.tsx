import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useMutation} from 'react-query';

import {IllustrationRegister2} from '../../assets';
import {Button, Gap, Input, Select} from '../../components';
import {
  useGetCitiesQuery,
  useGetProvincesQuery,
} from '../../redux/features/RajaongkirSlices';
import {
  colors,
  responsiveHeight,
  responsiveWidth,
  storeData,
  registerUser,
  writeData,
} from '../../utils';

const Register2 = () => {
  const [address, setAddress] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const {data: dataProvince, isSuccess: isSuccessFetchProvince} =
    useGetProvincesQuery(null);
  const {
    data: dataCity,
    isSuccess: isSuccessFetchCity,
    refetch,
  } = useGetCitiesQuery(selectedProvince);
  const {mutate, isLoading} = useMutation(
    async (data: any) => {
      const userCredential = await registerUser(data.email, data.password);

      const newData = {
        ...data,
        uid: userCredential.user.uid,
      };

      // save data to firebase
      writeData(`users/${userCredential.user.uid}`, newData);

      // save data to local storage
      storeData('user', newData);

      return newData;
    },
    {
      onSuccess: () => {
        // console.log('success: ', data);
        navigation.reset({
          index: 0,
          routes: [{name: 'MainApp' as never}],
        });
      },
      onError: error => {
        console.log('error: ', error);
      },
    },
  );

  const onSubmit = () => {
    const data = {
      ...route.params,
      address,
      city: selectedCity,
      province: selectedProvince,
    };

    if (!selectedCity || !selectedProvince) {
      Alert.alert('Error', 'Data tidak boleh kosong');
    } else {
      // console.log('submit: ', data);
      mutate(data);
    }
  };

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
            <Input
              label="Alamat"
              textarea
              onChangeText={value => setAddress(value)}
            />
            <Select
              label="Provinsi"
              datas={
                isSuccessFetchProvince ? dataProvince.rajaongkir.results : []
              }
              selectedValue={selectedProvince}
              onValueChange={itemValue => {
                setSelectedProvince(itemValue);
                setSelectedCity('');
                refetch();
              }}
            />
            <Select
              label="Kota/Kabupaten"
              datas={isSuccessFetchCity ? dataCity.rajaongkir.results : []}
              selectedValue={selectedCity}
              onValueChange={itemValue => setSelectedCity(itemValue)}
            />
            <Gap height={responsiveHeight(30)} />
            <Button
              title="Continue"
              type="icon-text"
              icon="submit"
              loading={isLoading}
              onPress={() => onSubmit()}
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
