import {isEqual} from 'lodash';

export const isHigherThan = (val1, val2) => {
  if (val1 < val2) {
    return false;
  }
  return true;
};

export const binaryToBool = (val) => {
  if (isEqual(val, 0) || isEqual(val, '0')) {
    return false;
  }

  return true;
};
