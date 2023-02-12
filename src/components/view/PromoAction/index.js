import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../atoms';
import {colors, setDefaultPropsData} from '../../../utils';
import {isUndefined} from 'lodash';
import {useSelector} from 'react-redux';
import {ICON} from '../../../parameters';

export default function PromoAction(props) {
  const isDetail = !isUndefined(props?.isDetail);
  const {loginActive} = useSelector((x) => x.globalReducer);
  const labelPromo = isDetail ? 'Tukar Hadiah' : 'Promo / Tukar Hadiah';
  const disabledPromo = setDefaultPropsData(props?.disabledPromo, false);
  const disabledVoucher = setDefaultPropsData(props?.disabledVoucher, false);

  if (!loginActive) {
    return (
      <View style={styles.container}>
        <Button
          icon={{
            name: 'label-percent-outline',
            type: ICON.MDC,
            color: colors.text.white,
            size: 18,
          }}
          disabled={disabledVoucher}
          title={'DAPATKAN HADIAH VOUCHER'}
          containerStyle={styles.btn}
          onPress={props?.onVoucherPress}
        />
      </View>
    );
  }

  if (disabledPromo) {
    return (
      <View style={styles.container}>
        <Button
          title={'Masukkan Kode Voucher'}
          containerStyle={styles.btn}
          onPress={props?.onVoucherPress}
        />
      </View>
    );
  }

  if (disabledVoucher) {
    return (
      <View style={styles.container}>
        <Button
          title={'Masukkan Kode Voucher'}
          containerStyle={styles.btn}
          onPress={props?.onVoucherPress}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button
        title={labelPromo}
        containerStyle={styles.btn}
        buttonStyle={styles.btnPromo}
        titleStyle={styles.titleStyle}
        onPress={props?.onPromoPress}
      />
      <Gap width={10} />
      <Button
        title={'Masukkan Kode Voucher'}
        containerStyle={styles.btn}
        onPress={props?.onVoucherPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
  },
  btn: {flex: 2},
  btnPromo: {backgroundColor: colors.green6},
  titleStyle: {color: colors?.text.black},
});
