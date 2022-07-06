import {StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../styles/Colors';
import TextStyle from '../../styles/Text';

export type Props = {
  containerStyle?: ViewStyle;
  value: string;
  onChangeText: (data: string) => void;
};

const InputSearch: React.FC<Props> = ({
  containerStyle,
  value,
  onChangeText,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <IonIcons
        style={{marginRight: 5}}
        name="search"
        size={24}
        color={Colors.GREY}
      />
      <TextInput
        style={[TextStyle.TEXT_14SP_MEDIUM]}
        placeholder={'Cari nama, bank, atau nominal'}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default React.memo(InputSearch);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    paddingRight: 24,
  },
});
