import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, responsiveWidth} from '../../../utils';
import Button from '../Button';

const CardJersey = ({jersey, navigation}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Image source={jersey.image[0]} style={styles.image} />
        <Text style={styles.text}>{jersey.name}</Text>
      </TouchableOpacity>

      <Button
        type="text"
        title="Detail"
        onPress={() => navigation.navigate('JerseyDetail', {jersey})}
      />
    </View>
  );
};

export default CardJersey;

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  card: {
    backgroundColor: colors.yellow,
    width: responsiveWidth(150),
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    width: 124,
    height: 124,
  },
  text: {
    fontFamily: 'PublicSans-Bold',
    fontSize: 13,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});
