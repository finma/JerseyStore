import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Illustration, Logo} from '../../assets';
import {Button, Input} from '../../components';
import {colors, responsiveHeight} from '../../utils';

const Login = () => {
  return (
    <View style={styles.page}>
      <View style={styles.logo}>
        <Logo />
      </View>

      <View style={styles.cardLogin}>
        <Input label="Email:" />
        <Input label="Password:" secureTextEntry />
        <View style={styles.button}>
          <Button title="Login" type="text" />
        </View>
      </View>

      <View style={styles.illustration}>
        <Illustration />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  illustration: {
    position: 'absolute',
    bottom: 0,
    right: -100,
  },
  logo: {
    alignItems: 'center',
    marginTop: responsiveHeight(117),
  },
  cardLogin: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 30,
    borderRadius: 10,
    marginTop: 32,
  },
  register: {
    alignItems: 'center',
    marginTop: 10,
  },
  textBlue: {
    fontSize: 18,
    fontFamily: 'PublicSans-Bold',
    color: colors.primary,
  },
  button: {
    marginTop: 20,
  },
});
