import {useNavigation} from '@react-navigation/native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {onValue, ref} from 'firebase/database';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {useMutation} from 'react-query';

import {Illustration, Logo} from '../../assets';
import {Button, Input} from '../../components';
import {auth, database} from '../../config/Firebase';
import {colors, responsiveHeight, storeData} from '../../utils';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigation = useNavigation();

  const {mutate} = useMutation(
    async (data: any) => {
      setIsLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      let newData = {};

      onValue(
        ref(database, `users/${userCredential.user.uid}`),
        snapshot => {
          // console.log('snapshot', snapshot.val());
          newData = snapshot.val();
          return snapshot.val();
        },
        {
          onlyOnce: true,
        },
      );

      return newData;
    },
    {
      onSuccess: data => {
        console.log('data', data);
        setIsLoading(false);
        storeData('user', data);
        navigation.reset({
          index: 0,
          routes: [{name: 'MainApp' as never}],
        });
      },
      onError: error => {
        console.log('error', error);
        setIsLoading(false);
      },
    },
  );

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Email dan Password harus diisi');
    } else {
      mutate({email, password});
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.logo}>
        <Logo />
      </View>

      <View style={styles.cardLogin}>
        <Input
          label="Email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Input
          label="Password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
        />
        <View style={styles.button}>
          <Button
            title="Login"
            type="text"
            onPress={handleLogin}
            loading={isLoading}
          />
        </View>
      </View>

      <View style={styles.register}>
        <Text style={styles.textBlue}>Belum Punya Akun ?</Text>
        <Text
          style={styles.textBlue}
          onPress={() => navigation.navigate('Register1' as never)}>
          Klik Untuk Daftar
        </Text>
      </View>

      <View style={styles.illustration}>
        <Illustration />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  illustration: {
    position: 'absolute',
    bottom: 0,
    right: -100,
  },
  logo: {
    alignItems: 'center',
    marginTop: responsiveHeight(117),
  },
  cardLogin: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 30,
    borderRadius: 10,
    marginTop: 32,
  },
  register: {
    alignItems: 'center',
    marginTop: 10,
  },
  textBlue: {
    fontSize: 18,
    fontFamily: 'PublicSans-Bold',
    color: colors.primary,
  },
  button: {
    marginTop: 20,
  },
});
