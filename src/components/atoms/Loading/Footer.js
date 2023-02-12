import {ActivityIndicator} from 'react-native';
import React from 'react';

export default function Footer(props) {
  if (props?.isLast) {
    return <></>;
  }

  if (props?.loading) {
    return (
      <>
        <ActivityIndicator size={20} animating />
      </>
    );
  }

  return <></>;
}
