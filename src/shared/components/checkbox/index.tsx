import {Image, Pressable, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {flex, margin, RF} from '@theme';
import Text from '../text';
import {useTheme} from '@react-navigation/native';

interface Props {
  width?: any;
  height?: any;
  selected?: any;
  title?: any;
  textColor?: any;
  checkboxSize?: any;
  onPress?: (title: any) => void;
  renderContent?: any;
  textStyle?: any;
  containerStyle?: any;
  activeColor?: any;
  tintColorStart?: any;
  startIcon?: any;
  square?: any;
  f_size?: any;
  f_weight?: any;
  bgColor?: any;
  contentContainerStyle?: any;
  disabled?: any;
  item?: any;
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
    f_size,
    f_weight,
    width,
    height,
    bgColor,
    renderContent,
    contentContainerStyle,
    disabled,
    item,
  } = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <Pressable
      disabled={disabled}
      onPress={() => onPress && onPress(title)}
      style={[flex.rowSimple, containerStyle]}>
      <View
        style={{
          height: checkboxSize ? RF(checkboxSize) : RF(22),
          width: checkboxSize ? RF(checkboxSize) : RF(22),
          borderWidth: 1,

          borderColor:
            selected === title || selected === true || selected === item
              ? colors.primary
              : colors.grayText,
          borderRadius: checkboxSize ? checkboxSize / 2 : square ? 2 : 13,
          justifyContent: 'center',
          backgroundColor: bgColor ? bgColor : colors.background,
          alignItems: 'center',
        }}>
        <View
          style={{
            height: '60%',
            width: '60%',
            // backgroundColor: colors ? colors : '#00276D',
            backgroundColor:
              selected === title || selected === true || selected === item
                ? activeColor || (!activeColor && colors.primary)
                : 'transparent',
            borderRadius: square ? 2 : 70,
          }}></View>
      </View>

      {renderContent && (
        <View style={[{flex: 1}, contentContainerStyle]}>
          {renderContent()}
        </View>
      )}
      {title && (
        <Text
          size={f_size}
          regular={f_weight == '500' ? true : false}
          semiBold={f_weight == '600' ? true : false}
          thin={f_weight == '400' ? true : false}
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
              width: width ? width : RF(32),
              height: height ? height : RF(32),
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
