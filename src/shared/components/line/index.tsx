import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {RF} from '@theme';

const Line = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <View
      style={{
        height: 1,
        borderTopWidth: 1,
        marginVertical: RF(20),
        borderColor: colors.card,
        width: '100%',
      }}></View>
  );
};

export default Line;

const styles = StyleSheet.create({});
