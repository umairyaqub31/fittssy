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

interface Props {}

const SelectGender = (props: Props) => {
  const {} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const dispatch = useDispatch();
  const {getStartedData} = useSelector((state: any) => state.root.general);
  const maleCard =
    getStartedData?.gender == 'Male' ? squareGradient : graySquare;
  const femaleCard =
    getStartedData?.gender == 'Female' ? squareGradient : graySquare;
  const NottosayCard =
    getStartedData?.gender == 'Nottosay' ? squareGradient : graySquare;

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
        <Pressable style={[styles.card]} onPress={() => handleGender('Female')}>
          <ImageBackground
            source={femaleCard}
            resizeMode="contain"
            style={{
              height: RF(134),
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={female}
              style={icon._54}
              tintColor={
                getStartedData?.gender == 'Female'
                  ? colors.primary
                  : colors.text
              }
            />
            <Text
              size={20}
              semiBold
              style={margin.top_16}
              color={
                getStartedData?.gender == 'Female'
                  ? colors.primary
                  : colors.text
              }>
              Female
            </Text>
          </ImageBackground>
        </Pressable>
        <Pressable style={[styles.card]} onPress={() => handleGender('Male')}>
          <ImageBackground
            source={maleCard}
            resizeMode="contain"
            style={{
              height: RF(134),
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={male}
              style={icon._54}
              tintColor={
                getStartedData?.gender == 'Male' ? colors.primary : colors.text
              }
            />
            <Text
              size={20}
              semiBold
              style={margin.top_16}
              color={
                getStartedData?.gender == 'Male' ? colors.primary : colors.text
              }>
              Male
            </Text>
          </ImageBackground>
        </Pressable>
      </View>
      <Pressable
        style={[styles.card, {alignSelf: 'center'}]}
        onPress={() => handleGender('Nottosay')}>
        <ImageBackground
          source={NottosayCard}
          resizeMode="contain"
          style={{
            height: RF(134),
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            size={20}
            semiBold
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
            // style={margin.top_16}
            color={
              getStartedData?.gender == 'Nottosay'
                ? colors.primary
                : colors.text
            }>
            not to say
          </Text>
        </ImageBackground>
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
