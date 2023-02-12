import {StyleSheet, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../../../utils';
import {BottomTab} from '../../molecules';
import {useNavigation} from '@react-navigation/native';
import {LOGIN_PAGE, PROFILE_USER_PAGE} from '../../../parameters';
import Header from './Header';

export default function BasePage(props) {
  const navigation = useNavigation();

  const toProfile = () => {
    navigation?.navigate(PROFILE_USER_PAGE);
  };

  const toLogin = () => {
    navigation?.navigate(LOGIN_PAGE);
  };

  return (
    <View style={globalStyle.page}>
      <Header
        onProfilePress={() => toProfile()}
        onLoginPress={() => toLogin()}
      />
      <View style={styles.body}>{props?.children}</View>
      <BottomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {flex: 1},
});
