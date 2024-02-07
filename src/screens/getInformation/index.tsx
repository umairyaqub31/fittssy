import {Image, StyleSheet, Text, View} from 'react-native';
import * as Progress from 'react-native-progress';
import React from 'react';
import {Wrapper} from '@components';
import {back} from '@assets';
import {icon} from '@theme';

const GetInformation = () => {
  return (
    <Wrapper>
      <Image source={back} style={icon._16} />
      <Progress.Bar progress={0.3} width={200} />
    </Wrapper>
  );
};

export default GetInformation;

const styles = StyleSheet.create({});
