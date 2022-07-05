import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {EnumFilter} from '../constants';
import {Dispatch, RootState} from '../store';
import {TypeHashTransaction} from '../types/Transaction';
import {filterArray, sortArray} from '../utils/helpers';

//**
// Actually creating custom hooks like this is not neccessary in my case/opinion since i using rematch.
// This custom hooks only for fulfilled a requirement of the task.
//*
const useTransactionList = () => {
  const [data, setData] = useState<TypeHashTransaction>({});
  const [keyword, setKeyword] = useState('');
  const [filter, setFilter] = useState<EnumFilter>(EnumFilter.URUTKAN);

  const transactionList = useSelector(
    (rootState: RootState) => rootState.transaction.transactionList,
  );
  const dispatch = useDispatch<Dispatch>();

  //** Initialize Data List Transaction*/
  useEffect(() => {
    dispatch.transaction.getListTransaction();
  }, [dispatch.transaction]);

  useEffect(() => {
    setData(transactionList);
  }, [transactionList]);

  //** Filter */
  useEffect(() => {
    setData(filterArray(transactionList, keyword));
  }, [keyword, transactionList]);

  //** Sort */
  useEffect(() => {
    setData(sortArray(transactionList, filter));
  }, [filter, transactionList]);

  return [data, setKeyword, setFilter];
};

export default useTransactionList;
