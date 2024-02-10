import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../../text';
import {flex, icon, margin, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import {female, male} from '@assets';
import {useDispatch, useSelector} from 'react-redux';
import {setGetStartedData} from '@redux';

interface Props {}

const SelectGender = (props: Props) => {
  const {} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const dispatch = useDispatch();
  const {getStartedData} = useSelector((state: any) => state.root.general);
  const maleCard =
    getStartedData?.gender == 'Male' ? colors.primary : colors.card;
  const femaleCard =
    getStartedData?.gender == 'Female' ? colors.primary : colors.card;

  const handleGender = (text: any) => {
    dispatch(setGetStartedData({...getStartedData, gender: text}));
  };

  return (
    <>
      <Text size={24} semiBold center style={margin.top_56}>
        What's your gender?
      </Text>
      <Text size={13} center style={[margin.top_16]} color={colors.grayText}>
        Help us customize workout plans, calculate BMI and session calories.
      </Text>
      <View style={flex.rowBetween}>
        <Pressable
          style={[styles.card, {backgroundColor: femaleCard}]}
          onPress={() => handleGender('Female')}>
          <Image source={female} style={icon._54} />
          <Text size={20} semiBold style={margin.top_16}>
            Female
          </Text>
        </Pressable>
        <Pressable
          style={[styles.card, {backgroundColor: maleCard}]}
          onPress={() => handleGender('Male')}>
          <Image source={male} style={icon._54} />
          <Text size={20} semiBold style={margin.top_16}>
            Male
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default SelectGender;

const useStyles = (colors: any) =>
  StyleSheet.create({
    card: {
      paddingVertical: RF(24),
      width: '47%',
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: RF(40),
    },
  });
