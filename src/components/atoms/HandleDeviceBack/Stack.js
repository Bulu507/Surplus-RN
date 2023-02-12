import {BackHandler} from 'react-native';
import React, {useEffect} from 'react';

export default function Stack(props) {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  });
  return <></>;
}
