import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  colors,
  getPasswordError,
  globalStyle,
  isEmptyData,
  showError,
  showSuccess,
  useForm,
} from '../../../utils';
import {ImageBackground} from 'react-native';
import {ILBanner} from '../../../assets';
import {Button, Gap, HandleDeviceBack, Icon, Input} from '../../../components';
import {useState} from 'react';
import {validate} from './validate';
import {getLocalData, StoreUser} from '../../../services';
import {ICON} from '../../../parameters';

const dataForm = {
  name: '',
  email: '',
  password: '',
};

export default function RegisterPage({navigation}) {
  const [form, setForm] = useForm(dataForm);
  const [repassword, setRepassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const onEndPasswordEdit = () => {
    const error = getPasswordError(repassword, form?.password);
    setErrorPassword(error);
    if (!isEmptyData(error)) {
      setForm('password', '');
    }
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await StoreUser(form);
      showSuccess(response?.message);
      navigation.goBack();
    } catch (error) {
      console.log('cek error');
      showError(error.message);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <HandleDeviceBack type="back" />
      <ImageBackground source={ILBanner} style={styles.banner}>
        <Icon
          type={ICON.MDC}
          name={'information-outline'}
          color={colors.dark}
          onPress={() => {}}
        />
      </ImageBackground>
      <View style={styles.content}>
        <View>
          <Input
            leftIcon={{type: 'material-community', name: 'account-outline'}}
            placeholder="Nama"
            value={form?.name}
            onChangeText={(value) => setForm('name', value)}
          />
          <Input
            leftIcon={{type: 'material-community', name: 'email-outline'}}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form?.phone}
            onChangeText={(value) => setForm('email', value)}
          />
          <Input
            type="password"
            leftIcon={{type: 'material-community', name: 'lock-outline'}}
            placeholder="Password"
            autoCapitalize="none"
            value={repassword}
            onChangeText={(value) => setRepassword(value)}
            errorMessage={errorPassword}
          />
          <Input
            type="password"
            leftIcon={{type: 'material-community', name: 'lock-outline'}}
            placeholder="Ulangi Password"
            autoCapitalize="none"
            value={form?.password}
            onChangeText={(value) => setForm('password', value)}
            onEndEditing={() => onEndPasswordEdit()}
            errorMessage={errorPassword}
          />
        </View>
        <Gap height={30} />
        <Button
          loading={loading}
          // disabled={!validate(form, repassword)}
          title="Register"
          containerStyle={styles.btn}
          onPress={() => handleRegister()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {...globalStyle.page, backgroundColor: colors.grey6},
  banner: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'flex-end',
  },
  content: {
    flex: 3,
    backgroundColor: colors?.white,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 20,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
});
