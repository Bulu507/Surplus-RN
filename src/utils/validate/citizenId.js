import {MAX_NIK_LENGTH} from '../../parameters';

export const getErrorCitizenId = (nik) => {
  console.log('cek nik', nik);
  if (nik.length < MAX_NIK_LENGTH) {
    return 'NIK kurang dari 16 Karakter';
  }

  return null;
};
