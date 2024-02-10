import React from 'react';
import Text from '../text';
import {RF} from '@theme';
import Gradient from '../gradient';
import {navigate} from '@services';
import {FlatList, Pressable, View} from 'react-native';

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
      navigate('WorkOut', '');
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
          <>
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
            <View
              style={{
                height: 1,
                backgroundColor: '#EAEAEA',
                marginHorizontal: RF(20),
              }}
            />
          </>
        );
      }}
    />
  );
};

export default GradientList;
