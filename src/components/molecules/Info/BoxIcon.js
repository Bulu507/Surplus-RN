import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, mergeObj, setDefaultData} from '../../../utils';
import {Icon} from '../../atoms';
import Data from './Data';

export default function BoxIcon(props) {
  const containerStyle = mergeObj(styles.container, props?.containerStyle);
  const iconColor = setDefaultData(props?.icon?.color, colors.text.default);
  const iconSize = setDefaultData(props?.icon?.size, 16);
  const dataBoxStyle = mergeObj(styles.dataBoxStyle, props?.dataBoxStyle);
  const iconDefaultProps = {color: iconColor, size: iconSize};
  const iconProps = mergeObj(iconDefaultProps, props?.icon);

  return (
    <View style={containerStyle}>
      <Icon {...iconProps} />
      <Data {...props} containerStyle={dataBoxStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  dataBoxStyle: {flex: 1},
});
