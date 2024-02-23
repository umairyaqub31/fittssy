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
import BorderGradientCard from '../borderGradientCard';

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
          marginTop: RF(20),
        },
        cardStyle,
      ]}>
      <BorderGradientCard
        colors={
          initialState === item?.heading
            ? colors.gradientCard
            : ['transparent', 'transparent']
        }
        bgColor={
          initialState === item?.heading ? colors.primaryOpacity : colors.card
        }>
        <View style={innerSyle}>
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
            color={
              initialState === item?.heading ? colors.primary : colors.text
            }>
            {item?.heading}
          </Text>
          {item?.desc && (
            <Text
              size={16}
              center
              color={
                initialState === item?.heading
                  ? colors.primary
                  : colors.grayText
              }
              style={margin.top_12}>
              {item?.desc}
            </Text>
          )}
        </View>
      </BorderGradientCard>
    </Pressable>
  );
};

export default GradientCard;

const styles = StyleSheet.create({});
