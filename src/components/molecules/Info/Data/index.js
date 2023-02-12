import React from 'react';
import Row from './Row';
import Column from './Column';

export default function Data(props) {
  switch (props?.type) {
    case 'row':
      return <Row {...props} />;
    case 'column':
      return <Column {...props} />;

    default:
      return <Row {...props} />;
  }
}
