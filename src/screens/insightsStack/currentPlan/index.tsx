import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {BackHeader, BorderGradientCard, Text, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';
import {flex, margin, padding, RF} from '@theme';
import {Pressable} from 'react-native';

const data = [
  {
    id: 0,
    day: 'Day 1',
    dayColor: 'rgba(36, 145, 255, 1)',
    dayCardColor: 'rgba(36, 145, 255, 0.14)',
  },
  {
    id: 2,
    day: 'Day 2',
    dayColor: 'rgba(54, 216, 170, 1)',
    dayCardColor: 'rgba(54, 216, 170, 0.14)',
  },
  {
    id: 3,
    day: 'Day 3',
    dayColor: 'rgba(255, 191, 113, 1)',
    dayCardColor: 'rgba(255, 189, 113, 0.14)',
  },
];

const CurrentPlan = ({route, navigation}: any) => {
  const {item} = route.params;
  const theme: any = useTheme();
  const colors = theme.colors;
  const [selected, setSelected] = useState<any>();

  const handleCard = (item: any) => {
    setSelected(item.id);
    // navigate('CurrentPlan', {item});
  };
  const unselectgradientColor = [colors.white, colors.white, colors.white];

  return (
    <Wrapper isTop>
      <BackHeader title={item.title2} startIcon navigation={navigation} />
      <View style={margin.top_32}>
        <BorderGradientCard colors={colors.gradientCard}>
          <Text size={12} regular center color={colors.grayText}>
            {item.title1}
          </Text>
          <Text
            size={18}
            semiBold
            center
            style={margin.top_12}
            color={colors.text}>
            {item.title2}
          </Text>
        </BorderGradientCard>
        <FlatList
          data={data}
          renderItem={({item}: any) => {
            return (
              <Pressable onPress={() => handleCard(item)}>
                <BorderGradientCard
                  start={{x: 0, y: 0}}
                  end={{x: 0.3, y: 2}}
                  style={styles.gradientCard}
                  colors={
                    selected == item.id
                      ? colors.gradientCard
                      : unselectgradientColor
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
                      color={
                        selected == item.id ? colors.primary : colors.text
                      }>
                      Benji Chest-Back
                    </Text>
                  </View>
                </BorderGradientCard>
              </Pressable>
            );
          }}
        />
      </View>
    </Wrapper>
  );
};

export default CurrentPlan;

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
