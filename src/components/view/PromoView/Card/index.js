import React from 'react';
import Prize from './Prize';
import Promo from './Promo';

export default function Card(props) {
  if (props?.isPrize) {
    return <Prize {...props} />;
  }

  return <Promo {...props} />;
}
