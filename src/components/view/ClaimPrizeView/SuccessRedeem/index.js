import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Icon, Text} from '../../../atoms';
import {ICON} from '../../../../parameters';
import {colors} from '../../../../utils';
import {useSelector} from 'react-redux';

const dummyImage = {
  uri: 'https://cdn.idntimes.com/content-images/post/20220604/285148927-1021992598689444-1534067933924556581-n-702cd9a9e01ed1c15642728c28e4d343.jpg',
};

export default function SuccessRedeem(props) {
  const labelInfo = props?.isPrize ? 'Dari Kode Voucher' : 'Dengan menukar';

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
        {'Anda Berhasil Ambil Hadiah'}
      </Text>
      <Image source={props?.image} style={styles.image} />
      <Text type="bold" size={20} align="center">
        {props?.name}
      </Text>
      <Gap height={20} />
      <Text size={14}>{labelInfo}</Text>
      <Text size={14} type="bold">
        {props?.dataInfo}
      </Text>
      <Gap height={20} />
      <Text align="center">
        {
          'Untuk Konfirmasi lebih lanjut hubungi kami melalui tombol WA atau Telepon dibawah'
        }
      </Text>
      <Gap height={20} />
      {props?.onActionPress && (
        <Button
          icon={{
            name: 'keyboard-backspace',
            type: ICON.MDC,
            color: colors.primary,
            size: 18,
          }}
          type="outline"
          title="Kembali ke List Promo"
          onPress={props?.onActionPress}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 156,
    height: 156,
    marginVertical: 20,
    borderRadius: 16,
    backgroundColor: colors.grey1,
  },
});
