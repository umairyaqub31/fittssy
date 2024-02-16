import {Image, Pressable, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {flex, margin, RF} from '@theme';
import Text from '../text';
import {useTheme} from '@react-navigation/native';

interface Props {
  width?: any;
  selected?: any;
  title?: any;
  textColor?: any;
  checkboxSize?: any;
  onPress: (title: any) => void;
  textStyle?: any;
  containerStyle?: any;
  activeColor?: any;
  tintColorStart?: any;
  startIcon?: any;
  square?: any;
}

const CheckBox = (props: Props) => {
  const {
    checkboxSize,
    selected,
    title,
    textColor,
    textStyle,
    containerStyle,
    onPress,
    activeColor,
    startIcon,
    tintColorStart,
    square,
  } = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <Pressable
      onPress={() => onPress(title)}
      style={[flex.rowSimple, containerStyle, {width: '100%'}]}>
      <View
        style={{
          height: checkboxSize ? RF(checkboxSize) : RF(22),
          width: checkboxSize ? RF(checkboxSize) : RF(22),
          borderWidth: 1,
          borderColor:
            selected === title || selected === true
              ? colors.primary
              : colors.grayText,
          borderRadius: checkboxSize ? checkboxSize / 2 : square ? 2 : 13,
          justifyContent: 'center',
          backgroundColor: '#fff',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: '60%',
            width: '60%',
            // backgroundColor: colors ? colors : '#00276D',
            backgroundColor:
              selected === title || selected === true
                ? activeColor || (!activeColor && colors.primary)
                : 'transparent',
            borderRadius: square ? 2 : 70,
          }}></View>
      </View>

      {title && (
        <Text
          size={16}
          semiBold
          color={textColor ? textColor : colors.text}
          style={[textStyle]}>
          {title}
        </Text>
      )}
      {startIcon && (
        <TouchableOpacity onPress={onPress}>
          <Image
            source={startIcon}
            style={{
              width: RF(32),
              height: RF(32),
              tintColor: tintColorStart,
            }}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
    </Pressable>
  );
};

export default CheckBox;
