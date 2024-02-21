import React, {useState} from 'react';
import {Image, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import {margin, RF, SCREEN_WIDTH} from '@theme';
import {AddButton, Text, WorkoutItem, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {back, exercise, exercise1, next} from '@assets';

const ExerciseOfDay = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  return (
    <>
      <Image
        source={exercise}
        style={{
          height: 337.5,
          width: SCREEN_WIDTH,
          // resizeMode: 'contain',
          // alignSelf: 'center',
        }}
      />
      <LinearGradient
        end={{x: 0, y: 0}}
        start={{x: 0, y: 1}}
        colors={colors.gradientBackground}
        style={{
          position: 'absolute',
          height: RF(90),
          width: '100%',
          alignSelf: 'center',
          backgroundColor: 'transparent',
          zIndex: 1,
          bottom: 130,
        }}></LinearGradient>
      <Text
        center
        size={18}
        medium
        color={colors.grayText}
        style={{marginTop: -15}}>
        Workout log is empty
      </Text>
    </>
  );
};

export default ExerciseOfDay;
const useStyles = (colors: any) =>
  StyleSheet.create({
    MainContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    ImageView: {
      width: RF(46),
      height: RF(46),
      backgroundColor: colors.card,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: RF(24),
    },
    ImageStyle: {
      width: RF(12),
      height: RF(12),
      resizeMode: 'contain',
      tintColor: colors.text,
    },
    rowStyles: {flexDirection: 'row', alignItems: 'center'},
    ImageBackgroundStyle: {
      width: SCREEN_WIDTH,
      alignSelf: 'center',
      height: 337.5,
      justifyContent: 'flex-end',
    },
    TabStyle: {flexDirection: 'row', alignItems: 'center', marginTop: RF(16)},
  });
