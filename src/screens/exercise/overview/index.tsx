import React from 'react';
import {next} from '@assets';
import {navigate} from '@services';
import {ScrollView} from 'react-native';
import {BackHeader, CustomInput, DropDown, PrimaryButton} from '@components';

const Exercise = ({navigation}: any) => {
  const onOpen = (title: any, type: any) => {
    if (type == 'category') {
      navigate('SearchExercise', {title: title});
    } else if (type == 'type') {
      navigate('SearchExercise', {title: title});
    } else if (type == 'weight') {
      navigate('SearchExercise', {title: title});
    }
  };

  return (
    <>
      <BackHeader title={'Create New Exercise'} navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomInput label="Name" placeHolder={'Exercise Set 1'} />

        <CustomInput
          label="Notes (Optional)"
          placeHolder={'Lorem ipsum dolor sit amet consec...'}
        />

        <DropDown
          endIcon={next}
          label="Category"
          title={'Select Category'}
          onPress={(title?: any) => onOpen(title, 'category')}
        />
        <DropDown
          label="Type"
          title={'Select Type'}
          endIcon={next}
          onPress={(title?: any) => onOpen(title, 'type')}
        />
        <DropDown
          endIcon={next}
          label="Weight Unit"
          title={'Select Weight Unit'}
          onPress={(title?: any) => onOpen(title, 'weight')}
        />

        <PrimaryButton title={'Save'} width={263} textColor={'white'} mt={50} />
      </ScrollView>
    </>
  );
};

export default Exercise;
