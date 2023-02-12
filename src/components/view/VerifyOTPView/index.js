import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Text} from '../../atoms';
import {InputOTP} from '../../form';
import {ICLogo2} from '../../../assets';
import {checkFillCode} from './validate';

export default function VerifyOTPView(props) {
  const {form, loading} = props;
  const isCodeFilled = checkFillCode(form?.otp);
  const phone = props?.phone;

  return (
    <View style={styles.container}>
      <Gap />
      <View style={styles.body}>
        <Image source={ICLogo2} style={styles.logo} />
        <Gap height={30} />
        <Text>Anda telah dikirimkan OTP ke No. Telepon</Text>
        <Gap height={10} />
        <Text type="bold" size={18}>
          {phone}
        </Text>
        <Gap height={20} />
        <Text>Silahkan cek Whatsapp Anda!</Text>
        <InputOTP onCodeChanged={props?.onCodeChanged} />
        <Button
          loading={loading}
          disabled={!isCodeFilled}
          title="Lanjutkan"
          containerStyle={styles.btn}
          onPress={props?.onSubmitPress}
        />
        {/* <Gap height={10} />
          <Button
            type="clear"
            title="Kirim Ulang OTP"
            containerStyle={styles.btn}
          /> */}
      </View>
      <Button
        type="clear"
        title="Kembali ke halaman Login"
        containerStyle={styles.btn}
        onPress={props?.onToLoginPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  body: {alignItems: 'center', paddingBottom: 40},
  logo: {width: 130, height: 177},
  btn: {width: '100%'},
});
