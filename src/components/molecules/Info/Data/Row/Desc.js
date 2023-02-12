import {StyleSheet, View} from 'react-native';
import React from 'react';
import {mergeObj, setDefaultPropsData} from '../../../../../utils';
import {Text} from '../../../../atoms';
import {isUndefined} from 'lodash';

export default function Desc(props) {
  const flexEnd = setDefaultPropsData(props?.fullSide, null);
  const descBoxStyle = mergeObj(
    styles.descBoxStyle(flexEnd),
    props?.descBoxStyle,
  );
  const desc = setDefaultPropsData(props?.desc, '');
  const descProps = setDefaultPropsData(props?.descProps, {});
  const descTextType = setDefaultPropsData(props?.descTextType, null);

  if (isUndefined(props?.desc) && isUndefined(props?.descComponent)) {
    return null;
  }

  return (
    <View style={descBoxStyle}>
      {props?.descComponent ? (
        props?.descComponent
      ) : (
        <Text {...descProps} type={descTextType}>
          {desc}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  descBoxStyle: (align) => ({flex: 2, alignItems: align ? 'flex-end' : null}),
});
