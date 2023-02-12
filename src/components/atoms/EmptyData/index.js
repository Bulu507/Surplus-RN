import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from '..';
import {colors, setDefaultPropsData} from '../../../utils';

export default function EmptyData(props) {
  const title = setDefaultPropsData(props?.title, 'Data Kosong');

  return (
    <View style={styles.container}>
      <Text align="center" color={colors.text.highlight} size={14} type="bold">
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 15},
});
