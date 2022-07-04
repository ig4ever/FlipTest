import {createModel} from '@rematch/core';
import {RootModel} from '.';
import * as api from '../services/api/transaction';
import {TypeTransaction} from '../types/Transaction';

const defaultValue = {
  transactionList: [] as Array<TypeTransaction>,
  transactionDetail: {} as TypeTransaction,
};

export const transaction = createModel<RootModel>()({
  state: defaultValue,
  reducers: {
    updateTransactionListData(state, payload: Array<TypeTransaction>) {
      state.transactionList = payload;
      return state;
    },
    updateTransactionDetailData(state, payload: TypeTransaction) {
      state.transactionDetail = payload;
      return state;
    },
    resetTransactionListData(state) {
      state.transactionList = defaultValue.transactionList;
      return state;
    },
    resetTransactionDetailData(state) {
      state.transactionDetail = defaultValue.transactionDetail;
      return state;
    },
  },
  effects: dispatch => ({
    async getListTransaction() {
      /** Consume / Fetch Data API List Transaction */
      const response = await api.getListTransaction();
      /** Update State List Transaction */
      dispatch.transaction.updateTransactionListData(response);
      return response;
    },
  }),
});
