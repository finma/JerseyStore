import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {IconArrowRight} from '../../../assets';
import {colors, responsiveHeight} from '../../../utils';

const CardMenu = ({menu}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {menu.icon}
        <Text style={styles.textMenu}>{menu.title}</Text>
      </View>
      <IconArrowRight />
    </View>
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
