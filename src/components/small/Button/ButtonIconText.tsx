import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {
  IconArrowLeft,
  IconShoppingCart,
  IconShoppingCartWhite,
} from '../../../assets';
import {colors} from '../../../utils';

const ButtonIconText = ({title, onPress, icon}: any) => {
  const Icon = () => {
    if (icon === 'shopping-cart') {
      return <IconShoppingCart />;
    } else if (icon === 'arrow-left') {
      return <IconArrowLeft />;
    } else if (icon === 'shopping-cart-white') {
      return <IconShoppingCartWhite />;
    }
    return <IconShoppingCart />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIconText;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    color: colors.white,
    fontFamily: 'PublicSans-Bold',
    fontSize: 18,
  },
});
