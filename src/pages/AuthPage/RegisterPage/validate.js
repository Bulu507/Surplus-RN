import {comparePassword, isEmptyData} from '../../../utils';

export const validate = (values, keyPassword) => {
  if (isEmptyData(values.email)) {
    return false;
  }

  if (isEmptyData(values.password)) {
    return false;
  }

  if (isEmptyData(keyPassword)) {
    return false;
  }

  if (!comparePassword(values.password, keyPassword)) {
    return false;
  }

  return true;
};
