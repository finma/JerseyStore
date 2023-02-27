import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {IconArrowLeft, IconShoppingCart} from '../../../assets';
import {colors} from '../../../utils';
import ButtonIconText from './ButtonIconText';
import ButtonLoading from './ButtonLoading';
import ButtonTextOnly from './ButtonTextOnly';

interface ButtonProps {
  icon?: 'shopping-cart' | 'arrow-left' | 'shopping-cart-white' | 'submit';
  totalItems?: number;
  type?: 'icon-only' | 'icon-text' | 'text';
  title?: string;
  onPress?: () => void;
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  const {icon, totalItems, type, onPress, loading} = props;

  const Icon = () => {
    if (icon === 'shopping-cart') {
      return <IconShoppingCart />;
    } else if (icon === 'arrow-left') {
      return <IconArrowLeft />;
    }
    return <IconShoppingCart />;
  };

  if (loading) {
    return <ButtonLoading />;
  }

  if (type === 'text') {
    return <ButtonTextOnly {...props} />;
  } else if (type === 'icon-text') {
    return <ButtonIconText {...props} />;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />

      {totalItems && (
        <View style={styles.notif}>
          <Text style={styles.textNotif}>{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 5,
  },
  notif: {
    backgroundColor: colors.danger,
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 3,
    borderRadius: 3,
  },
  textNotif: {
    fontSize: 8,
    color: colors.white,
  },
});
