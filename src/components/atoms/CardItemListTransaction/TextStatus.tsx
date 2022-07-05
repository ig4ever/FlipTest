import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../../styles/Colors';
import TextStyle from '../../../styles/Text';
import {EnumStatus} from '../../../constants';

export type Props = {
  status: string;
};

const TextStatus: React.FC<Props> = ({status}) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderWidth: 1,
          backgroundColor:
            status === EnumStatus.SUCCESS ? Colors.GREEN : Colors.WHITE,
          borderColor:
            status === EnumStatus.SUCCESS ? Colors.GREEN : Colors.RED,
        },
      ]}>
      <Text
        style={[
          TextStyle.TEXT_14SP_BOLD,
          {
            color: status === EnumStatus.SUCCESS ? Colors.WHITE : Colors.BLACK,
          },
        ]}>
        {status === EnumStatus.SUCCESS ? 'Berhasil' : 'Pengecekan'}
      </Text>
    </View>
  );
};

export default React.memo(TextStatus);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
    padding: 5,
  },
});
