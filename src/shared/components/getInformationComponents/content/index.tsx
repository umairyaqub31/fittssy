import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../../text';
import {margin, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import PrimaryButton from '../../PrimaryButton';

interface Props {
  onPress: (text: any) => void;
  desc_1?: any;
  desc_2?: any;
}

const Content = (props: Props) => {
  const {desc_1, desc_2, onPress} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <>
      <Text size={24} semiBold center style={margin.top_56}>
        {desc_1}
      </Text>
      <Text size={13} center style={[margin.top_16]} color={colors.grayText}>
        {desc_2}
      </Text>
      <Pressable
        onPress={onPress}
        style={{
          position: 'absolute',
          bottom: RF(40),
          right: 20,
          left: 20,
        }}>
        <PrimaryButton
          title={'Next'}
          textColor={colors.text}
          containerStyle={margin.top_56}
        />
      </Pressable>
    </>
  );
};

export default Content;

const styles = StyleSheet.create({});
