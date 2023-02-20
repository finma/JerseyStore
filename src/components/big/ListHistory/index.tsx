import {View} from 'react-native';
import React from 'react';

import {CardHistory} from '../../small';

const ListHistory = ({orders}: {orders: OrderType[]}) => {
  return (
    <View>
      {orders.map(order => (
        <CardHistory key={order.id} order={order} />
      ))}
    </View>
  );
};

export default ListHistory;
