import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Outline from './Outline';
import Clear from './Clear';

export default function Custom(props) {
  switch (props?.type) {
    case 'outline':
      return <Outline {...props} />;
    case 'clear':
      return <Clear {...props} />;
    default:
      return (
        <View>
          <Text>Custom</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({});
