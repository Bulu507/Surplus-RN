import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '../../../atoms';
import {setDefaultPropsData} from '../../../../utils';

export default function ClaimInfo(props) {
  const label = props?.isPrize ? 'Kode Voucher' : 'Poin yang Ditukar';
  const labelInfo = setDefaultPropsData(props?.labelInfo, label);

  return (
    <View style={styles.container}>
      <Text align="center">{labelInfo}</Text>
      <Text type="bold" align="center" size={14}>
        {props?.info}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {paddingHorizontal: 15, paddingVertical: 20, alignItems: 'center'},
});
