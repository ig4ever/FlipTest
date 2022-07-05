import {EnumFilter} from '../constants';
import {TypeHashTransaction} from '../types/Transaction';

export const sortArray = (
  listTransaction: TypeHashTransaction,
  filter?: EnumFilter,
) => {
  let results = {};

  if (filter) {
    switch (filter) {
      case EnumFilter.A_Z:
        results = Object.keys(listTransaction)?.sort((a: string, b) =>
          listTransaction[a]['beneficiary_name'].localeCompare(
            listTransaction[b]['beneficiary_name'],
          ),
        );
        break;
      case EnumFilter.Z_A:
        results = Object.keys(listTransaction)?.sort((a: string, b) =>
          listTransaction[b]['beneficiary_name'].localeCompare(
            listTransaction[a]['beneficiary_name'],
          ),
        );
        break;
      case EnumFilter.NEWEST:
        results = Object.keys(listTransaction)?.sort(
          (a: string, b: string) =>
            new Date(listTransaction[b]['created_at']).valueOf() -
            new Date(listTransaction[a]['created_at']).valueOf(),
        );
        break;
      case EnumFilter.OLDER:
        results = Object.keys(listTransaction)?.sort(
          (a: string, b: string) =>
            new Date(listTransaction[a]['created_at']).valueOf() -
            new Date(listTransaction[b]['created_at']).valueOf(),
        );
        break;
      default:
        break;
    }
  }

  return results;
};

export const filterArray = (
  listTransaction: TypeHashTransaction,
  keyword?: string,
) => {
  let results: TypeHashTransaction = listTransaction;

  if (keyword) {
    var keys = [];
    for (var key in listTransaction) {
      if (results.hasOwnProperty(key)) {
        if (
          results[key]['beneficiary_name'] === keyword ||
          results[key]['sender_bank'] === keyword ||
          results[key]['beneficiary_bank'] === keyword
        )
          keys.push(results[key]);
      }
    }
    results = keys;
  }

  return results;
};

export const convertToDate = (date: string) => {
  const d = new Date(date);
  return d?.toLocaleDateString('id', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const convertToRupiah = (number: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  })
    .format(number)
    .replace('\u00a0', '');
};

export const convertBankName = (bank: string) => {
  let capitalized = '';
  //** Capitalize first letter when bank name length above 4 letter */
  if (bank?.length > 4) {
    capitalized = bank?.charAt(0)?.toUpperCase() + bank?.slice(1);
  } else {
    capitalized = bank?.toUpperCase();
  }

  return capitalized;
};
