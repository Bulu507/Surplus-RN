import {isArray, isEmpty, isEqual, isNull, isNumber, isUndefined} from 'lodash';

export function trimString(s) {
  var l = 0,
    r = s.length - 1;
  while (l < s.length && s[l] === ' ') {
    l++;
  }
  while (r > l && s[r] === ' ') {
    r -= 1;
  }
  return s.substring(l, r + 1);
}

export function compareObjects(o1, o2) {
  var k = '';
  for (k in o1) {
    if (o1[k] !== o2[k]) {
      return false;
    }
  }
  for (k in o2) {
    if (o1[k] !== o2[k]) {
      return false;
    }
  }
  return true;
}

export const equalsIgnoreOrder = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  const uniqueValues = new Set([...a, ...b]);
  for (const v of uniqueValues) {
    const aCount = a.filter((e) => e === v).length;
    const bCount = b.filter((e) => e === v).length;
    if (aCount !== bCount) {
      return false;
    }
  }
  return true;
};

export function itemExists(haystack, needle) {
  for (var i = 0; i < haystack.length; i++) {
    if (compareObjects(haystack[i], needle)) {
      return true;
    }
  }
  return false;
}

export const searchDataObj = (objects, keys, toSearch) => {
  var results = [];
  toSearch = trimString(toSearch).toUpperCase(); // trim it
  for (var i = 0; i < objects.length; i++) {
    for (var j = 0; j < keys.length; j++) {
      if (objects[i][keys[j]].toUpperCase().indexOf(toSearch) !== -1) {
        if (!itemExists(results, objects[i])) {
          results.push(objects[i]);
        }
      }
    }
  }

  return results;
};

export const collectDataByKey = (dataArr, key) => {
  let arr = [];
  dataArr?.map((item) => {
    arr.push(item[key]);
  });
  return arr;
};

export const getDataObjByKey = (dataArr, keyObj, key) => {
  const data = dataArr?.find((obj) => obj[keyObj] === key);
  return data;
};

export const filterObjByKey = (dataArr, objectKey) => {
  let allowedKeys = isArray(objectKey) ? objectKey : Object.keys(objectKey);
  let filtered = objectKey;
  if (!isEmpty(dataArr)) {
    filtered = Object.keys(dataArr)
      .filter((key) => allowedKeys.indexOf(key) > -1)
      .reduce((obj, key) => {
        obj[key] = dataArr[key];
        return obj;
      }, {});
  }
  return filtered;
};

export const exceptObjKey = (obj, keyString) => {
  const result = Object.keys(obj).reduce((acc, keyObj) => {
    if (keyObj !== keyString) {
      acc[keyObj] = obj[keyObj];
    }
    return acc;
  }, {});

  return result;
};

export const isExist = (obj, key, params) => {
  console.log('cek obj', obj);
  const filter = obj.find((data) => data[key] === params);
  console.log('filter exist = ', filter);
  const result = isEmpty(filter) ? false : true;
  return result;
};

export const isZero = (val) => isEqual(val, 0);

export const isEmptyValue = (val) => {
  if (isNumber(val)) {
    return isEqual(val, 0) ? true : false;
  }

  return isEmpty(val);
};

export const isEmptyData = (val, initParams) => {
  if (isUndefined(val)) {
    return isUndefined(val);
  }

  if (isNull(val)) {
    return isNull(val);
  }

  if (isNumber(val)) {
    return isZero(val);
  }

  if (!isEmpty(initParams)) {
    if (isEqual(val, initParams)) {
      return true;
    }
  }

  return isEmpty(val);
};
