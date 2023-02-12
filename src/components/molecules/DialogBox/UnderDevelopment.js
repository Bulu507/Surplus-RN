import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {Dialog} from '@rneui/base';
import {colors, fontStyle} from '../../../utils';
import {Gap, Icon} from '../../atoms';

export default function UnderDevelopment(props) {
  return (
    <Dialog
      isVisible={props?.isVisible}
      onBackdropPress={() => props?.close()}
      overlayStyle={styles.container}>
      <Icon
        name="alert-circle-outline"
        type="material-community"
        color={colors.danger}
        size={40}
      />
      <Text style={styles.textBold}>Mohon Maaf !</Text>
      <Gap height={10} />
      <Text style={styles.text}>Halaman ini sedang dalam pengembangan</Text>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 16,
    alignItems: 'center',
  },
  text: {...fontStyle.normal(), textAlign: 'center'},
  textBold: {...fontStyle.bold(), textAlign: 'center'},
});
