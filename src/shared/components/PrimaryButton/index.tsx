import React from 'react';
import {RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacityProps, Pressable} from 'react-native';
import {useSelector} from 'react-redux';

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
  const {isLoggedIn} = useSelector((state: any) => state.root.user);

  return (
    <Pressable
      {...otherProps}
      style={[
        styles.button,

        {
          color: textColor,
          marginTop: mt ? mt : RF(10),
          height: height ? height : RF(50),
          width: width ? width : isLoggedIn ? RF(263) : '100%',
          backgroundColor: bgColor
            ? bgColor
            : border
            ? 'white'
            : colors.primary,
          borderWidth: border ? 1 : 0,
          borderColor: border ? theme?.colors?.primary : null,
        },
        containerStyle && containerStyle,
      ]}>
      <Text
        style={[
          styles.medium,
          {
            color: border
              ? theme?.colors?.primary
              : textColor
              ? textColor
              : colors.white,
            fontSize: f_Size ? f_Size : RF(16),
            fontFamily: 'Montserrat-SemiBold',
          },
        ]}>
        {title}
      </Text>
    </Pressable>
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

    // alignSelf: 'center',
  },
  medium: {color: '#fff'},
});
