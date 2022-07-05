import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../styles/Colors';
import TextStyle from '../../../styles/Text';
import {TypeTransaction} from '../../../types/Transaction';

type Props = {
  data: TypeTransaction;
  onPress: (data: string) => void;
  onClose: () => void;
};

const Header: React.FC<Props> = ({data, onPress, onClose}) => {
  return (
    <View>
      <View style={styles.childContainer1}>
        <Text
          style={[
            TextStyle.TEXT_14SP_BOLD,
            {color: Colors.BLACK, marginRight: 10},
          ]}>
          ID TRANSAKSI: #{data?.id}
        </Text>
        <TouchableOpacity onPress={() => onPress(data?.id)}>
          <Ionicons name="copy-outline" size={20} color={Colors.RED} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  childContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    marginBottom: 2,
    backgroundColor: Colors.WHITE,
  },
});
