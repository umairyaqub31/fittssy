import React, {useState} from 'react';
import {next} from '@assets';
import {navigate} from '@services';
import {ScrollView, View} from 'react-native';
import {
  BackHeader,
  CustomInput,
  DropDown,
  PrimaryButton,
  Wrapper,
} from '@components';
import {useTheme} from '@react-navigation/native';
import {WeightUnit, category, typeData} from '@utils';

const Exercise = ({navigation}: any) => {
  const theme: any = useTheme();
  const colors: any = theme.colors;
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedWeightUnit, setSelectedWeightUnit] = useState('');

  console.log('selectedCategory........', selectedCategory);

  const updateState = (type: any, value: any) => {
    console.log('prev........', type, value);
    if (type == 'Select Category') {
      setSelectedCategory(value);
    }

    if (type == 'Select Type') {
      setSelectedType(value);
    }

    if (type == 'Select Weight Unit') {
      setSelectedWeightUnit(value);
    }
  };

  const onOpen = (title: any, type: any) => {
    if (type == 'category') {
      navigate('SearchExercise', {
        title: title,
        data: category,
        updateState: (type: any, value: any) => updateState(type, value),
      });
    } else if (type == 'type') {
      navigate('SearchExercise', {
        title: title,
        data: typeData,
        updateState: (type: any, value: any) => updateState(type, value),
      });
    } else if (type == 'weight') {
      navigate('SearchExercise', {
        title: title,
        data: WeightUnit,
        updateState: (type: any, value: any) => updateState(type, value),
      });
    }
  };

  return (
    <Wrapper>
      <BackHeader
        title={'Create New Exercise'}
        startIcon
        navigation={navigation}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomInput
          label="Name"
          placeHolder={'Exercise Set 1'}
          placeholderTextColor={colors.text}
        />

        <CustomInput
          label="Notes (Optional)"
          placeHolder={'Lorem ipsum dolor sit amet consec...'}
          placeholderTextColor={colors.text}
        />

        <DropDown
          endIcon={next}
          label="Category"
          title={'Select Category'}
          value={selectedCategory}
          tintColor={colors.text}
          onPress={(title?: any) => onOpen(title, 'category')}
        />
        <DropDown
          label="Type"
          title={'Select Type'}
          value={selectedType}
          endIcon={next}
          tintColor={colors.text}
          onPress={(title?: any) => onOpen(title, 'type')}
        />
        <DropDown
          endIcon={next}
          label="Weight Unit"
          title={'Select Weight Unit'}
          value={selectedWeightUnit}
          tintColor={colors.text}
          onPress={(title?: any) => onOpen(title, 'weight')}
        />

        <View style={{alignItems: 'center'}}>
          <PrimaryButton
            title={'Save'}
            width={263}
            textColor={'white'}
            mt={50}
          />
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default Exercise;
