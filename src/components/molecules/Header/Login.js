import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderBox from '../HeaderBox';
import {Button, Gap} from '../../atoms';
import {colors} from '../../../utils';

export default function Login(props) {
  return (
    <HeaderBox>
      <Text>Masuk untuk dapatkan promo!</Text>
      <Gap height={2} />
      <Button title="Masuk" buttonStyle={styles.btn} onPress={props?.onPress} />
    </HeaderBox>
  );
}

const styles = StyleSheet.create({
  btn: {paddingHorizontal: 20, backgroundColor: colors.black},
});
