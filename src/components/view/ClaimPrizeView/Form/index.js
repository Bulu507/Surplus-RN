import React from 'react';
import FormNonCash from './FormNonCash';
import FormCash from './FormCash';

export default function Form(props) {
  if (props?.isCash) {
    return <FormCash {...props} />;
  }

  return <FormNonCash {...props} />;
}
