import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  colors,
  fontStyle,
  isEmptyData,
  mergeObj,
  setDefaultData,
} from '../../../utils';

export default function Header(props) {
  const paddingBox = setDefaultData(props?.paddingBox, 10);
  const radiusTop = setDefaultData(props?.radiusTop, 5);
  const bgColor = setDefaultData(props?.bgColor, colors.card.bgColor);
  const containerStyle = mergeObj(
    styles.container(paddingBox, radiusTop, bgColor),
    props?.containerStyle,
  );

  return (
    <View style={containerStyle}>
      {props.children ? props.children : <Title {...props} />}
    </View>
  );
}

const Title = (props) => {
  const titleStyle = mergeObj(styles.titleStyle, props?.titleStyle);
  if (!isEmptyData(props?.title)) {
    return <Text style={titleStyle}>{props?.title}</Text>;
  }

  return <></>;
};

const styles = StyleSheet.create({
  container: (padding, radiusTop, bgColor) => ({
    padding: padding,
    backgroundColor: bgColor,
    borderTopStartRadius: radiusTop,
    borderTopEndRadius: radiusTop,
  }),
  titleStyle: {...fontStyle.bold(15), textAlign: 'center'},
});
