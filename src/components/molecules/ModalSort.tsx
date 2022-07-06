import React from 'react';
import Modal from 'react-native-modal';
import {Text, View, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {Colors} from '../../styles/Colors';
import TextStyle from '../../styles/Text';
import {EnumSort} from '../../constants';

type Props = {
  value: string;
  isVisible: boolean;
  onClose: () => void;
  onValueChange: (data: string) => void;
};

const ModalFilter: React.FC<Props> = ({
  value,
  isVisible,
  onClose,
  onValueChange,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      useNativeDriver={true}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <View style={styles.container}>
        <RadioButton.Group onValueChange={onValueChange} value={value}>
          <View style={styles.containerRadioButton}>
            <RadioButton
              uncheckedColor={Colors.RED}
              color={Colors.RED}
              value={EnumSort.URUTKAN}
            />
            <Text
              style={[
                TextStyle.TEXT_16SP_MEDIUM,
                {color: Colors.BLACK, marginLeft: 2},
              ]}>
              {EnumSort.URUTKAN}
            </Text>
          </View>
          <View style={styles.containerRadioButton}>
            <RadioButton
              uncheckedColor={Colors.RED}
              color={Colors.RED}
              value={EnumSort.A_Z}
            />
            <Text
              style={[
                TextStyle.TEXT_16SP_MEDIUM,
                {color: Colors.BLACK, marginLeft: 2},
              ]}>
              {EnumSort.A_Z}
            </Text>
          </View>
          <View style={styles.containerRadioButton}>
            <RadioButton
              uncheckedColor={Colors.RED}
              color={Colors.RED}
              value={EnumSort.Z_A}
            />
            <Text
              style={[
                TextStyle.TEXT_16SP_MEDIUM,
                {color: Colors.BLACK, marginLeft: 2},
              ]}>
              {EnumSort.Z_A}
            </Text>
          </View>
          <View style={styles.containerRadioButton}>
            <RadioButton
              uncheckedColor={Colors.RED}
              color={Colors.RED}
              value={EnumSort.NEWEST}
            />
            <Text
              style={[
                TextStyle.TEXT_16SP_MEDIUM,
                {color: Colors.BLACK, marginLeft: 2},
              ]}>
              {EnumSort.NEWEST}
            </Text>
          </View>
          <View style={[styles.containerRadioButton, {marginBottom: 0}]}>
            <RadioButton
              uncheckedColor={Colors.RED}
              color={Colors.RED}
              value={EnumSort.OLDEST}
            />
            <Text
              style={[
                TextStyle.TEXT_16SP_MEDIUM,
                {color: Colors.BLACK, marginLeft: 2},
              ]}>
              {EnumSort.OLDEST}
            </Text>
          </View>
        </RadioButton.Group>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    padding: 16,
    alignContent: 'center',
  },
  containerRadioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
});

export default ModalFilter;
