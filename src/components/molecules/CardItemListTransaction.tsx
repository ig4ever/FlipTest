import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../styles/Colors';
import TextStatus from '../atoms/CardItemListTransaction/TextStatus';
import {EnumStatus} from '../../constants';
import TextAmountAndDate from '../atoms/CardItemListTransaction/TextAmountAndDate';
import TextName from '../atoms/CardItemListTransaction/TextName';
import {TypeTransaction} from '../../types/Transaction';
import TextBankTransfer from '../atoms/CardItemListTransaction/TextBankTransfer';
import Ripple from 'react-native-material-ripple';

export type Props = {
  data: TypeTransaction;
  onPressItem: (data: TypeTransaction) => void;
};

const CardItemTransaction: React.FC<Props> = ({data, onPressItem}) => {
  return (
    <Ripple
      rippleCentered
      rippleContainerBorderRadius={100}
      onPress={() => onPressItem(data)}
      style={[
        styles.container,
        {
          backgroundColor:
            data?.status === EnumStatus.SUCCESS
              ? Colors.GREEN
              : data?.status === EnumStatus.PENDING
              ? Colors.RED
              : Colors.WHITE,
        },
      ]}>
      <View style={styles.containerChild}>
        {data?.sender_bank &&
        data?.beneficiary_bank &&
        data?.status &&
        data?.amount &&
        data?.created_at ? (
          <>
            <View style={{marginLeft: 8}}>
              <TextBankTransfer
                sender_bank={data?.sender_bank}
                beneficiary_bank={data?.beneficiary_bank}
              />
              <TextName name={data?.beneficiary_name} status={data?.status} />
              <TextAmountAndDate
                amount={data?.amount}
                date={data?.created_at}
              />
            </View>
            <View>
              <TextStatus status={data?.status} />
            </View>
          </>
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: 80,
            }}>
            <ActivityIndicator size={24} color={Colors.RED} />
          </View>
        )}
      </View>
    </Ripple>
  );
};

export default React.memo(CardItemTransaction);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 1,
  },
  containerChild: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
    padding: 10,
    marginLeft: 6,
  },
});
