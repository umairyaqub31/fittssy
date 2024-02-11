import {
  ImageBackground,
  Pressable,
  PressableProps,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {margin, RF} from '@theme';
import Text from '../text';
import {gradientFlex, unSelect} from '@assets';
import {useTheme} from '@react-navigation/native';

interface Props extends PressableProps {
  initialState?: any;
  item?: any;
}

const GradientCard = (props: Props) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const {initialState, item} = props;
  return (
    <Pressable
      {...props}
      style={{
        height: RF(106),
        width: '100%',
        marginBottom: RF(20),
      }}>
      <ImageBackground
        source={initialState === item?.heading ? gradientFlex : unSelect}
        imageStyle={{
          height: '100%',
          resizeMode: 'stretch',
        }}
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          //   backgroundColor: colors.card,
          borderRadius: RF(16),
        }}>
        <Text
          size={20}
          semiBold
          color={initialState === item?.heading ? colors.primary : colors.text}>
          {item?.heading}
        </Text>
        <Text
          size={16}
          center
          color={
            initialState === item?.heading ? colors.primary : colors.grayText
          }
          style={margin.top_12}>
          {item?.desc}
        </Text>
      </ImageBackground>
    </Pressable>
  );
};

export default GradientCard;

const styles = StyleSheet.create({});
