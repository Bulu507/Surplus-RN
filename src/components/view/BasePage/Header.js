import React from 'react';
import {useSelector} from 'react-redux';
import {Header as HeaderComponent} from '../../../components';

export default function Header(props) {
  const {loginActive} = useSelector((x) => x.globalReducer);

  if (loginActive) {
    return <HeaderComponent onPress={props?.onProfilePress} />;
  }

  return <HeaderComponent type="login" onPress={props?.onLoginPress} />;
}
