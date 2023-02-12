import {Image} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text} from '../../../atoms';
import {View} from 'react-native';
import {colors} from '../../../../utils';

export default function Box(props) {
  const {data} = props;
  const name = data?.name;
  const image = data?.image;

  return (
    <Card containerStyle={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.info}>
        <Text type="bold" size={14}>
          {name}
        </Text>
        {props?.children}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', flex: 1},
  image: {
    width: 125,
    height: 150,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    backgroundColor: colors.grey1,
  },
  info: {padding: 10, justifyContent: 'space-between', flex: 1},
});
