import {localParams} from '../../../parameters';
import {isEmptyData, setDefaultData} from '../../../utils';
import {getLocalData, storeData} from '../../localstorage';
import uuid from 'react-native-uuid';
import {isEqual} from 'lodash';

export const StoreUser = async (form) => {
  const promise = new Promise((resolve, reject) => {
    getLocalData(localParams.LIST_USERS).then((result) => {
      const users = setDefaultData(result, []);
      const checkPhone = users.filter((x) => isEqual(x.email, form?.email));

      if (isEmptyData(checkPhone)) {
        const generateID = uuid.v4();
        const formWithID = {...form, id: generateID};
        users.push(formWithID);
        storeData(localParams.LIST_USERS, users);
        resolve({message: 'Data user berhasil dibuat.'});
      } else {
        reject({message: 'Alamat email sudah terdaftar!'});
      }
    });
  });
  return promise;
};
