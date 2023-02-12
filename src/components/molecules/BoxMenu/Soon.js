import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Icon, Text, TouchBox} from '../../atoms';
import {colors} from '../../../utils';
import {ICON} from '../../../parameters';

export default function Soon(props) {
  const {title} = props?.data;

  return (
    <TouchBox style={styles.container} onPress={props?.onPress}>
      <View style={styles.row}>
        <Icon name="lock-outline" type={ICON.MDC} color={colors.white} />
        <View>
          <Text type="bold" size={9} color={colors?.text?.white}>
            {'Segera\nHadir'}
          </Text>
        </View>
      </View>
      <Text type="bold" color={colors.text.white}>
        {title}
      </Text>
    </TouchBox>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    marginBottom: 20,
    position: 'relative',
    marginLeft: 10,
    backgroundColor: colors.grey1,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  row: {flexDirection: 'row', justifyContent: 'center'},
});
