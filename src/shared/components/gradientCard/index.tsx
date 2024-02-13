import {
  ImageBackground,
  Pressable,
  PressableProps,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {flex, margin, RF} from '@theme';
import Text from '../text';
import {gradientFlex, unSelect} from '@assets';
import {useTheme} from '@react-navigation/native';

interface Props extends PressableProps {
  initialState?: any;
  cardStyle?: any;
  innerSyle?: any;
  item?: any;
}

const GradientCard = (props: Props) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const {initialState, innerSyle, cardStyle, item} = props;
  return (
    <Pressable
      {...props}
      style={[
        {
          height: RF(106),
          width: '100%',
          marginBottom: RF(20),
        },
        cardStyle,
      ]}>
      <ImageBackground
        source={initialState === item?.heading ? gradientFlex : unSelect}
        imageStyle={{
          height: '100%',
          resizeMode: 'stretch',
        }}
        style={[
          {
            height: '100%',
            justifyContent: 'center',
            borderRadius: RF(16),
          },
          innerSyle,
        ]}>
        {item?.cat && (
          <View style={[flex.rowSimple, margin.bottom_8]}>
            <Text
              color={
                initialState === item?.heading
                  ? colors.primary
                  : colors.grayText
              }>
              {item?.cat}
            </Text>
            <View
              style={{
                height: RF(16),
                borderLeftWidth: 1,
                borderColor:
                  initialState === item?.heading
                    ? colors.primary
                    : colors.grayText,
                marginHorizontal: RF(8),
              }}
            />
            <Text
              color={
                initialState === item?.heading
                  ? colors.primary
                  : colors.grayText
              }>
              {item?.days}
            </Text>
          </View>
        )}
        <Text
          size={item?.cat ? 16 : 20}
          semiBold
          center
          color={initialState === item?.heading ? colors.primary : colors.text}>
          {item?.heading}
        </Text>
        {item?.desc && (
          <Text
            size={16}
            center
            color={
              initialState === item?.heading ? colors.primary : colors.grayText
            }
            style={margin.top_12}>
            {item?.desc}
          </Text>
        )}
      </ImageBackground>
    </Pressable>
  );
};

export default GradientCard;

const styles = StyleSheet.create({});
