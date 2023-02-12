import {View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function TouchBox(props) {
  if (props?.onPress) {
    return (
      <TouchableOpacity {...props} style={props.style}>
        {props.children}
      </TouchableOpacity>
    );
  }

  return <View {...props}>{props.children}</View>;
}
