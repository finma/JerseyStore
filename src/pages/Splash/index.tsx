import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Splash = (props: any) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Home');
    }, 2000);
  }, [props.navigation]);

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
