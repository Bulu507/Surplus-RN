import React from 'react';
import {isEmptyData} from '../../../utils';
import Custom from './Custom';
import InputDefault from './InputDefault';

export default function Input(props) {
  if (!isEmptyData(props?.type)) {
    return <Custom {...props} />;
  }

  return <InputDefault {...props} />;
}
