import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ImageBackground} from 'react-native';
import {colors, globalStyle} from '../../../utils';
import {Button, Gap, Text} from '../../../components';
import {ILBG1} from '../../../assets';
import {REGISTER_PAGE} from '../../../parameters';

export default function AuthPage({navigation}) {
  return (
    <ImageBackground source={ILBG1} style={styles.container}>
      <View style={styles.top} />
      <View style={styles.actionBox}>
        <Text align="center" type="bold" size={18}>
          Selamat datang di Surplus
        </Text>
        <Gap height={10} />
        <Text align="center">
          Selamatkan makanan berlebih di aplikasi Surplus agar tidak terbuang
          sia-sia
        </Text>
        <Gap height={40} />
        <Button
          title="Daftar"
          onPress={() => navigation.navigate(REGISTER_PAGE)}
        />
        <Gap height={15} />
        <Button type="outline" title="Sudah punya akun? Masuk" />
        <Gap height={40} />
        <Text align="center">
          Dengan daftar atau masuk, Anda menerima{' '}
          <Text color={colors?.yellow1}>syarat dan ketentuan</Text> serta{' '}
          <Text color={colors?.yellow1}>kebijakan privasi.</Text>
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {...globalStyle.page},
  top: {flex: 2},
  actionBox: {
    flex: 2,
    backgroundColor: colors.white,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 20,
  },
});
