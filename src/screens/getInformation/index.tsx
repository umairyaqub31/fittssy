import {Image, Pressable, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Progress from 'react-native-progress';
import {back} from '@assets';
import useStyles from './styles';
import {bar_props} from './props';
import {flex, icon} from '@theme';
import {SelectAge, SelectGender, SelectHeight, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setGetStartedData} from '@redux';

const GetInformation = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const [currentStep, setCurrentStep] = useState(0);
  const dispatch = useDispatch();
  const {getStartedData} = useSelector((state: any) => state.root.general);

  useEffect(() => {
    console.log(currentStep, '........currentStep');
    if (getStartedData) {
      setTimeout(() => {
        setCurrentStep(parseFloat((currentStep + 0.1).toFixed(1))); // Round to one decimal place
      }, 500);
    }
  }, [getStartedData]);

  const handleBack = () => {
    setCurrentStep(parseFloat((currentStep - 0.1).toFixed(1)));
  };

  const handleGender = (text: any) => {
    // console.log(text);
    dispatch(setGetStartedData({...getStartedData, gender: text}));
  };
  const handleAge = (text: any) => {
    dispatch(setGetStartedData({...getStartedData, age: text}));
  };
  const handleHeight = (text: any) => {
    dispatch(setGetStartedData({...getStartedData, height: text}));
  };
  return (
    <Wrapper isTop>
      <View style={flex.rowSimple}>
        <Pressable onPress={handleBack}>
          <Image source={back} style={[icon._16, {tintColor: colors.text}]} />
        </Pressable>
        <Progress.Bar {...bar_props(colors, styles, currentStep)} />
      </View>

      {currentStep == 0 && (
        <SelectGender onPress={handleGender} initialState={getStartedData} />
      )}

      {currentStep == 0.1 && (
        <>
          <SelectAge onPress={handleAge} />
        </>
      )}
      {currentStep == 0.2 && (
        <>
          <SelectHeight onPress={handleHeight} />
        </>
      )}
    </Wrapper>
  );
};

export default GetInformation;
