import {PermissionsAndroid} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {showError} from '../../utils';

export const getCamera = async (customFunc) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'App Camera Permission',
        message: 'App needs access to your camera ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Camera permission given');
      handleCameraPicker(customFunc);
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const optionFile = {
  mediaType: 'photo',
};

export const handleCameraPicker = (customFunc) => {
  launchCamera(optionFile, (response) => {
    if (response.didCancel || response.error) {
      showError('sepertinya anda tidak memilih foto nya?');
    } else {
      const dataImage = response.assets[0];
      customFunc(dataImage);
    }
  });
};

export const getImagePicker = async (customFunc) => {
  launchImageLibrary(optionFile, (response) => {
    console.log('cek response = ', response);
    if (response.didCancel || response.error) {
      showError('sepertinya anda tidak memilih foto nya?');
    } else {
      const dataFile = response.assets[0];
      customFunc(dataFile);
    }
  });
};
