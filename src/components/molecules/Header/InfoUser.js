import {StyleSheet} from 'react-native';
import React from 'react';
import {Text, TouchBox} from '../../atoms';
import HeaderBox from '../HeaderBox';
import {useSelector} from 'react-redux';
import {colors} from '../../../utils';

export default function InfoUser(props) {
  const {dataUser} = useSelector((x) => x.userReducer);
  const firstName = dataUser?.firstName;
  const poin = dataUser?.poin;

  return (
    <HeaderBox>
      <TouchBox style={styles.container} {...props}>
        <Text>
          Hi, <Text type="bold">{firstName}</Text>
        </Text>
        <Text type="bold" color={colors.text.highlight} size={14}>
          {poin} <Text>Poin</Text>
        </Text>
      </TouchBox>
    </HeaderBox>
  );
}

const styles = StyleSheet.create({
  container: {alignItems: 'flex-end'},
});
