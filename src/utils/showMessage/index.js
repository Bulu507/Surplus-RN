import {showMessage as showFlashMessage} from 'react-native-flash-message';
import Snackbar from 'react-native-snackbar';
import {colors} from '../colors';

export const showError = (message) => {
  showFlashMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.message.error,
    color: colors.message.text,
    icon: 'warning',
  });
};

export const showSuccess = (message) => {
  showFlashMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.message.success,
    color: colors.text.default,
  });
};

export const showWarning = (message) => {
  showFlashMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.message.warning,
    color: colors.text.default,
  });
};

export const showMessage = (message) => {
  showFlashMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.message.default,
    color: colors.message.text,
  });
};

export const showSnackPress = (mesage, action) => {
  Snackbar.show({
    text: mesage,
    duration: Snackbar.LENGTH_INDEFINITE,
    action: {
      text: 'UNDO',
      textColor: 'green',
      onPress: () => action(),
    },
  });
};

export const showSnack = (mesage, action) => {
  Snackbar.show({
    text: mesage,
    duration: Snackbar.LENGTH_SHORT,
  });
};
