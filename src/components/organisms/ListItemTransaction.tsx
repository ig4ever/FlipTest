import {RefreshControl, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TypeTransaction} from '../../types/Transaction';
import {FlatList} from 'react-native-gesture-handler';
import CardItemTransaction from '../molecules/CardItemListTransaction';
import {Colors} from '../../styles/Colors';
import TextStyle from '../../styles/Text';

export type Props = {
  data: Array<TypeTransaction>;
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
    <CardItemTransaction data={item} onPressItem={() => onPressItem(item)} />
  );

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
      keyExtractor={(item: TypeTransaction, index: number) => item?.id + index}
    />
  );
};

export default React.memo(ListItemTransaction);

const styles = StyleSheet.create({
  container: {},
});
