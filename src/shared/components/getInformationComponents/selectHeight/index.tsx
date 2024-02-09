import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Text from '../../text';
import {margin, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import PrimaryButton from '../../PrimaryButton';
import WheelScrollPicker from '../../wheelScrollPicker';
interface Props {
  onPress: (height: any) => void;
}

const SelectHeight = (props: Props) => {
  const {onPress} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  return (
    <>
      <Text size={24} semiBold center style={margin.top_56}>
        What's your height?
      </Text>
      <Text size={13} center style={[margin.top_16]} color={colors.grayText}>
        Help us customize workout plans, calculate BMI and session calories.
      </Text>
      <TextInput
        keyboardType="number-pad"
        maxLength={2}
        style={styles.input}
        autoFocus
      />
      <Pressable onPress={onPress}>
        <PrimaryButton
          title={'Next'}
          textColor={colors.theme}
          containerStyle={margin.top_56}
        />
      </Pressable>
      <View
        style={{
          width: '100%',
          borderWidth: 1,
          marginTop: RF(55),
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <WheelScrollPicker />
        <Text style={{bottom: RF(7)}}>ssss</Text>
      </View>
    </>
  );
};

export default SelectHeight;

const useStyles = (colors: any) =>
  StyleSheet.create({
    input: {
      height: RF(50),
      width: '100%',
      borderRadius: 24,
      marginTop: RF(40),
      borderWidth: 1,
      borderColor: colors.lightGray,
      textAlign: 'center',
      fontSize: RF(20),
      fontFamily: 'Montserrat-SemiBold',
    },
  });
