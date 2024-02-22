import {
  FlatList,
  ImageBackground,
  PressableProps,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {margin, padding, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import Text from '../../text';
import GradientCard from '../../gradientCard';

interface Props extends PressableProps {
  data?: any;
  title?: any;
  desc_2?: any;
  onPress?: (title: any) => void;
  initialState?: any;
  noFlatList?: any;
  cardStyle?: any;
  innerSyle?: any;
}

const SelectCard = (props: Props) => {
  const {
    data,
    innerSyle,
    noFlatList,
    cardStyle,
    desc_2,
    title,
    initialState,
    onPress,
  } = props;
  const theme: any = useTheme();
  const colors = theme.colors;

  return (
    <>
      <Text size={24} semiBold center style={margin.top_56}>
        {title}
      </Text>
      {desc_2 && (
        <Text size={13} center style={[margin.top_16]} color={colors.grayText}>
          {desc_2}
        </Text>
      )}
      {noFlatList ? null : (
        <FlatList
          data={data}
          contentContainerStyle={[margin.Vertical_20, {paddingBottom: 180}]}
          renderItem={({item}: any) => {
            return (
              <GradientCard
                {...props}
                cardStyle={cardStyle}
                innerSyle={innerSyle}
                onPress={() => onPress && onPress(item.heading)}
                item={item}
                initialState={initialState}
              />
            );
          }}
        />
      )}
    </>
  );
};

export default SelectCard;

const styles = StyleSheet.create({
  linearGradient: {
    height: RF(106),
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'rgba(54, 216, 170, 0.12)',
    opacity: 0.3,
  },
});
