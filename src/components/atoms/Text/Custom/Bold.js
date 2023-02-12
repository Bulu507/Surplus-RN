import {StyleSheet} from 'react-native';
import React from 'react';
import TextDefault from '../TextDefault';
import {colors, fontStyle, mergeObj, setDefaultData} from '../../../../utils';

export default function Bold(props) {
  const fontSize = setDefaultData(props?.size, 12);
  const fontColor = setDefaultData(props?.color, colors.text.default);
  const customStyle = mergeObj(
    styles.defaultStyle(fontSize, fontColor),
    props?.style,
  );
  return <TextDefault {...props} style={customStyle} />;
}

const styles = StyleSheet.create({
  defaultStyle: (size, color) => ({...fontStyle.bold(size, color)}),
});
