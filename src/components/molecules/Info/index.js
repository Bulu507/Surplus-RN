import React from 'react';
import {isUndefined} from 'lodash';
import BoxIcon from './BoxIcon';
import Data from './Data';

export default function Info(props) {
  if (!isUndefined(props.icon)) {
    return <BoxIcon {...props} />;
  }

  return <Data {...props} />;
}
