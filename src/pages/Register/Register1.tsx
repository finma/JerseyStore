import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {IllustrationRegister1} from '../../assets';
import {Button, Gap, Input} from '../../components';
import {colors, responsiveHeight, responsiveWidth} from '../../utils';

const Register1 = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.page}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Illustration */}
          <View style={styles.illustration}>
            <IllustrationRegister1 />
            <Gap height={responsiveHeight(12)} />
            <Text style={styles.title}>Daftar</Text>
            <Text style={styles.title}>Isi Data Diri Anda</Text>
          </View>

          <Gap height={responsiveHeight(12)} />

          {/* Circle */}
          <View style={styles.wrapperCircle}>
            <View style={[styles.circle, styles.circlePrimary]} />
            <Gap width={responsiveHeight(12)} />
            <View style={[styles.circle, styles.circleDisabled]} />
          </View>

          {/* Form Register */}
          <View style={styles.card}>
            <Input label="Nama:" />
            <Input label="Email:" />
            <Input label="No. Handphone:" />
            <Input label="Password" secureTextEntry />
            <Gap height={responsiveHeight(30)} />
            <Button title="Continue" type="icon-text" icon="submit" />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register1;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  illustration: {
    alignItems: 'center',
    marginTop: responsiveHeight(50),
  },
  title: {
    fontSize: 24,
    fontFamily: 'PublicSans-Light',
    color: colors.primary,
  },
  wrapperCircle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: responsiveWidth(11) / 2,
  },
  circlePrimary: {
    backgroundColor: colors.primary,
  },
  circleDisabled: {
    backgroundColor: colors.border,
  },
  card: {
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
    paddingTop: 10,
    borderRadius: 10,
    marginVertical: 32,
  },
});
