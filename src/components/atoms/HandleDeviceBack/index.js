import React from 'react';
import Back from './Back';
import Home from './Home';
import Stack from './Stack';

export default function HandleDeviceBack(props) {
  switch (props?.type) {
    case 'home':
      return <Home {...props} />;
    case 'back':
      return <Back {...props} />;
    default:
      return <Stack {...props} />;
  }
}
