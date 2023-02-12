import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, globalStyle} from '../../../utils';
import {Image} from 'react-native';
import {ICCertified, ICLogo} from '../../../assets';
import {Gap, Text} from '../../../components';
import {useEffect} from 'react';
import {AUTH_PAGE} from '../../../parameters';

export default function SplashPage({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(AUTH_PAGE);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Gap />
      <View>
        <Image source={ICLogo} style={styles.logo} />
        <Text size={18} color={colors?.secondary} align="center">
          {'Save Foods. Save Budget.\nSave Planet.'}
        </Text>
      </View>
      <Image source={ICCertified} style={styles.certified} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyle.page,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  logo: {width: 200, height: 150},
  certified: {width: 150, height: 80},
});
