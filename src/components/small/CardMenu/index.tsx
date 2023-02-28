import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {IconArrowRight} from '../../../assets';
import {auth, signOut} from '../../../config/Firebase';
import {colors, removeData, responsiveHeight} from '../../../utils';

const CardMenu = ({menu}: {menu: MenuType}) => {
  const navigation = useNavigation();

  const onSubmit = () => {
    if (menu.page === 'Login') {
      signOut(auth)
        .then(() => {
          removeData('user');
          navigation.reset({
            index: 0,
            routes: [{name: 'Login' as never}],
          });
        })
        .catch(error => {
          console.log('error: ', error);
        });
    } else {
      navigation.navigate(menu.page as never);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onSubmit}>
      <View style={styles.menu}>
        {menu.icon}
        <Text style={styles.textMenu}>{menu.title}</Text>
      </View>
      <IconArrowRight />
    </TouchableOpacity>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    padding: responsiveHeight(15),
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textMenu: {
    fontFamily: 'PublicSans-Bold',
    fontSize: 18,
    color: colors.black,
    marginLeft: 10,
  },
});
