import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Illustration, Logo} from '../../assets';

const Splash = (props: any) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     props.navigation.replace('Home');
  //   }, 2000);
  // }, [props.navigation]);

  return (
    <View style={styles.pages}>
      <Logo />
      <View style={styles.illustration}>
        <Illustration />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  pages: {
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
