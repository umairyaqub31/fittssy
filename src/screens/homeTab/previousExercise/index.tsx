import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {RF} from '@theme';
import {WorkoutItem, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';

const PreviousExercise = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const handlePressWorkout = (index: any) => {
    console.log(index, 'sssss');
    setSelectedItemIndex(index);
    // navigate('WorkoutDetail', {selectedDate: selected});
  };
  return (
    <View style={{marginTop: RF(10), flex: 1, paddingHorizontal: RF(20)}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5]}
        renderItem={({item, index}) => (
          <WorkoutItem
            selectedItemIndex={selectedItemIndex}
            colors={colors}
            item={item}
            index={index}
            onPress={handlePressWorkout}
          />
        )}
      />
    </View>
  );
};

export default PreviousExercise;
