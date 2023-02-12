import {isEqual} from 'lodash';
import {MIN_PASSWORD_LENGTH} from '../../parameters';

export const comparePassword = (pass1, pass2) => {
  if (!isEqual(pass1, pass2)) {
    return false;
  }

  return true;
};

export const getPasswordError = (pass1, pass2) => {
  if (pass1.length < MIN_PASSWORD_LENGTH) {
    return 'Password harus terdiri dari 6 karakter';
  }

  if (!comparePassword(pass1, pass2)) {
    return 'Password yang diisikan berbeda!';
  }

  return null;
};
