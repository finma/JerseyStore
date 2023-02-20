import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {colors, responsiveWidth} from '../../utils';
import {Button, Input, Select} from '../../components';
import {dummyProfile} from '../../data';

const EditProfile = () => {
  const [profile] = useState(dummyProfile);
  const [dataCity] = useState([]);
  const [dataProvince] = useState([]);

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Input label="Nama:" value={profile.name} />
          <Input label="Email:" value={profile.email} />
          <Input label="No. Handphone:" value={profile.noHp} />
          <Input label="Alamat:" value={profile.address} textarea />
          <Select label="Kota/Kab:" datas={dataCity} />
          <Select label="Provinsi" datas={dataProvince} />

          <View style={styles.wrapperChangeProfile}>
            <Text style={styles.label}>Foto Profile:</Text>
            <View style={styles.changeProfile}>
              <Image source={profile.avatar} style={styles.avatar} />
              <View style={styles.wrapperButton}>
                <Button title="Ganti Foto" type="text" />
              </View>
            </View>
          </View>

          <Button title="Submit" type="icon-text" icon="submit" />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
  },
  container: {
    marginTop: 10,
    marginBottom: 30,
  },
  wrapperChangeProfile: {
    marginTop: 10,
  },
  changeProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    paddingVertical: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: 'PublicSans-Regular',
    color: colors.black,
  },
  avatar: {
    width: responsiveWidth(150),
    height: responsiveWidth(150),
    borderRadius: 40,
  },
  wrapperButton: {
    flex: 1,
  },
});
