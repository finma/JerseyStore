import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';

import {
  IconHome,
  IconHomeActive,
  IconJersey,
  IconJerseyActive,
  IconProfile,
  IconProfileActive,
} from '../../../assets';
import {colors} from '../../../utils';

const TabItem = ({label, isFocused, onPress, onLongPress}: any) => {
  const Icon = () => {
    switch (label) {
      case 'Home':
        return isFocused ? <IconHomeActive /> : <IconHome />;
      case 'Jersey':
        return isFocused ? <IconJerseyActive /> : <IconJersey />;
      case 'Profile':
        return isFocused ? <IconProfileActive /> : <IconProfile />;
      default:
        return <IconHomeActive />;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

interface StyleSheetType {
  container: ViewStyle;
  text: any;
}

const styles = StyleSheet.create<StyleSheetType>({
  container: {
    alignItems: 'center',
  },
  text: (isFocused: boolean) => ({
    color: isFocused ? colors.white : colors.secondary,
    fontSize: 11,
    marginTop: 4,
  }),
});
