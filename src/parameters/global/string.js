import {getYear} from '../../utils';
import Config from 'react-native-config';
import {isEqual} from 'lodash';

const year = getYear();
export const COPYRIGHT = `© ${year} redantcolony.com`;

export const getDefaultWAMessage = (user) => {
  return `Salam Full Power\nSaya ${user}, mau bertanya`;
};

export const TAX_INFO = [
  {title: 'Pribadi non NPWP', desc: '6%'},
  {title: 'Pribadi NPWP', desc: '5%'},
  {title: 'Badan Usaha non NPWP', desc: '30%'},
  {title: 'Badan Usaha NPWP', desc: '15%'},
];

export const INFORMATION = {
  phone: '081338030000',
  name: 'Agus Tjandra',
  email: 'office@javamas.com',
  fb: 'https://www.facebook.com/JavamasAgrophosOfficial',
  youtube: 'https://www.youtube.com/@JavamasAgrophos',
};

export const IS_PRODUCTION = isEqual(Config.ENVIRONMENT_STATUS, 'production');
