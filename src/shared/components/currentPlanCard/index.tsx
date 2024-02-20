import {FlatList, StyleSheet, View, Image} from 'react-native';
import React, {useState} from 'react';
import {BackHeader, BorderGradientCard, Text, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';
import {flex, icon, margin, padding, RF} from '@theme';
import {Pressable} from 'react-native';
import {dots} from '@assets';

interface Props {
  onPress: (i: any) => void;
  onDotPress?: () => void;
  item?: any;
  selected?: any;
  renderDesc?: any;
  dotsIcon?: any;
}

const CurrentPlanCard = (props: Props) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const {onPress, item, selected, renderDesc, dotsIcon, onDotPress} = props;
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
          <View>
            <Text
              size={16}
              semiBold
              color={selected == item.id ? colors.primary : colors.text}>
              {item.title}
            </Text>
            {renderDesc && <View>{renderDesc()}</View>}
          </View>
        </View>
        {dotsIcon && (
          <Pressable
            onPress={() => onDotPress && onDotPress()}
            style={styles.dotsView}>
            <Image source={dots} style={icon._20} />
          </Pressable>
        )}
      </BorderGradientCard>
    </Pressable>
  );
};

export default CurrentPlanCard;

const styles = StyleSheet.create({
  gradientCard: {
    height: RF(80),
    borderRadius: 16,
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
  dotsView: {
    position: 'absolute',
    right: RF(15),
    top: RF(15),
    height: 50,
    alignItems: 'flex-end',
    width: 30,
    alignSelf: 'center',
  },
});
