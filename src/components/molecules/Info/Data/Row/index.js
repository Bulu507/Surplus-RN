import {StyleSheet, View} from 'react-native';
import React from 'react';
import {mergeObj, setDefaultPropsData} from '../../../../../utils';
import {Gap} from '../../../../atoms';
import Title from './Title';
import Desc from './Desc';

export default function Row(props) {
  const gap = setDefaultPropsData(props?.gap, 0);
  const containerStyle = mergeObj(styles.container(gap), props?.containerStyle);
  const centerSpace = setDefaultPropsData(props?.centerSpace, 8);
  const {titleType, descType} = setTextType(props);

  return (
    <View style={containerStyle}>
      <Title {...props} titleTextType={titleType} />
      <Gap width={centerSpace} />
      <Desc {...props} descTextType={descType} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: (gap) => ({flexDirection: 'row', marginBottom: gap}),
});

const setTextType = (props) => {
  const {titleBold, allBold, noBold, descBold} = props;

  if (titleBold) {
    return {
      titleType: 'bold',
      descType: null,
    };
  }
  if (descBold) {
    return {
      titleType: null,
      descType: 'bold',
    };
  }
  if (allBold) {
    return {
      titleType: 'bold',
      descType: 'bold',
    };
  }
  if (noBold) {
    return {
      titleType: null,
      descType: null,
    };
  }

  return {
    titleType: 'bold',
    descType: null,
  };
};
