import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Divider as RNEDivider} from '@rneui/themed';
import {mergeObj} from '../../../utils';

export default function Divider(props) {
  const {mv} = props;
  const style = mergeObj(styles.style(mv), props?.style);
  return <RNEDivider {...props} style={style} />;
}

const styles = StyleSheet.create({
  style: (mv) => ({marginVertical: mv ? mv : 0}),
});
