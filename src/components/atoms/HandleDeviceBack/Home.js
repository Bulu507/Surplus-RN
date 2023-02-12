import {BackHandler} from 'react-native';
import React, {useEffect, useState} from 'react';
import {showSnack} from '../../../utils';

export default function Home(props) {
  const [exitApp, setExitApp] = useState(0);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backHome,
    );
    return () => backHandler.remove();
  });

  const backHome = () => {
    setTimeout(() => {
      setExitApp(0);
    }, 2000); // 2 seconds to tap second-time

    if (exitApp > 0) {
      BackHandler.exitApp();
    } else {
      setExitApp(exitApp + 1);

      showSnack('Tekan Sekali Lagi Untuk Keluar!');
    }
    return true;
  };

  return <></>;
}
