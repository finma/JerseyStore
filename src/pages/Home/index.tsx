import React from 'react';
import {StyleSheet, View} from 'react-native';

import {BannerSlider, Header} from '../../components';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <BannerSlider />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1},
});
