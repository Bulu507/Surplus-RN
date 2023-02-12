import {Text, View} from 'react-native';
import React from 'react';
import Password from './Password';

export default function Custom(props) {
  switch (props?.type) {
    case 'password':
      return <Password {...props} />;
    default:
      return (
        <View>
          <Text>CustomInput</Text>
        </View>
      );
  }
}
