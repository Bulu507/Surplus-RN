import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {Text} from '../../atoms';

export default function Box(props) {
  const {title} = props?.data;
  const image = props?.data?.media[0]?.original_url;

  return (
    <TouchableOpacity style={styles.container} onPress={props?.onPress}>
      <ImageBackground
        source={{uri: image}}
        imageStyle={styles.img}
        style={styles.imgContainer}>
        {props?.children}
        <View style={styles.textContainer}>
          <Text
            type="bold"
            color={colors.text.white}
            size={14}
            style={styles.title}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    marginBottom: 20,
    position: 'relative',
    marginLeft: 10,
  },
  img: {borderRadius: 10},
  imgContainer: {borderRadius: 10, flex: 1},
  backdrop: {
    backgroundColor: colors.backdrop.black1,
    flex: 1,
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  title: {
    textShadowColor: colors?.black,
    textShadowOffset: {width: 3, height: 4},
    textShadowRadius: 5,
  },
});
