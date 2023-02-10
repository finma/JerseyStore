import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {IconShoppingCart} from '../../../assets';
import {colors} from '../../../utils';
import ButtonTextOnly from './ButtonTextOnly';

interface ButtonProps {
  icon?: 'shopping-cart' | undefined;
  totalItems?: number;
  type?: 'icon-only' | 'icon-text' | 'text';
  title?: string;
}

const Button = (props: ButtonProps) => {
  const {icon, totalItems, type} = props;

  const Icon = () => {
    if (icon === 'shopping-cart') {
      return <IconShoppingCart />;
    }
    return <IconShoppingCart />;
  };

  if (type === 'text') {
    return <ButtonTextOnly {...props} />;
  }

  return (
    <TouchableOpacity style={styles.container}>
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
