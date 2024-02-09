import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {RF} from '@theme';
import {useTheme} from '@react-navigation/native';

interface Props extends TouchableOpacityProps {
  title?: any;
  bgColor?: any;
  textColor?: any;
  height?: any;
  width?: any;
  disabled?: any;
  f_Size?: any;
  containerStyle?: any;
}
const PrimaryButton = (props: Props) => {
  const {
    title,
    height,
    disabled,
    textColor,
    bgColor,
    f_Size,
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
          height: height ? height : RF(50),
          backgroundColor: bgColor ? bgColor : colors.primary,
        },
      ]}>
      <Text
        {...otherProps}
        style={[
          styles.medium,
          {
            color: textColor,
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
    // backgroundColor: primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 34,
  },
  medium: {color: '#fff', fontWeight: '600'},
});
