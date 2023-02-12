import {StyleSheet} from 'react-native';
import React from 'react';
import {Button as ButtonRNE} from '@rneui/themed';
import {colors, fontStyle, mergeObj} from '../../../utils';

export default function BtnDefault(props) {
  const buttonStyle = mergeObj(styles.buttonStyle, props?.buttonStyle);
  const titleStyle = mergeObj(styles.titleStyle, props?.titleStyle);

  return (
    <ButtonRNE {...props} buttonStyle={buttonStyle} titleStyle={titleStyle} />
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
  titleStyle: {...fontStyle.normal(), color: colors?.white},
});
