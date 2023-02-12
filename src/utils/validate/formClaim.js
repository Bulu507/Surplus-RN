import {isEmptyData} from '../data';
import {getErrorCitizenId} from './citizenId';

const validateFormCash = (form) => {
  if (isEmptyData(form?.address)) {
    return false;
  }
  if (isEmptyData(form?.goverment_id)) {
    return false;
  }
  if (isEmptyData(form?.bank)) {
    return false;
  }
  if (isEmptyData(form?.bank_account)) {
    return false;
  }
  if (isEmptyData(form?.account_holder)) {
    return false;
  }

  if (!isEmptyData(getErrorCitizenId(form?.goverment_id))) {
    return false;
  }

  return true;
};

const validateFormNonCash = (form) => {
  if (isEmptyData(form?.address)) {
    return false;
  }
  if (isEmptyData(form?.goverment_id)) {
    return false;
  }
  if (!isEmptyData(getErrorCitizenId(form?.goverment_id))) {
    return false;
  }

  return true;
};

export const validateFormClaim = (form, isCash) => {
  if (isCash) {
    return validateFormCash(form);
  }
  return validateFormNonCash(form);
};
