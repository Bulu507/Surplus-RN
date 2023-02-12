import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fontStyle} from '../../../utils';
import {Gap, Icon} from '../../atoms';

export default function TabItem(props) {
  return (
    <TouchableOpacity
      style={styles.container(props?.active)}
      onPress={props?.onPress}>
      <Icon
        name={props?.icon}
        type="ionicon"
        color={colors.primary}
        size={18}
      />
      <Gap height={5} />
      <Text style={styles.text}>{props?.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (active) => ({
    flex: 3,
    borderTopColor: colors.primary,
    borderTopWidth: active ? 4 : 0,
    alignItems: 'center',
    padding: 7,
  }),
  text: {...fontStyle.normal(), color: colors.primary},
});
