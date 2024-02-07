import {Image, StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';
import React from 'react';
import {Text, Wrapper} from '@components';
import {back} from '@assets';
import {flex, icon, RF} from '@theme';
import {useTheme} from '@react-navigation/native';

const GetInformation = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <Wrapper>
      <View style={flex.rowSimple}>
        <Image source={back} style={icon._16} />
        <Progress.Bar
          progress={0.3}
          width={200}
          height={8}
          style={{borderWidth: 1, backgroundColor: colors.card, height: RF(8)}}
        />
      </View>
      <Text size={24} semiBold center>
        What's your gender?
      </Text>
    </Wrapper>
  );
};

export default GetInformation;

const styles = StyleSheet.create({});
