import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../../styles/Colors';
import TextStyle from '../../../styles/Text';
import {EnumStatus} from '../../../constants';

export type Props = {
  name: string;
  status: string;
};

const TextName: React.FC<Props> = ({name, status}) => {
  return (
    <View style={[styles.container]}>
      <Text style={[TextStyle.TEXT_16SP_MEDIUM, {color: Colors.BLACK}]}>
        {status === EnumStatus.PENDING && '- '}
        {name?.toUpperCase()}
      </Text>
    </View>
  );
};

export default React.memo(TextName);

const styles = StyleSheet.create({
  container: {
    marginBottom: 2,
  },
});
