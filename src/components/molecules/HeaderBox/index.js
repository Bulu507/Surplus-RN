import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {ICFullPowerLogo} from '../../../assets';
import {Line} from '../../atoms';
import {colors} from '../../../utils';

export default function HeaderBox(props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={ICFullPowerLogo} style={styles.logo} />
        <View style={styles.space} />
        <View style={styles.childrenBox}>{props?.children}</View>
      </View>
      <Line mb={2} mt={5} bw={3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.border.grey1,
    borderBottomWidth: 1,
  },
  row: {
    paddingTop: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  logo: {width: 64, height: 64},
  space: {width: 10},
  childrenBox: {flex: 1, alignItems: 'flex-end'},
});
