import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {
  BackHeader,
  BorderGradientCard,
  CurrentPlanCard,
  Text,
  Wrapper,
} from '@components';
import {useTheme} from '@react-navigation/native';
import {margin, RF} from '@theme';
import {currentPlanData} from '@utils';
import {navigate} from '@services';

const CurrentPlan = ({route, navigation}: any) => {
  const {item} = route.params;
  const theme: any = useTheme();
  const colors = theme.colors;
  const [selected, setSelected] = useState<any>();

  const handleCard = (item: any) => {
    setSelected(item.id);
    navigate('WorkoutPlanDetail', {item: item});
  };
  return (
    <Wrapper>
      <BackHeader title={item.title2} startIcon navigation={navigation} />
      <View style={margin.top_32}>
        <BorderGradientCard
          colors={colors.gradientCard}
          bgColor={colors.background}>
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
          data={currentPlanData}
          renderItem={({item}: any) => {
            return (
              <CurrentPlanCard
                item={item}
                selected={selected}
                onPress={handleCard}
              />
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
