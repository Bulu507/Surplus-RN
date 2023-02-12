import {StyleSheet, View} from 'react-native';
import React from 'react';
import {isEmptyData, mergeObj, setDefaultPropsData} from '../../../../../utils';
import {Text} from '../../../../atoms';
import {isUndefined} from 'lodash';

export default function Title(props) {
  const containerWidth = setPropsWidth(props?.leftWidth);
  const titleBoxStyle = mergeObj(
    styles.titleBoxStyle,
    containerWidth,
    props?.titleBoxStyle,
  );
  const title = setDefaultPropsData(props?.title, '');
  const titleTextType = setDefaultPropsData(props?.titleTextType, null);

  if (isUndefined(props?.title)) {
    return null;
  }

  return (
    <View style={titleBoxStyle}>
      <Text type={titleTextType}>{title}</Text>
    </View>
  );
}

const setPropsWidth = (width) => {
  const widthObj = isUndefined(width) ? {flex: 2} : {width: width};
  return widthObj;
};

const styles = StyleSheet.create({
  titleBoxStyle: {},
});
