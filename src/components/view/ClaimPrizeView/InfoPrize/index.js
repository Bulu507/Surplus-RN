import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '../../../atoms';
import {colors} from '../../../../utils';

export default function InfoPrize({image, title}) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text type="bold" size={14}>
        {title}
      </Text>
      <Text size={10}>Pajak Hadiah ditanggung penerima*</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', paddingHorizontal: 20},
  image: {
    width: 156,
    height: 156,
    marginVertical: 20,
    borderRadius: 16,
    backgroundColor: colors.grey1,
  },
});
