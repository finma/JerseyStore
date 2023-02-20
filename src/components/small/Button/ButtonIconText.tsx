import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {
  IconArrowLeft,
  IconShoppingCart,
  IconShoppingCartWhite,
  IconSubmit,
} from '../../../assets';
import {colors} from '../../../utils';

const icons: any = {
  'shopping-cart': IconShoppingCart,
  'arrow-left': IconArrowLeft,
  'shopping-cart-white': IconShoppingCartWhite,
  submit: IconSubmit,
};

const ButtonIconText = ({title, onPress, icon}: any) => {
  const Icon = () => {
    const IconComponent = icons[icon] || IconShoppingCart;
    return <IconComponent />;
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
