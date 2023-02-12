import {StyleSheet} from 'react-native';
import React from 'react';
import {colors, mergeObj, setDefaultData} from '../../../utils';
import Header from './Header';
import TouchBox from '../TouchBox';

const Card = (props) => {
  const paddingBox = setDefaultData(props?.paddingBox, 0);
  const containerStyle = mergeObj(
    styles.container(paddingBox),
    props?.containerStyle,
  );

  return (
    <TouchBox {...props} style={containerStyle}>
      {props.children}
    </TouchBox>
  );
};

const styles = StyleSheet.create({
  container: (padding) => ({
    borderRadius: 5,
    padding: padding,
    backgroundColor: colors.white,
    margin: 15,
    marginTop: 0,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  }),
  wrapper: {},
});

Card.Header = Header;

export default Card;
