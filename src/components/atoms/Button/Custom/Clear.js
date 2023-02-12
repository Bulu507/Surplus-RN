import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button as ButtonRNE} from '@rneui/themed';
import {colors, fontStyle, mergeObj} from '../../../../utils';

export default function Clear(props) {
  const buttonStyle = mergeObj(styles.buttonStyle, props?.buttonStyle);
  const titleStyle = mergeObj(styles.titleStyle, props?.titleStyle);

  return (
    <ButtonRNE {...props} buttonStyle={buttonStyle} titleStyle={titleStyle} />
  );
}

const styles = StyleSheet.create({
  titleStyle: {...fontStyle.normal(), color: colors?.primary},
});
