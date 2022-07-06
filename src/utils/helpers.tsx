import {Alert} from 'react-native';
import {EnumSort} from '../constants';
import {TypeHashTransaction} from '../types/Transaction';

//** Method for sort list data */
export const sortHash = (
  listTransaction: TypeHashTransaction,
  filter?: string,
) => {
  var results: TypeHashTransaction = {};

  if (filter) {
    switch (filter) {
      case EnumSort.A_Z:
        var orderedKeys = Object.keys(listTransaction).sort(
          (a: string, b: string) =>
            listTransaction[a]['beneficiary_name']?.localeCompare(
              listTransaction[b]['beneficiary_name'],
            ),
        );
        for (var i = 0; i < orderedKeys.length; i++) {
          results[orderedKeys[i]] = listTransaction[orderedKeys[i]];
        }
        break;
      case EnumSort.Z_A:
        var orderedKeys = Object.keys(listTransaction).sort(
          (a: string, b: string) =>
            listTransaction[b]['beneficiary_name']?.localeCompare(
              listTransaction[a]['beneficiary_name'],
            ),
        );
        for (var i = 0; i < orderedKeys.length; i++) {
          results[orderedKeys[i]] = listTransaction[orderedKeys[i]];
        }
        break;
      case EnumSort.NEWEST:
        var orderedKeys = Object.keys(listTransaction).sort(
          (a: string, b: string) =>
            new Date(listTransaction[b]['created_at'])?.valueOf() -
            new Date(listTransaction[a]['created_at'])?.valueOf(),
        );
        for (var i = 0; i < orderedKeys.length; i++) {
          results[orderedKeys[i]] = listTransaction[orderedKeys[i]];
        }
        break;
      case EnumSort.OLDEST:
        var orderedKeys = Object.keys(listTransaction).sort(
          (a: string, b: string) =>
            new Date(listTransaction[a]['created_at'])?.valueOf() -
            new Date(listTransaction[b]['created_at'])?.valueOf(),
        );
        for (var i = 0; i < orderedKeys.length; i++) {
          results[orderedKeys[i]] = listTransaction[orderedKeys[i]];
        }
        break;
      default:
        break;
    }
  }

  return results;
};

//** Method for filter list data */
export const filterHash = (
  listTransaction: TypeHashTransaction,
  keyword?: string,
) => {
  var results: TypeHashTransaction = {};

  if (keyword) {
    for (var key in listTransaction) {
      if (listTransaction?.hasOwnProperty(key)) {
        if (
          (listTransaction[key]['beneficiary_name'] + '').search(
            new RegExp(keyword, 'i'),
          ) !== -1 ||
          (listTransaction[key]['sender_bank'] + '').search(
            new RegExp(keyword, 'i'),
          ) !== -1 ||
          (listTransaction[key]['beneficiary_bank'] + '').search(
            new RegExp(keyword, 'i'),
          ) !== -1 ||
          (listTransaction[key]['amount'] + '').search(
            new RegExp(keyword, 'i'),
          ) !== -1
        ) {
          results[key] = listTransaction[key];
        }
      }
    }
  }

  return results;
};

export const convertToDate = (dates: string) => {
  var tempDate = new Date(dates);
  var year = tempDate.getFullYear();
  var month: number | string = tempDate.getMonth();
  var date = tempDate.getDate();

  switch (month) {
    case 0:
      month = 'Januari';
      break;
    case 1:
      month = 'Februari';
      break;
    case 2:
      month = 'Maret';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'Mei';
      break;
    case 5:
      month = 'Juni';
      break;
    case 6:
      month = 'Juli';
      break;
    case 7:
      month = 'Agustus';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'Oktober';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'Desember';
      break;
  }

  return date + ' ' + month + ' ' + year;
};

export const convertToRupiah = (number: number) => {
  var result = '';
  var tempNumber = number.toString().split('').reverse().join('');
  for (var i = 0; i < tempNumber?.length; i++)
    if (i % 3 == 0) result += tempNumber?.substr(i, 3) + '.';
  return (
    'Rp' +
    result
      .split('', result?.length - 1)
      .reverse()
      .join('')
  );
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
