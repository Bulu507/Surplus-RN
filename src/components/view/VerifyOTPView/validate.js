import {isEqual} from 'lodash';
import {OTP_PIN_LENGTH} from '../../../parameters';

export const checkFillCode = (code) => {
  if (!isEqual(code?.length, OTP_PIN_LENGTH)) {
    return false;
  }

  return true;
};
