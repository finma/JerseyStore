import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {DefaultAvatar} from '../../assets';
import {Gap, ListMenu} from '../../components';
import {menus} from '../../data';
import {colors, getData, responsiveHeight, responsiveWidth} from '../../utils';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    noHp: '',
    address: '',
    avatar: '',
  });

  const navigation = useNavigation();

  const getUserData = useCallback(async () => {
    const data = await getData('user');

    if (data) {
      setProfile(data);
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'Login' as never}],
      });
    }
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // console.log('get user');
      getUserData();
    });

    return unsubscribe;
  }, [getUserData, navigation]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Image
          source={
            profile.avatar?.length ? {uri: profile.avatar} : DefaultAvatar
          }
          style={styles.foto}
        />

        <View style={styles.profile}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.desc}>No HP: {profile.noHp}</Text>
          <Text style={styles.desc}>{profile.address}</Text>
        </View>

        <Gap height={20} />
        <ListMenu menus={menus} />
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
