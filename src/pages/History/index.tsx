import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils';
import {ListHistory} from '../../components';
import {dummyOrders} from '../../data';

const History = () => {
  const [orders] = useState(dummyOrders);

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListHistory orders={orders} />
      </ScrollView>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 20,
  },
});
