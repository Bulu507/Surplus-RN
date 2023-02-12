import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Icon, Text} from '../../../atoms';
import {colors, setDefaultPropsData} from '../../../../utils';

export default function FailedRedeem(props) {
  const notes = setDefaultPropsData(props?.notes, '');

  return (
    <View style={styles.container}>
      <Icon
        name="close-octagon"
        type="material-community"
        color={colors.danger}
        size={80}
      />
      <Text size={24} type="bold" color={colors.danger}>
        Mohon Maaf!
      </Text>
      <Text size={18} color={colors.danger}>
        {notes}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
});
