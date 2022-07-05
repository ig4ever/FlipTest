import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import useFetchTransactionList from '../hooks/useFetchTransactionList';
import Header from '../components/molecules/Header';
import ListItemTransaction from '../components/organisms/ListItemTransaction';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, RootState} from '../store';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {TypeTransaction} from '../types/Transaction';
import {Colors} from '../styles/Colors';
import ModalFilter from '../components/molecules/ModalFilter';
import {EnumFilter} from '../constants';

const dummyData = [
  {
    id: 'FT17938',
    amount: 639130,
    unique_code: 293,
    status: 'SUCCESS',
    sender_bank: 'bni',
    account_number: '5949847400',
    beneficiary_name: 'Hal Matthams',
    beneficiary_bank: 'bca',
    remark: 'sample remark',
    created_at: '2022-07-05 01:05:42',
    completed_at: '2022-07-05 01:05:42',
    fee: 0,
  },
];

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'TransactionListScreen'
>;

export type Props = {
  navigation: NavigationProp;
};

const TransactionList: React.FC<Props> = ({navigation}) => {
  const loadingGetListTransaction = useSelector(
    (rootState: RootState) =>
      rootState.loading.effects.transaction.getListTransaction,
  );

  const dispatch = useDispatch<Dispatch>();

  const [data, setKeyword] = useFetchTransactionList();
  const [filter, setFilter] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const onPressFilter = (data: string) => {
    setFilter(data);
  };

  const onChangeText = () => {};

  const onPressItem = (data: TypeTransaction) => {
    navigation.navigate('TransactionDetailScreen', {data: data});
  };

  const onRefresh = () => {};

  const onCloseModal = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <ModalFilter
        value={filter}
        isVisible={isVisible}
        onClose={onCloseModal}
        onSubmit={onPressFilter}
      />
      <Header onChangeText={onChangeText} />
      <ListItemTransaction
        loading={loadingGetListTransaction}
        data={dummyData}
        onRefresh={onRefresh}
        onPressItem={onPressItem}
      />
    </View>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE_BACKGROUND,
  },
});
