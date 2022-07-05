import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {Colors} from '../styles/Colors';
import CardDetailTransaction from '../components/molecules/CardDetailTransaction';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import Clipboard from '@react-native-community/clipboard';

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'TransactionDetailScreen'
>;

export type Props = {
  navigation: NavigationProp;
  route: any;
};

const TransactionDetail: React.FC<Props> = ({route, navigation}) => {
  const onClose = () => {
    navigation.goBack();
  };

  const onCopy = (text: string) => {
    Clipboard.setString(text);
  };

  return (
    <View style={styles.container}>
      <CardDetailTransaction
        data={route?.params?.data}
        onClose={onClose}
        onCopy={onCopy}
      />
    </View>
  );
};

export default TransactionDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE_BACKGROUND,
  },
});
