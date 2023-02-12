import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Loading from '../Loading';

export default function LoadBox(props) {
  if (props?.loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return <>{props?.children}</>;
}

const styles = StyleSheet.create({});
