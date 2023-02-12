import {BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import {isEmptyData} from '../../../utils';
import {useNavigation} from '@react-navigation/native';
import {isUndefined} from 'lodash';

export default function Back(props) {
  const navigation = useNavigation();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  });

  const backAction = () => {
    if (isUndefined(props?.action)) {
      navigation.goBack();
    } else {
      props.action();
    }
    return true;
  };
  return <></>;
}
