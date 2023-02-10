import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {BannerSlider, Header, ListLiga} from '../../components';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <BannerSlider />

      <View style={styles.chooseLiga}>
        <Text style={styles.label}>Pilih Liga</Text>
        <ListLiga />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1},
  chooseLiga: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: 'PublicSans-Regular',
  },
});
