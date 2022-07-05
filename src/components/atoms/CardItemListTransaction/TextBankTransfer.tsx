import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import {Colors} from '../../../styles/Colors';
import TextStyle from '../../../styles/Text';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {convertBankName} from '../../../utils/helpers';

export type Props = {
  style?: ViewStyle;
  sender_bank: string;
  beneficiary_bank: string;
};

const TextBankTransfer: React.FC<Props> = ({
  style,
  sender_bank,
  beneficiary_bank,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[TextStyle.TEXT_16SP_BOLD, {color: Colors.BLACK}]}>
        {convertBankName(sender_bank)}
      </Text>
      <Ionicons
        style={{marginHorizontal: 2}}
        name={'arrow-forward-outline'}
        size={24}
        color={Colors.BLACK}
      />
      <Text style={[TextStyle.TEXT_16SP_BOLD, {color: Colors.BLACK}]}>
        {convertBankName(beneficiary_bank)}
      </Text>
    </View>
  );
};

export default React.memo(TextBankTransfer);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
});
