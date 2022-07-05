import {StyleSheet, TextStyle, View} from 'react-native';

interface Styles {
  TEXT_10SP: TextStyle;
  TEXT_12SP: TextStyle;
  TEXT_14SP: TextStyle;
  TEXT_16SP: TextStyle;
  TEXT_18SP: TextStyle;
  TEXT_20SP: TextStyle;
  TEXT_10SP_MEDIUM: TextStyle;
  TEXT_12SP_MEDIUM: TextStyle;
  TEXT_14SP_MEDIUM: TextStyle;
  TEXT_16SP_MEDIUM: TextStyle;
  TEXT_18SP_MEDIUM: TextStyle;
  TEXT_20SP_MEDIUM: TextStyle;
  TEXT_10SP_BOLD: TextStyle;
  TEXT_12SP_BOLD: TextStyle;
  TEXT_14SP_BOLD: TextStyle;
  TEXT_16SP_BOLD: TextStyle;
  TEXT_18SP_BOLD: TextStyle;
  TEXT_20SP_BOLD: TextStyle;
  TEXT_24SP_BOLD: TextStyle;
  TEXT_36SP_BOLD: TextStyle;
  TEXT_40SP_BOLD: TextStyle;
}

const FontStyle = {
  RobotoRegular: 'Roboto',
  RobotoMedium: 'Roboto-Medium',
  RobotoBold: 'Roboto-Bold',
};

export const Text = StyleSheet.create<Styles>({
  TEXT_10SP: {
    fontSize: 10,
    fontFamily: FontStyle.RobotoRegular,
    lineHeight: 14,
    fontWeight: '200',
  },
  TEXT_12SP: {
    fontSize: 12,
    fontFamily: FontStyle.RobotoRegular,
    lineHeight: 16,
    fontWeight: '200',
  },
  TEXT_14SP: {
    fontSize: 14,
    fontFamily: FontStyle.RobotoRegular,
    lineHeight: 18,
    fontWeight: '200',
  },
  TEXT_16SP: {
    fontSize: 16,
    fontFamily: FontStyle.RobotoRegular,
    lineHeight: 20,
    fontWeight: '200',
  },
  TEXT_18SP: {
    fontSize: 18,
    fontFamily: FontStyle.RobotoRegular,
    lineHeight: 22,
  },
  TEXT_20SP: {
    fontSize: 20,
    fontFamily: FontStyle.RobotoRegular,
    lineHeight: 24,
    fontWeight: '200',
  },
  TEXT_10SP_MEDIUM: {
    fontSize: 10,
    fontFamily: FontStyle.RobotoMedium,
    lineHeight: 14,
    fontWeight: '500',
  },
  TEXT_12SP_MEDIUM: {
    fontSize: 12,
    fontFamily: FontStyle.RobotoMedium,
    lineHeight: 16,
    fontWeight: '500',
  },
  TEXT_14SP_MEDIUM: {
    fontSize: 14,
    fontFamily: FontStyle.RobotoMedium,
    lineHeight: 18,
    fontWeight: '500',
  },
  TEXT_16SP_MEDIUM: {
    fontSize: 16,
    fontFamily: FontStyle.RobotoMedium,
    lineHeight: 20,
    fontWeight: '500',
  },
  TEXT_18SP_MEDIUM: {
    fontSize: 18,
    fontFamily: FontStyle.RobotoMedium,
    lineHeight: 22,
    fontWeight: '500',
  },
  TEXT_20SP_MEDIUM: {
    fontSize: 20,
    fontFamily: FontStyle.RobotoMedium,
    lineHeight: 24,
    fontWeight: '500',
  },
  TEXT_10SP_BOLD: {
    fontSize: 10,
    fontFamily: FontStyle.RobotoBold,
    lineHeight: 14,
    fontWeight: 'bold',
  },
  TEXT_12SP_BOLD: {
    fontSize: 12,
    fontFamily: FontStyle.RobotoBold,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  TEXT_14SP_BOLD: {
    fontSize: 14,
    fontFamily: FontStyle.RobotoBold,
    lineHeight: 18,
    fontWeight: 'bold',
  },
  TEXT_16SP_BOLD: {
    fontSize: 16,
    fontFamily: FontStyle.RobotoBold,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  TEXT_18SP_BOLD: {
    fontSize: 18,
    fontFamily: FontStyle.RobotoBold,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  TEXT_20SP_BOLD: {
    fontSize: 20,
    fontFamily: FontStyle.RobotoBold,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  TEXT_24SP_BOLD: {
    fontSize: 24,
    fontFamily: FontStyle.RobotoBold,
    lineHeight: 28,
    fontWeight: 'bold',
  },
  TEXT_36SP_BOLD: {
    fontSize: 36,
    fontFamily: FontStyle.RobotoBold,
    lineHeight: 40,
    fontWeight: 'bold',
  },
  TEXT_40SP_BOLD: {
    fontSize: 40,
    fontFamily: FontStyle.RobotoBold,
    lineHeight: 44,
    fontWeight: 'bold',
  },
});

export default Text;
