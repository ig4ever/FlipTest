import {RefreshControl, StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {TypeTransaction} from '../../types/Transaction';
import CardItemListTransaction from '../molecules/CardItemListTransaction';
import {Colors} from '../../styles/Colors';
import TextStyle from '../../styles/Text';

export type Props = {
  data: any;
  loading: boolean;
  onRefresh: () => void;
  onPressItem: (data: TypeTransaction) => void;
};

const ListItemTransaction: React.FC<Props> = ({
  data,
  loading,
  onRefresh,
  onPressItem,
}) => {
  const renderItem = ({item}: any) => (
    <CardItemListTransaction
      data={item[1]}
      onPressItem={() => onPressItem(item)}
    />
  );

  const keyExtractor = (item: any, index: number) => item[1]?.id + index;

  const ListEmptyComponent = () => (
    <View style={{alignSelf: 'center', marginTop: 16}}>
      <Text style={[TextStyle.TEXT_14SP_MEDIUM]}>Tidak ada data</Text>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={data}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={onRefresh}
          colors={[Colors.RED]}
        />
      }
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
      keyExtractor={keyExtractor}
    />
  );
};

export default React.memo(ListItemTransaction);

const styles = StyleSheet.create({
  container: {},
});
