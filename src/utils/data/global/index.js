import {isEmptyData} from '../filterData';
import Clipboard from '@react-native-clipboard/clipboard';
import {showSnack} from '../../showMessage';
import {isUndefined} from 'lodash';
import {getFullDate} from '../../date';

export const copyToClipboard = (value, title) => {
  let label = isEmptyData(title) ? 'Data' : title;
  Clipboard.setString(value);
  showSnack(`${label} berhasil disalin ke clipboard`);
};

export const setDefaultData = (val, def) => {
  let data = def;
  if (!isUndefined(val)) {
    if (isEmptyData(val)) {
      data = def;
    } else {
      data = val;
    }
  }

  return data;
};

export const setDefaultPropsData = (val, def) => {
  let data = def;
  if (!isUndefined(val)) {
    data = val;
  }

  return data;
};

export const setDefaultDataDate = (val, def, type) => {
  const defaultData = isUndefined(def) ? getFullDate() : '';
  const typeDate = setDefaultData(type, 0);
  let data = defaultData;
  if (!isUndefined(val)) {
    if (isEmptyData(val)) {
      data = def;
    } else {
      data = getFullDate(val, typeDate);
    }
  }

  return data;
};

export const setDefaultDataImageUrl = (val, def) => {
  const defaultData = isUndefined(def) ? null : def;
  let data = defaultData;
  if (isEmptyData(val)) {
    data = def;
  } else {
    data = {uri: val};
  }

  return data;
};

export const mergeObj = (...params) => {
  let obj = {};
  if (!isEmptyData(params)) {
    params.map((i, idx) => {
      let item = params[idx];
      obj = {...obj, ...item};
    });
  }
  return obj;
};

// export const exceptObjKey = (obj, keyString) => {
//   const result = Object.keys(obj).reduce((acc, keyObj) => {
//     if (keyObj !== keyString) {
//       acc[keyObj] = obj[keyObj];
//     }
//     return acc;
//   }, {});

//   return result;
// };
