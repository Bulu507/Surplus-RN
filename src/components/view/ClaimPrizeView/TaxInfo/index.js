import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Gap, Text} from '../../../atoms';
import {ICON, TAX_INFO} from '../../../../parameters';
import {Info} from '../../../molecules';

export default function TaxInfo() {
  return (
    <View style={styles.container}>
      <Text>*Aturan pajak yang berlaku. Tarif pajak hadiah tidak diundi:</Text>
      <Gap height={10} />
      {TAX_INFO.map((item, idx) => {
        return (
          <Info
            key={idx}
            icon={{name: 'dot-single', type: ICON.ENT}}
            title={item?.title}
            desc={item?.desc}
            noBold
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {paddingTop: 20, padding: 15},
});
