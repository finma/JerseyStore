import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {Gap, Header, ListJerseys, ListLiga} from '../../components';
import {dummyJerseys, dummyLigas} from '../../data';

const ListJersey = () => {
  const [ligas] = useState(dummyLigas);
  const [jerseys] = useState(dummyJerseys);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <View style={styles.chooseLiga}>
          <ListLiga ligas={ligas} />
        </View>

        <View style={styles.chooseJersey}>
          <Text style={styles.label}>
            Pilih <Text style={styles.boldLabel}>Jersey</Text> Yang Anda
            Inginkan
          </Text>
          <ListJerseys jerseys={jerseys} />
        </View>

        <Gap height={80} />
      </ScrollView>
    </View>
  );
};

export default ListJersey;

const styles = StyleSheet.create({
  container: {flex: 1},
  scrollContainer: {
    marginTop: -30,
  },
  chooseLiga: {
    marginHorizontal: 30,
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
