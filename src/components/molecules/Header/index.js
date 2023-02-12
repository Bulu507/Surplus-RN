import React from 'react';
import InfoUser from './InfoUser';
import Login from './Login';

export default function Header(props) {
  switch (props?.type) {
    case 'login':
      return <Login {...props} />;
    case 'info-user':
      return <InfoUser {...props} />;

    default:
      return <InfoUser {...props} />;
  }
}
