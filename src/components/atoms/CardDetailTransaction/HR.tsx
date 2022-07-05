import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../../styles/Colors';

export type Props = {};

const TextInfo: React.FC<Props> = props => {
  return <View style={[styles.container]} />;
};

export default React.memo(TextInfo);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.GREY + '50',
    marginBottom: 16,
  },
});
