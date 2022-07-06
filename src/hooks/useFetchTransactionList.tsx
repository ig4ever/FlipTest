import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {EnumSort} from '../constants';
import {Dispatch, RootState} from '../store';
import {TypeHashTransaction} from '../types/Transaction';
import {filterHash, sortHash} from '../utils/helpers';

const useFetchTransactions = () => {
  //** Get state model transactions, from rematch/redux */
  const transactions = useSelector(
    (rootState: RootState) => rootState.transaction,
  );
  //** Loading state while occur fetching data from API (plugin from rematch) */
  const loadingGetListTransaction = useSelector(
    (rootState: RootState) =>
      rootState.loading.effects.transaction.getListTransaction,
  );

  const dispatch = useDispatch<Dispatch>();

  const [response, setResponse] = useState<TypeHashTransaction | null>(null);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState(EnumSort.URUTKAN + '');

  //** Method for initialize data */
  const initResponse = useCallback(() => {
    //** Always reset the transactions state to makes sure data empty while initialize,
    //** it's not neccassary actually, but just in case while the data of the response are equal,
    //** so it will be always re-render if i reset the state. */ */
    dispatch.transaction.resetData();
    dispatch.transaction.getListTransaction();
  }, [dispatch.transaction]);

  //** Called when occur filter/search by keywords */
  const onChangeFilter = (value: string) => {
    setFilter(value);
    if (transactions) {
      let results = null;
      if (value !== '') {
        //** if input text not empty, filter the response state  */
        results = filterHash(transactions, value);
      } else {
        //** if input text empty, set response with the initialized data */
        results = transactions;
      }

      //** if sort state value not default, sort the filtered data  */
      if (sort !== EnumSort.URUTKAN) results = sortHash(results, sort);

      setResponse(results);
    }
  };

  //** Called when occur sorting */
  const onChangeSort = (value: string) => {
    setSort(value);
    if (transactions && value !== sort) {
      let results = null;
      if (value !== EnumSort.URUTKAN) {
        //** if radio button not checked default value, sort the response state  */
        results = sortHash(transactions, value);
      } else {
        //** if radio button checked default value, set response with the initialized data  */
        results = transactions;
      }

      //** if filter not empty, filter the sorted data  */
      if (filter !== '') results = filterHash(results, filter);

      setResponse(results);
    }
  };

  //** Call init method on first render to fetch data from API */
  useEffect(() => {
    initResponse();
  }, [initResponse]);

  //** Update the state 'response' when occur state change of model 'transactions' */
  useEffect(() => {
    if (transactions) {
      //** reset state sort and filter */
      setSort(EnumSort.URUTKAN);
      setFilter('');
      setResponse(transactions);
    }
  }, [transactions]);

  return {
    response: response,
    filter: filter,
    sort: sort,
    loading: loadingGetListTransaction,
    initResponse: initResponse,
    onChangeFilter: onChangeFilter,
    onChangeSort: onChangeSort,
  };
};

export default useFetchTransactions;
