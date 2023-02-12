import {StyleSheet} from 'react-native';
import React from 'react';
import {Input} from '@rneui/themed';
import {colors, fontStyle, mergeObj} from '../../../utils';
import {View} from 'react-native';
import {Text} from '../../atoms';

export default function InputDefault(props) {
  const inputContainerStyle = mergeObj(styles.inputContainer);
  const inputStyle = mergeObj(styles.inputStyle, props?.inputStyle);

  return (
    <>
      {props?.label && <Label {...props} />}
      <Input
        {...props}
        label={null}
        inputContainerStyle={inputContainerStyle}
        inputStyle={inputStyle}
      />
    </>
  );
}

const Label = (props) => {
  return (
    <Text type="bold">
      {props?.label} {props?.required && <Text color={colors.danger}>*</Text>}
    </Text>
  );
};

const styles = StyleSheet.create({
  inputContainer: {},
  inputStyle: {...fontStyle.normal()},
});
