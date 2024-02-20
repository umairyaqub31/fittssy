import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackHeader, Wrapper} from '@components';

const BuildWorkout = ({navigation}: any) => {
  return (
    <Wrapper>
      <BackHeader
        edit
        title={'Build Workout'}
        startIcon
        navigation={navigation}
      />
    </Wrapper>
  );
};

export default BuildWorkout;

const styles = StyleSheet.create({});
