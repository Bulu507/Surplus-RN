import {StyleSheet} from 'react-native';
import React from 'react';
import {Button, Gap, Icon, Text} from '../../atoms';
import {Dialog} from '@rneui/base';
import {colors, useGeoLocation} from '../../../utils';
import AndroidOpenSettings from 'react-native-android-open-settings';
import {ICON} from '../../../parameters';
import {View} from 'react-native';

export default function Location(props) {
  const {hasAccessLocation, checkPermissionLocation} = useGeoLocation();

  const toSettings = () => {
    AndroidOpenSettings.appDetailsSettings();
  };

  const checkingPermission = () => {
    checkPermissionLocation();
  };

  return (
    <Dialog isVisible={!hasAccessLocation} overlayStyle={styles.container}>
      <Icon
        name="alert-circle-outline"
        type={ICON.MDC}
        color={colors.danger}
        size={50}
      />
      <Gap height={10} />
      <Text align="center" size={14}>
        Harap setujui izin "lokasi" untuk dapat terus menggunakan aplikasi
        Petani Full Power
      </Text>
      <Gap height={20} />
      <Text align="center" color={colors.text.danger}>
        * lokasi diperlukan aplikasi untuk menampilkan promo yang sesuai dengan
        wilayah anda.
      </Text>
      <Gap height={30} />
      <View style={styles.row}>
        <Button
          type="clear"
          title={'Cek Ulang Perizinan'}
          onPress={() => checkingPermission()}
        />
        <Gap width={20} />
        <Button
          type="clear"
          title={'Atur Perizinan'}
          onPress={() => toSettings()}
        />
      </View>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 16,
    alignItems: 'center',
  },
  row: {flexDirection: 'row'},
});
