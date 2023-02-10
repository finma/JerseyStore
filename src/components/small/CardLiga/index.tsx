import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';

interface CardLigaProps {
  liga: any;
}

const CardLiga = ({liga}: CardLigaProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={liga.image} style={styles.logo} />
    </TouchableOpacity>
  );
};

export default CardLiga;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 12,
  },
  logo: {
    width: responsiveWidth(57),
    height: responsiveHeight(70),
  },
});
