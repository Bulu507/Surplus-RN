import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Gap} from '..';
import {colors, mergeObj} from '../../../utils';

export default function Line(props) {
  return (
    <View style={styles.container(props.width, props.height, props?.center)}>
      <Gap height={props.mt} />
      <View
        style={mergeObj(
          styles.line(
            props.m,
            props.mh,
            props.mv,
            props.bw,
            props.ml,
            props.mr,
            props.color,
          ),
          props.style,
        )}
      />
      <Gap height={props.mb} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: (width, height, center) => ({
    width: width ? width : '100%',
    height: height ? height : null,
    alignSelf: center ? 'center' : null,
  }),
  line: (m, mh, mv, bw, ml, mr, color) => ({
    borderBottomWidth: bw ? bw : 1,
    borderBottomColor: color ? color : colors.border?.grey1,
    margin: m ? m : 0,
    marginHorizontal: mh ? mh : 0,
    marginVertical: mv ? mv : 0,
    marginLeft: ml ? ml : null,
    marginRight: mr ? mr : null,
  }),
});
