import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors, mergeObj} from '../../../../utils';
import InputDefault from '../InputDefault';
import {Icon} from '../../../atoms';

export default function Password(props) {
  const [showText, setShowText] = useState(true);
  const iconShow = showText ? 'eye-outline' : 'eye-off-outline';

  return (
    <InputDefault
      {...props}
      secureTextEntry={showText}
      rightIcon={() => (
        <Icon
          name={iconShow}
          type="material-community"
          containerStyle={styles.iconContainer}
          color={colors.grey3}
          onPress={() => setShowText(!showText)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  iconContainer: {
    right: 10,
  },
});
