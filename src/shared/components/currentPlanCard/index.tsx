import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {BackHeader, BorderGradientCard, Text, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';
import {flex, margin, padding, RF} from '@theme';
import {Pressable} from 'react-native';

interface Props {
  onPress: (i: any) => void;
  item?: any;
  selected?: any;
}

const CurrentPlanCard = (props: Props) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const {onPress, item, selected} = props;
  const unselectgradientColor = [
    colors.background,
    colors.background,
    colors.background,
  ];

  return (
    <Pressable onPress={() => onPress(item)}>
      <BorderGradientCard
        start={{x: 0, y: 0}}
        end={{x: 0.3, y: 2}}
        style={styles.gradientCard}
        bgColor={colors.background}
        colors={
          selected == item.id ? colors.gradientCard : unselectgradientColor
        }>
        <View style={[flex.row, padding.left_12]}>
          <View
            style={[
              styles.dayCard,
              {
                backgroundColor: item.dayCardColor,
                borderColor: item.dayColor,
              },
            ]}>
            <Text semiBold color={item.dayColor}>
              {item.day}
            </Text>
          </View>
          <Text
            size={16}
            semiBold
            color={selected == item.id ? colors.primary : colors.text}>
            {item.title}
          </Text>
        </View>
      </BorderGradientCard>
    </Pressable>
  );
};

export default CurrentPlanCard;

const styles = StyleSheet.create({
  gradientCard: {
    height: RF(80),
    borderRadius: 16,
    marginTop: 20,
  },
  dayCard: {
    height: RF(55),
    width: RF(55),
    borderRadius: 8,
    borderWidth: 1,
    marginRight: RF(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
