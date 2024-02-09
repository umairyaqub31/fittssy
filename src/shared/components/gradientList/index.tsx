import React from 'react';
import Text from '../text';
import Gradient from '../gradient';
import {FlatList, Pressable, View} from 'react-native';
import {RF} from '@theme';
import {navigate} from '@services';

const GradientList = ({
  data,
  selected,
  setSelected,
}: {
  data?: any;
  selected?: any;
  setSelected?: any;
}) => {
  const onSelect = (item: any, index: any) => {
    setSelected(index);
    if (item == 'Exercise') {
      navigate('Exercise', '');
    } else if (item == 'Workout') {
      navigate('Workout', '');
    } else if (item == 'Workout Plan') {
      navigate('Workout_Plan', '');
    }
  };
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => {
        return (
          <Pressable
            style={{
              justifyContent: 'center',
            }}
            onPress={() => onSelect(item, index)}>
            <Gradient clrs={selected == index ? true : false}>
              <Text
                color={selected == index ? 'white' : 'black'}
                semiBold
                style={{marginLeft: RF(28), marginTop: RF(20)}}>
                {item}
              </Text>
            </Gradient>
          </Pressable>
        );
      }}
    />
  );
};

export default GradientList;
