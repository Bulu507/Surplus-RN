import {StyleSheet, View} from 'react-native';
import React from 'react';
import Box from './Box';
import {Icon, Text} from '../../atoms';
import {colors} from '../../../utils';
import {ICON} from '../../../parameters';

export default function HasEnded(props) {
  return (
    <Box {...props}>
      <View style={styles.backdrop}>
        <View style={styles.row}>
          <Icon name="calendar-remove" type={ICON.MDC} color={colors.white} />
          <View>
            <Text type="bold" size={9} color={colors?.text?.white}>
              {'Telah\nBerakhir'}
            </Text>
          </View>
        </View>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: colors.backdrop.red1,
    flex: 1,
    borderRadius: 10,
    paddingTop: 10,
  },
  row: {flexDirection: 'row', justifyContent: 'center'},
});
