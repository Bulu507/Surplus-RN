import {StyleSheet, View} from 'react-native';
import React from 'react';
import ClaimPrizeView from '../../ClaimPrizeView';
import {Button, Gap, Text} from '../../../atoms';
import {ICON} from '../../../../parameters';
import {colors} from '../../../../utils';

export default function FailedClaim(props) {
  return (
    <View style={styles.container}>
      <ClaimPrizeView.FailedRedeem notes="Poin Anda Belum Cukup" />
      <Gap height={40} />
      <Text align="center">
        Gunakan Produk Javamas Agrophos, kumpulkan poin sebanyak - banyaknya dan
        tukarkan hadiahnya!
      </Text>
      <Gap height={30} />
      <Button
        type="outline"
        title="Kembali ke List Promo"
        icon={{
          name: 'keyboard-backspace',
          type: ICON.MDC,
          color: colors.primary,
        }}
        onPress={props?.onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
