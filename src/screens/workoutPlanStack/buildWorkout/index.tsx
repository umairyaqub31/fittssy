import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AddButton, BackHeader, Wrapper} from '@components';
import {margin} from '@theme';

const BuildWorkout = ({navigation}: any) => {
  return (
    <Wrapper>
      <BackHeader
        edit
        title={'Build Workout'}
        startIcon
        navigation={navigation}
      />
      <AddButton title={'Add Exercise'} style={margin.top_32} />
    </Wrapper>
  );
};

export default BuildWorkout;

const styles = StyleSheet.create({});
