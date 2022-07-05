import React from 'react';
import Modal from 'react-native-modal';
import {Text, View, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {Colors} from '../../styles/Colors';
import TextStyle from '../../styles/Text';
import {EnumFilter} from '../../constants';

type Props = {
  value: string;
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (data: string) => void;
};

const ModalFilter: React.FC<Props> = ({
  value,
  isVisible,
  onClose,
  onSubmit,
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
        <RadioButton.Group
          onValueChange={newValue => onSubmit(newValue)}
          value={value}>
          <View style={styles.containerRadioButton}>
            <RadioButton
              uncheckedColor={Colors.RED}
              color={Colors.RED}
              value={EnumFilter.URUTKAN}
            />
            <Text
              style={[
                TextStyle.TEXT_16SP_MEDIUM,
                {color: Colors.BLACK, marginLeft: 2},
              ]}>
              Urutkan
            </Text>
          </View>
          <View style={styles.containerRadioButton}>
            <RadioButton
              uncheckedColor={Colors.RED}
              color={Colors.RED}
              value={EnumFilter.A_Z}
            />
            <Text
              style={[
                TextStyle.TEXT_16SP_MEDIUM,
                {color: Colors.BLACK, marginLeft: 2},
              ]}>
              Nama A-Z
            </Text>
          </View>
          <View style={styles.containerRadioButton}>
            <RadioButton
              uncheckedColor={Colors.RED}
              color={Colors.RED}
              value={EnumFilter.Z_A}
            />
            <Text
              style={[
                TextStyle.TEXT_16SP_MEDIUM,
                {color: Colors.BLACK, marginLeft: 2},
              ]}>
              Nama Z-A
            </Text>
          </View>
          <View style={styles.containerRadioButton}>
            <RadioButton
              uncheckedColor={Colors.RED}
              color={Colors.RED}
              value={EnumFilter.NEWEST}
            />
            <Text
              style={[
                TextStyle.TEXT_16SP_MEDIUM,
                {color: Colors.BLACK, marginLeft: 2},
              ]}>
              Tanggal Terbaru
            </Text>
          </View>
          <View style={[styles.containerRadioButton, {marginBottom: 0}]}>
            <RadioButton
              uncheckedColor={Colors.RED}
              color={Colors.RED}
              value={EnumFilter.OLDER}
            />
            <Text
              style={[
                TextStyle.TEXT_16SP_MEDIUM,
                {color: Colors.BLACK, marginLeft: 2},
              ]}>
              Tanggal Terlama
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
