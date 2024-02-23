import {
  Image,
  Pressable,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Text from '../../text';
import {flex, icon, margin, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import {female, graySquare, male, squareGradient} from '@assets';
import {useDispatch, useSelector} from 'react-redux';
import {setGetStartedData} from '@redux';
import BorderGradientCard from '../../borderGradientCard';

interface Props {}

const SelectGender = (props: Props) => {
  const {} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const dispatch = useDispatch();
  const {getStartedData} = useSelector((state: any) => state.root.general);
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
      <View
        style={{
          borderColor: 'red',
          width: '100%',
          marginTop: RF(40),
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Pressable
          onPress={() => handleGender('Female')}
          style={{width: '47%'}}>
          <BorderGradientCard
            colors={
              getStartedData?.gender == 'Female'
                ? colors.gradientCard
                : ['transparent', 'transparent']
            }
            bgColor={
              getStartedData?.gender == 'Female'
                ? colors.primaryOpacity
                : colors.card
            }
            mainCardStyle={{height: RF(134)}}>
            <Image
              source={female}
              style={[icon._54, {alignSelf: 'center'}]}
              tintColor={
                getStartedData?.gender == 'Female'
                  ? colors.primary
                  : colors.text
              }
            />
            <Text
              size={20}
              semiBold
              center
              style={margin.top_16}
              color={
                getStartedData?.gender == 'Female'
                  ? colors.primary
                  : colors.text
              }>
              Female
            </Text>
          </BorderGradientCard>
        </Pressable>
        <Pressable onPress={() => handleGender('Male')} style={{width: '47%'}}>
          <BorderGradientCard
            colors={
              getStartedData?.gender == 'Male'
                ? colors.gradientCard
                : ['transparent', 'transparent']
            }
            bgColor={
              getStartedData?.gender == 'Male'
                ? colors.primaryOpacity
                : colors.card
            }
            mainCardStyle={{height: RF(134)}}>
            <Image
              source={male}
              style={[icon._54, {alignSelf: 'center'}]}
              tintColor={
                getStartedData?.gender == 'Male' ? colors.primary : colors.text
              }
            />
            <Text
              size={20}
              semiBold
              center
              style={margin.top_16}
              color={
                getStartedData?.gender == 'Male' ? colors.primary : colors.text
              }>
              Male
            </Text>
          </BorderGradientCard>
        </Pressable>
      </View>
      <Pressable
        onPress={() => handleGender('Nottosay')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: RF(32),
        }}>
        <BorderGradientCard
          colors={
            getStartedData?.gender == 'Nottosay'
              ? colors.gradientCard
              : ['transparent', 'transparent']
          }
          bgColor={
            getStartedData?.gender == 'Nottosay'
              ? colors.primaryOpacity
              : colors.card
          }
          mainCardStyle={{height: RF(134), width: '47%'}}>
          <Text
            size={20}
            semiBold
            center
            style={margin.top_16}
            color={
              getStartedData?.gender == 'Nottosay'
                ? colors.primary
                : colors.text
            }>
            Prefer
          </Text>
          <Text
            size={20}
            semiBold
            center
            // style={margin.top_16}
            color={
              getStartedData?.gender == 'Nottosay'
                ? colors.primary
                : colors.text
            }>
            not to say
          </Text>
        </BorderGradientCard>
      </Pressable>
    </>
  );
};

export default SelectGender;

const useStyles = (colors: any) =>
  StyleSheet.create({
    card: {
      width: '47%',
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: RF(40),
      backgroundColor: 'transparent',
    },
  });
