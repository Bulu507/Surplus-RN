import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Icon, Text} from '../../../atoms';
import {colors} from '../../../../utils';
import {ICON} from '../../../../parameters';

export default function SuccessInfo(props) {
  return (
    <View style={styles.container}>
      <Icon
        name="check-decagram"
        type={ICON.MDC}
        size={53}
        color={colors.primary}
      />
      <Text type="bold" size={24} color={colors.text.highlight}>
        SELAMAT !
      </Text>
      <Text size={18} color={colors.text.highlight} align="center">
        {props?.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
});
