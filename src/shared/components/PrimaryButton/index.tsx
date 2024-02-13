import React from 'react';
import {RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text, View, TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  mt?: any;
  border?: any;
  title?: any;
  width?: any;
  height?: any;
  f_Size?: any;
  f_Weight?: any;
  bgColor?: any;
  disabled?: any;
  textColor?: any;
  containerStyle?: any;
}
const PrimaryButton = (props: Partial<Props>) => {
  const {
    mt,
    border,
    title,
    width,
    f_Size,
    f_Weight,
    height,
    bgColor,
    disabled,
    textColor,
    containerStyle,
    ...otherProps
  } = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <View
      style={[
        styles.button,
        containerStyle && containerStyle,
        {
          color: textColor,
          fontSize: f_Size ? f_Size : RF(16),
          fontWeight: f_Weight ? f_Weight : '600',
          marginTop: mt ? mt : RF(10),

          height: height ? height : RF(50),
          width: width ? RF(width) : '100%',
          backgroundColor: bgColor
            ? bgColor
            : border
            ? 'white'
            : colors.primary,
          borderWidth: border ? 1 : 0,
          borderColor: border ? theme?.colors?.primary : null,
        },
      ]}>
      <Text
        {...otherProps}
        style={[
          styles.medium,
          {
            color: border ? theme?.colors?.primary : textColor,
            fontSize: f_Size ? f_Size : RF(16),
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 34,
    alignSelf: 'center',
  },
  medium: {color: '#fff'},
});
