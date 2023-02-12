import React from 'react';
import {isEmptyData} from '../../../utils';
import Custom from './Custom';
import BtnDefault from './BtnDefault';

export default function Button(props) {
  if (!isEmptyData(props?.type)) {
    return <Custom {...props} />;
  }
  return <BtnDefault {...props} />;
}
