import {StyleSheet, View} from 'react-native';
import React from 'react';

import {colors} from '../../utils';
import {Button, Input} from '../../components';

const ChangePassword = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View>
          <Input label="Password Lama" secureTextEntry />
          <Input label="Password Baru" secureTextEntry />
          <Input label="Konfirmasi Password Baru" secureTextEntry />
        </View>

        <Button title="Submit" type="icon-text" icon="submit" />
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
  },
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
    justifyContent: 'space-between',
  },
});
