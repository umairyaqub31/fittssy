import {
  TextProps,
  StyleProp,
  TextStyle,
  StyleSheet,
  Text as RNText,
} from 'react-native';
import React from 'react';
import {RF} from '@theme';
import {useTheme} from '@react-navigation/native';

interface Props extends TextProps {
  top?: any;
  bold?: any;
  size?: any;
  right?: any;
  align?: any;
  color?: any;
  bolder?: any;
  center?: any;
  medium?: any;
  boldest?: any;
  regular?: any;
  semiBold?: any;
  belowLine?: any;
  medium_italic?: any;
  onPress?: () => void;
  regular_italic?: any;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
}
const Text = (props: Partial<Props>) => {
  const {
    top,
    bold,
    size,
    right,
    style,
    color,
    align,
    center,
    bolder,
    medium,
    boldest,
    onPress,
    regular,
    semiBold,
    numberOfLines,
    belowLine,
    regular_italic,
    medium_italic,
  } = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <RNText
      {...props}
      onPress={onPress}
      allowFontScaling={false}
      numberOfLines={numberOfLines && numberOfLines}
      style={[
        styles.text,
        bold && styles.bold,
        right && styles.right,
        center && styles.center,
        bolder && styles.bolder,
        medium && styles.medium,
        boldest && styles.boldest,
        regular && styles.regular,
        semiBold && styles.semiBold,
        top && {marginTop: RF(25)},
        size && {fontSize: RF(size)},
        align && {textAlign: 'center'},
        medium_italic && styles.medium_italic,
        regular_italic && styles.regular_italic,
        belowLine && {textDecorationLine: 'underline'},
        {color: color ? color : colors.text},
        style,
      ]}>
      {props.children}
    </RNText>
  );
};
export default Text;

const styles = StyleSheet.create({
  text: {
    fontSize: RF(13),
    top: 1,
    fontFamily: 'Poppins-Regular',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  regular: {
    fontSize: RF(12),
    top: 1,
    fontFamily: 'Poppins-Regular',
  },
  medium: {
    fontFamily: 'Poppins-Medium',
  },
  medium_italic: {
    fontFamily: '500',
  },
  semiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
  bolder: {
    fontFamily: '800',
  },
  boldest: {
    fontFamily: '900',
  },
  regular_italic: {
    fontFamily: '900',
  },
});
