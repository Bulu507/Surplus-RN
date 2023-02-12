import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Text} from '../../../atoms';

export default function Action(props) {
  const labelInfo = props?.isPrize ? 'Kode Voucher' : 'Poin yang Ditukar';

  return (
    <View style={styles.container}>
      <Text align="center">{labelInfo}</Text>
      <Text type="bold" align="center" size={14}>
        {props?.info}
      </Text>
      <Gap height={10} />
      <Button
        loading={props?.loading}
        title="Ambil Hadiah Sekarang!"
        disabled={props?.disabledSubmit}
        onPress={props?.onSubmitPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {paddingHorizontal: 15, paddingVertical: 20},
});
