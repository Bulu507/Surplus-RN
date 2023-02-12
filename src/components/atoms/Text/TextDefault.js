import {StyleSheet} from 'react-native';
import {Text as NativText} from 'react-native';
import React from 'react';
import {colors, fontStyle, mergeObj, setDefaultData} from '../../../utils';

export default function TextDefault(props) {
  const fontSize = setDefaultData(props?.size, 12);
  const align = setDefaultData(props?.align, null);
  const fontColor = setDefaultData(props?.color, colors.text.default);
  const customStyle = mergeObj(
    styles.defaultStyle(fontSize, fontColor, align),
    props?.style,
  );
  return <NativText {...props} style={customStyle} />;
}

const styles = StyleSheet.create({
  defaultStyle: (size, color, align) => ({
    ...fontStyle.normal(size, color),
    textAlign: align,
  }),
});
