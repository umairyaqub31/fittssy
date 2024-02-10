import {Image, Pressable, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Progress from 'react-native-progress';
import {back} from '@assets';
import useStyles from './styles';
import {bar_props} from './props';
import {flex, icon, margin, RF} from '@theme';
import {
  Content,
  SelectAge,
  SelectCard,
  SelectGender,
  SelectHeight,
  SelectWeight,
  Text,
  Wrapper,
} from '@components';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {data, data2, data3} from '@utils';
import {setGetStartedData} from '@redux';

const GetInformation = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(0);
  const [workout, setWorkout] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [goal, setGoal] = useState('');

  const {getStartedData} = useSelector((state: any) => state.root.general);

  useEffect(() => {
    console.log(currentStep, '........currentStep');
    if (getStartedData) {
      setTimeout(() => {
        setCurrentStep(parseFloat((currentStep + 0.09).toFixed(2))); // Round to one decimal place
      }, 500);
    }
  }, [getStartedData]);

  const handleBack = () => {
    setCurrentStep(parseFloat((currentStep - 0.09).toFixed(2)));
  };

  const usuallyWorkout = (title: any) => {
    setWorkout(title);
    dispatch(setGetStartedData({...getStartedData, usuallyWorkout: title}));
  };

  const currentLevel = (title: any) => {
    setFitnessLevel(title);
    dispatch(setGetStartedData({...getStartedData, fitnessLevel: title}));
  };
  const yourGoal = (title: any) => {
    setGoal(title);
    dispatch(setGetStartedData({...getStartedData, yourGoal: title}));
  };
  const handleContent = (title: any) => {
    setGoal(title);
    dispatch(setGetStartedData({...getStartedData, yourGoal: title}));
  };

  console.log(getStartedData, '........currentStep');

  return (
    <Wrapper isTop>
      <View style={flex.rowSimple}>
        <Pressable onPress={handleBack}>
          <Image source={back} style={[icon._16, {tintColor: colors.text}]} />
        </Pressable>
        <Progress.Bar {...bar_props(colors, styles, currentStep)} />
      </View>
      {currentStep == 0 && <SelectGender />}
      {currentStep == 0.09 && <SelectAge />}
      {currentStep == 0.18 && <SelectHeight />}
      {currentStep == 0.27 && <SelectWeight />}
      {currentStep == 0.36 && (
        <>
          <SelectCard
            title={'Where do you usually workout?'}
            data={data}
            onPress={usuallyWorkout}
            initialState={workout}
          />
        </>
      )}
      {currentStep == 0.45 && (
        <>
          <SelectCard
            title={'What’s you current level of fitness?'}
            data={data2}
            onPress={currentLevel}
            initialState={fitnessLevel}
          />
        </>
      )}
      {currentStep == 0.54 && (
        <>
          <SelectCard
            title={'What’s your top goal?'}
            data={data3}
            onPress={yourGoal}
            initialState={goal}
          />
        </>
      )}
      {currentStep == 0.63 && (
        <>
          <Content
            onPress={handleContent}
            desc_1={'Building a habit is a key to building a muscle'}
            desc_2={
              'Fittssy helps you build a workout habit by giving you an easy way to track your workouts and by showing you all the progress that you are making․'
            }
          />
        </>
      )}
      {/* {currentStep == 0.72 && (
        <>
          <SelectCard
            title={'Tracking is Key, but you’ll need a workout plan'}
            data={data3}
            onPress={handleSelect}
            initialState={select}
          />
        </>
      )} */}
      {/* {currentStep == 0.81 && (
        <>
          <Text onPress={() => handleSelect}>0.81</Text>
        </>
      )} */}
      {/* {currentStep == 0.91 && (
        <>
          <Text onPress={() => handleSelect}>0.90</Text>
        </>
      )} */}
      {/* {currentStep == 1 && (
        <>
          <Text onPress={() => handleSelect}>1</Text>
        </>
      )} */}
    </Wrapper>
  );
};

export default GetInformation;
