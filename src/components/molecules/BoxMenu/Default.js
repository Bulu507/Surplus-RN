import {StyleSheet, View} from 'react-native';
import React from 'react';
import Box from './Box';
import {colors} from '../../../utils';

export default function Default(props) {
  return (
    <Box {...props}>
      <View style={styles.backdrop} />
    </Box>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: colors.backdrop.black3,
    flex: 1,
    borderRadius: 10,
  },
});
