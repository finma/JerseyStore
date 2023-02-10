import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import {IconSearch} from '../../../assets';
import {colors, responsiveHeight} from '../../../utils';
import {Button, Gap} from '../../small';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        {/* Input Search */}
        <View style={styles.searchSection}>
          <IconSearch />
          <TextInput placeholder="Cari Jersey ..." style={styles.input} />
        </View>

        <Gap width={10} />

        {/* Shopping Cart Button */}
        <Button icon="shopping-cart" totalItems={7} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: responsiveHeight(125),
  },
  wrapperHeader: {
    marginTop: 15,
    marginHorizontal: 30,
    flexDirection: 'row',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingLeft: 10,
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    fontFamily: 'PublicSans-Regular',
  },
});
