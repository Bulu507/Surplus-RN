import {StyleSheet} from 'react-native';
import {colors} from '../colors';
import {setDefaultData} from '../data';
import {fonts} from '../fonts';

export const globalStyle = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
});

export const fontStyle = StyleSheet.create({
  bold: (size, color) => ({
    fontFamily: fonts.primary.bold,
    fontSize: setDefaultData(size, 12),
    color: setDefaultData(color, colors.text.default),
    flexShrink: 1,
  }),
  normal: (size, color) => ({
    fontFamily: fonts.primary.default,
    fontSize: setDefaultData(size, 12),
    color: setDefaultData(color, colors.text.default),
    flexShrink: 1,
  }),
  danger: (size, color) => ({
    fontFamily: fonts.primary.default,
    fontSize: setDefaultData(size, 12),
    color: setDefaultData(color, colors.text.danger),
    flexShrink: 1,
  }),
  tertiary: (size, color) => ({
    fontFamily: fonts.primary.default,
    fontSize: setDefaultData(size, 12),
    color: setDefaultData(color, colors.text.tertiary),
    flexShrink: 1,
  }),
});
