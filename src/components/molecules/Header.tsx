import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {Colors} from '../../styles/Colors';
import ButtonFilter from '../atoms/ButtonFilter';
import InputSearch from '../atoms/InputSearch';

export type Props = {
  value: string;
  sortName: string;
  onChangeText: (data: string) => void;
  onPress: () => void;
};
const Header: React.FC<Props> = ({value, sortName, onChangeText, onPress}) => {
  return (
    <View style={styles.container}>
      <InputSearch
        containerStyle={{flex: 3}}
        onChangeText={onChangeText}
        value={value}
      />
      <ButtonFilter
        containerStyle={{flex: 1}}
        sortName={sortName}
        onPress={onPress}
      />
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
