import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import useFetchTransactions from '../hooks/useFetchTransactionList';
import Header from '../components/molecules/Header';
import ListItemTransaction from '../components/organisms/ListItemTransaction';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {TypeHashTransaction} from '../types/Transaction';
import {Colors} from '../styles/Colors';
import ModalSort from '../components/molecules/ModalSort';

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'TransactionListScreen'
>;

export type Props = {
  navigation: NavigationProp;
};

const TransactionList: React.FC<Props> = ({navigation}) => {
  const {
    response,
    filter,
    sort,
    loading,
    initResponse,
    onChangeFilter,
    onChangeSort,
  } = useFetchTransactions();
  const [isVisible, setIsVisible] = useState(false);

  const onPressItem = (data: TypeHashTransaction) => {
    //** Navigate to Transaction Detail Screen, and passing the data */
    navigation.navigate('TransactionDetailScreen', {data: data[1]});
  };

  const onRefresh = () => {
    initResponse();
  };

  const onCloseModal = () => {
    setIsVisible(false);
  };

  const onOpenModal = () => {
    setIsVisible(true);
  };

  return (
    <View style={styles.container}>
      <ModalSort
        value={sort}
        isVisible={isVisible}
        onClose={onCloseModal}
        onValueChange={onChangeSort}
      />
      <Header
        onPress={onOpenModal}
        onChangeText={onChangeFilter}
        value={filter}
        sortName={sort}
      />
      <ListItemTransaction
        loading={loading}
        //** response can be null so i using ternary to prevent error,
        //** and since the data from API is not array, so i using Object.entries to get the object keys */
        data={response ? Object.entries(response) : []}
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
