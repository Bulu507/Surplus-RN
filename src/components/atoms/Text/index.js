import React from 'react';
import {Bold} from './Custom';
import TextDefault from './TextDefault';

export default function Text(props) {
  switch (props?.type) {
    case 'bold':
      return <Bold {...props} />;
    default:
      return <TextDefault {...props} />;
  }
}
