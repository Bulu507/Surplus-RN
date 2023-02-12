import {Text, View} from 'react-native';
import React from 'react';
import UnderDevelopment from './UnderDevelopment';

export default function DialogBox(props) {
  switch (props?.type) {
    case 'under-dev':
      return <UnderDevelopment {...props} />;

    default:
      return (
        <View>
          <Text>DialogBox</Text>
        </View>
      );
  }
}
