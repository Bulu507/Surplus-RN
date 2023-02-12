import axios from 'axios';
import qs, {stringify} from 'qs';
import Config from 'react-native-config';
import {isEmptyData} from '../../utils';
import {AuthHeader} from '../auth';

const {BASE_URL} = Config;

const paramsCreate = {
  baseURL: BASE_URL,
  paramsSerializer: {
    serialize: stringify,
  },
};

export const GET = async (path, params) => {
  console.log('cek params GET', params);
  const api = axios.create(paramsCreate);
  const header = await AuthHeader();
  const promise = new Promise((resolve, reject) => {
    api.get(`${BASE_URL}${path}`, {params, headers: header}).then(
      (result) => {
        console.log('respons GET', result);
        resolve(result.data);
      },
      (err) => {
        const response = err.response;
        console.log('cek error kirim = ', response);
        reject(response);
      },
    );
  });
  return promise;
};

export const POST = async (path, params) => {
  console.log('cek params POST', params);
  const api = axios.create(paramsCreate);
  const header = await AuthHeader();
  const promise = new Promise((resolve, reject) => {
    api.post(`${BASE_URL}${path}`, params, {headers: header}).then(
      (result) => {
        console.log('respons POST', result);
        resolve(result.data);
      },
      (err) => {
        const response = err.response;
        console.log('cek error kirim = ', response);
        reject(response);
      },
    );
  });
  return promise;
};
