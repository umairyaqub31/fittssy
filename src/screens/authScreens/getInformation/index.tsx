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
import {useFocusEffect, useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {data, data2, data3, data4, data5, data6} from '@utils';
import {setGetStartedData, setInfo} from '@redux';
import {navigate} from '@services';

const GetInformation = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(0);
  const [workout, setWorkout] = useState('');
  const [workoutPlan, setWorkoutPlan] = useState('');
  const [track, setTrack] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [goal, setGoal] = useState('');
  const [plan, setPlan] = useState('');

  const {getStartedData} = useSelector((state: any) => state.root.general);

  useEffect(() => {
    console.log(currentStep, '........currentStep');
    if (getStartedData && currentStep !== 0.99) {
      setTimeout(() => {
        setCurrentStep(parseFloat((currentStep + 0.09).toFixed(2)));
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

  const hadleTracking = (title: any) => {
    setTrack(title);
    dispatch(setGetStartedData({...getStartedData, trackKey: title}));
  };
  const handleContent = (title: any) => {
    console.log('sssssss');

    if (currentStep == 0.9) {
      setWorkoutPlan(title);
      dispatch(setGetStartedData({...getStartedData, daysPerWeek: title}));
    }
    setTimeout(() => {
      setCurrentStep(parseFloat((currentStep + 0.09).toFixed(2))); // Round to one decimal place
    }, 500);
  };

  const handlePlan = (title: any) => {
    setPlan(title);
    setCurrentStep(currentStep);
    dispatch(setGetStartedData({...getStartedData, workoutPlan: title}));
    dispatch(setInfo('completed'));
    navigate('Register', '');
  };

  console.log(currentStep, '........currentStep');

  return (
    <Wrapper>
      <View style={flex.rowSimple}>
        <Pressable
          style={{
            height: RF(25),
            width: RF(25),
            justifyContent: 'center',
          }}
          onPress={handleBack}>
          <Image source={back} style={[icon._16, {tintColor: colors.text}]} />
        </Pressable>
        <Progress.Bar {...bar_props(colors, styles, currentStep)} />
      </View>
      {currentStep == 0.99 && (
        <Text
          onPress={handlePlan}
          center
          color={colors.primary}
          style={margin.top_12}>
          Skip
        </Text>
      )}
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
      {currentStep == 0.72 && (
        <>
          <SelectCard
            title={'Tracking is Key, but you’ll need a workout plan'}
            desc_2={
              'In Fittssy you track workouts by logging reps and sets lke workout journal. Each workout session starts from your workout plan:'
            }
            data={data4}
            onPress={hadleTracking}
            initialState={track}
          />
        </>
      )}
      {currentStep == 0.81 && (
        <>
          <Content
            onPress={handleContent}
            desc_1={'Great! Let’s find your workout'}
            desc_2={
              'We base our initial recommendation on what you told us about yourself. You can always explore all the workouts we have to offer or even create your own afterwards in the FIind Workout tab.'
            }
          />
        </>
      )}
      {currentStep == 0.9 && (
        <View>
          <SelectCard
            title={'How many days per week you workout?'}
            desc_2={'This determines the number of days in your workout plan.'}
            data={data5}
            onPress={handleContent}
            initialState={workoutPlan}
          />
        </View>
      )}
      {currentStep == 0.99 && (
        <>
          <SelectCard
            innerSyle={{paddingLeft: RF(14), alignItems: 'flex-start'}}
            title={'Select a Workout Plan'}
            desc_2={
              'Based on your experience as an Intermediate and our goal of Building Muscle, here are some 3 to 4 day workout programs'
            }
            data={data6}
            onPress={handlePlan}
            initialState={plan}
          />
        </>
      )}
    </Wrapper>
  );
};

export default GetInformation;
