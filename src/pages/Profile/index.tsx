import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {dummyProfile} from '../../data';
import {colors, responsiveHeight, responsiveWidth} from '../../utils';

const Profile = () => {
  const [profile] = useState(dummyProfile);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Image source={profile.avatar} style={styles.foto} />

        <View style={styles.profile}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.desc}>No HP: {profile.noHp}</Text>
          <Text style={styles.desc}>{profile.address}</Text>
          <Text style={styles.desc}>{profile.city}</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(680),
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  foto: {
    width: responsiveWidth(150),
    height: responsiveWidth(150),
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: -responsiveWidth(75),
  },
  profile: {
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    fontFamily: 'PublicSans-Bold',
    fontSize: RFValue(24),
    color: colors.black,
  },
  desc: {
    fontFamily: 'PublicSans-Regular',
    fontSize: RFValue(18),
    color: colors.black,
  },
});
