import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {
  BannerSlider,
  Button,
  Gap,
  Header,
  ListJerseys,
  ListLiga,
} from '../../components';
import {dummyJerseys, dummyLigas} from '../../data';

const Home = (props: any) => {
  const [ligas] = useState(dummyLigas);
  const [jerseys] = useState(dummyJerseys);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <BannerSlider />

        <View style={styles.chooseLiga}>
          <Text style={styles.label}>Pilih Liga</Text>
          <ListLiga ligas={ligas} />
        </View>

        <View style={styles.chooseJersey}>
          <Text style={styles.label}>
            Pilih <Text style={styles.boldLabel}>Jersey</Text> Yang Anda
            Inginkan
          </Text>
          <ListJerseys jerseys={jerseys} navigation={props.navigation} />
          <Button title="Lihat Semua" type="text" />
        </View>

        <Gap height={100} />
      </ScrollView>
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
  chooseJersey: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: 'PublicSans-Regular',
  },
  boldLabel: {
    fontSize: 18,
    fontFamily: 'PublicSans-Bold',
  },
});
