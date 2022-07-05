import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../../styles/Colors';
import TextStyle from '../../../styles/Text';
import {convertToDate, convertToRupiah} from '../../../utils/helpers';

export type Props = {
  amount: number;
  date: string;
};

const TextAmountAndDate: React.FC<Props> = ({amount, date}) => {
  return (
    <View style={styles.container}>
      <Text style={[TextStyle.TEXT_16SP_MEDIUM, {color: Colors.BLACK}]}>
        {convertToRupiah(amount)}
      </Text>
      <Text
        style={[
          TextStyle.TEXT_24SP_BOLD,
          {color: Colors.BLACK, marginHorizontal: 4},
        ]}>
        •
      </Text>
      <Text style={[TextStyle.TEXT_16SP_MEDIUM, {color: Colors.BLACK}]}>
        {convertToDate(date)}
      </Text>
    </View>
  );
};

export default React.memo(TextAmountAndDate);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
