import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {RF} from '@theme';

interface Props {
  marginVertical?: any;
  vertical?: any;
}

const Line = (props: Props) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const {marginVertical, vertical} = props;
  return (
    <>
      {vertical ? (
        <View
          style={{
            height: 50,
            borderLeftWidth: 1,
            // marginVertical: marginVertical ? marginVertical : RF(16),
            borderColor: colors.card,
            width: 1,
          }}></View>
      ) : (
        <View
          style={{
            height: 1,
            borderTopWidth: 1,
            marginVertical: marginVertical ? marginVertical : RF(16),
            borderColor: colors.card,
            width: '100%',
          }}></View>
      )}
    </>
  );
};

export default Line;

const styles = StyleSheet.create({});
