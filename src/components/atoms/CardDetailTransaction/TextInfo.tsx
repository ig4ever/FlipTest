import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../../styles/Colors';
import TextStyle from '../../../styles/Text';

export type Props = {
  label: string;
  value: string;
};

const TextInfo: React.FC<Props> = ({label, value}) => {
  return (
    <View style={[styles.container]}>
      <Text style={[TextStyle.TEXT_14SP_BOLD, {color: Colors.BLACK}]}>
        {label}
      </Text>
      <Text style={[TextStyle.TEXT_14SP, {color: Colors.BLACK}]}>{value}</Text>
    </View>
  );
};

export default React.memo(TextInfo);

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});
