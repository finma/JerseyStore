import {View} from 'react-native';
import React from 'react';
import {CardMenu} from '../../small';

const ListMenu = ({menus}: any) => {
  return (
    <View>
      {menus.map((menu: any) => (
        <CardMenu key={menu.id} menu={menu} />
      ))}
    </View>
  );
};

export default ListMenu;
