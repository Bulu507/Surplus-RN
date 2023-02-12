import axios from 'axios';
import Config from 'react-native-config';
import {localParams} from '../../parameters';
import {getLocalData, removeData} from '../localstorage';
import {GET, POST} from '../data';
import {isEmptyData} from '../../utils';

const {BASE_URL} = Config;

export const AuthLoginService = (params) => {
  console.log('cek params auth', params);
  const api = axios.create({baseURL: BASE_URL});
  const promise = new Promise((resolve, reject) => {
    api.post(`${BASE_URL}/auth/login`, params).then(
      (result) => {
        console.log('cek res', result);
        resolve(result?.data);
      },
      (err) => {
        console.log('cek err', err);
        const response = err?.response;
        reject(response);
      },
    );
  });

  return promise;
};

export const AuthRegister = (params) => {
  console.log('cek params auth', params);
  const api = axios.create({baseURL: BASE_URL});
  const promise = new Promise((resolve, reject) => {
    api.post(`${BASE_URL}/auth/register`, params).then(
      (result) => {
        console.log('cek res', result);
        resolve(result?.data);
      },
      (err) => {
        console.log('cek err', err);
        const response = err?.response;
        reject(response);
      },
    );
  });

  return promise;
};

export const AuthHeader = async () => {
  try {
    const token = await getLocalData(localParams.AUTH_TOKEN);
    if (!isEmptyData(token)) {
      return {Authorization: `Bearer ${token}`};
    }
  } catch (error) {
    console.log('cek error header', error);
    return {};
  }
};
