import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BottomSheet} from '@rneui/themed';
import {colors} from '../../../utils';
import {Icon, Text} from '../../atoms';
import {ICON} from '../../../parameters';
import {getCamera, getImagePicker} from '../../../services';

export default function ModalUploadImage(props) {
  const handleImagePicker = (img) => {
    console.log('cek image', img);
  };

  return (
    <BottomSheet isVisible={props?.isVisible} onBackdropPress={props?.close}>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => getCamera(handleImagePicker)}>
          <Icon raised name="camera" type={ICON.MDC} color={colors.grey1} />
          <Text color={colors?.white}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => getImagePicker(handleImagePicker)}>
          <Icon
            raised
            name="folder-image"
            type={ICON.MDC}
            color={colors.grey1}
          />
          <Text color={colors?.white}>Galery</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.black,
    padding: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {alignItems: 'center'},
});
