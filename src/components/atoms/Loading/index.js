import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../Text';
import {ActivityIndicator} from 'react-native';
import {colors, setDefaultPropsData} from '../../../utils';
import Gap from '../Gap';
import Footer from './Footer';

const Loading = (props) => {
  const baseColor = setDefaultPropsData(props?.baseColor, colors.primary);
  const title = setDefaultPropsData(props?.title, 'Loading...');

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" animating color={baseColor} />
      {!props?.loadOnly && (
        <>
          <Gap height={5} />
          <Text align="center" color={baseColor}>
            {title}
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

Loading.Footer = Footer;

export default Loading;
