import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});