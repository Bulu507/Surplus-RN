import date from 'date-and-time';
import meridiem from 'date-and-time/plugin/meridiem';
import {isEmptyData, setDefaultData} from '../data';
import {fullDateFormat, monthFormat, yearFormat} from './format';
import id from 'date-and-time/locale/id';

export const getFullDate = (val, type) => {
  const valueType = setDefaultData(type, 0);
  date.locale(id);

  const dataDate = isEmptyData(val) ? new Date() : new Date(val);
  const formated = date.format(dataDate, fullDateFormat[valueType]);

  return formated;
};

export const getYear = (val, type) => {
  const valueType = setDefaultData(type, 0);
  date.locale(id);

  const dataDate = isEmptyData(val) ? new Date() : new Date(val);
  const formated = date.format(dataDate, yearFormat[valueType]);

  return formated;
};

export const getMonth = (val, type) => {
  const valueType = setDefaultData(type, 0);
  date.locale(id);

  const dataDate = isEmptyData(val) ? new Date() : new Date(val);
  const formated = date.format(dataDate, monthFormat[valueType]);

  return formated;
};
