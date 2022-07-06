import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import TextStyle from '../../styles/Text';
import Ripple from 'react-native-material-ripple';
import {Colors} from '../../styles/Colors';
import IonIcons from 'react-native-vector-icons/Ionicons';

export type Props = {
  containerStyle?: ViewStyle;
  sortName: string;
  onPress?: (data?: any) => void;
};

const ButtonFilter: React.FC<Props> = ({containerStyle, sortName, onPress}) => {
  return (
    <View style={[styles.containerButton, containerStyle]}>
      <Ripple
        rippleCentered
        rippleContainerBorderRadius={100}
        style={styles.button}
        onPress={onPress}>
        <Text
          style={[
            TextStyle.TEXT_14SP_BOLD,
            {color: Colors.RED, marginRight: 2},
          ]}>
          {sortName}
        </Text>
        <IonIcons name="chevron-down" color={Colors.RED} size={24} />
      </Ripple>
    </View>
  );
};

export default React.memo(ButtonFilter);

const styles = StyleSheet.create({
  containerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
