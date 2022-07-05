import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../styles/Colors';
import {TypeTransaction} from '../../types/Transaction';
import TextInfo from '../atoms/CardDetailTransaction/TextInfo';
import Header from '../atoms/CardDetailTransaction/Header';
import TextStyle from '../../styles/Text';
import {convertToDate, convertToRupiah} from '../../utils/helpers';
import {EnumStatus} from '../../constants';
import HR from '../atoms/CardDetailTransaction/HR';
import TextBankTransfer from '../atoms/CardItemListTransaction/TextBankTransfer';

export type Props = {
  data: TypeTransaction;
  onClose: () => void;
  onCopy: (data: string) => void;
};

const CardDetailTransaction: React.FC<Props> = ({data, onClose, onCopy}) => {
  return (
    <View>
      <Header data={data} onPress={onCopy} onClose={onClose} />
      <View style={[styles.container]}>
        <View style={styles.containerHeader}>
          <Text style={[TextStyle.TEXT_14SP_BOLD, {color: Colors.BLACK}]}>
            DETAIL TRANSAKSI
          </Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={[TextStyle.TEXT_14SP_MEDIUM, {color: Colors.RED}]}>
              Tutup
            </Text>
          </TouchableOpacity>
        </View>
        <HR />
        <TextBankTransfer
          style={{marginHorizontal: 10}}
          beneficiary_bank={data?.beneficiary_bank}
          sender_bank={data?.sender_bank}
        />
        <View style={styles.containerInfo}>
          <View>
            <TextInfo
              label={
                data?.status === EnumStatus.PENDING
                  ? '- ' + data?.beneficiary_name?.toUpperCase()
                  : data?.beneficiary_name?.toUpperCase()
              }
              value={data?.account_number}
            />
            <TextInfo label={'BERITA TRANSFER'} value={data?.remark} />
            <TextInfo
              label={'WAKTU DIBUAT'}
              value={convertToDate(data?.created_at)}
            />
          </View>
          <View>
            <TextInfo label={'NOMINAL'} value={convertToRupiah(data?.amount)} />
            <TextInfo label={'KODE UNIK'} value={data?.unique_code + ''} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(CardDetailTransaction);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    overflow: 'hidden',
    backgroundColor: Colors.WHITE,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
});
