import {createModel} from '@rematch/core';
import {RootModel} from '.';
import * as api from '../services/api/transaction';
import {TypeHashTransaction, TypeTransaction} from '../types/Transaction';

export const transaction = createModel<RootModel>()({
  state: null as TypeHashTransaction | null,
  reducers: {
    updateData(state, payload: TypeHashTransaction) {
      state = payload;
      return state;
    },
    resetData(state) {
      state = null;
      return state;
    },
  },
  effects: dispatch => ({
    async getListTransaction() {
      /** Consume / Fetch Data API List Transaction */
      const response: TypeHashTransaction = await api.getListTransaction();
      //** Prevent error date NaN */
      for (var key in response) {
        if (response?.hasOwnProperty(key)) {
          response[key]['created_at'] = response[key]['created_at'].replace(
            ' ',
            'T',
          );
        }
      }
      /** Update State List Transaction */
      dispatch.transaction.updateData(response);
      return response;
    },
  }),
});
