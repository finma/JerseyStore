import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import {Illustration, Logo} from '../../assets';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainApp' as never);
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.illustration}>
        <Illustration />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  illustration: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
