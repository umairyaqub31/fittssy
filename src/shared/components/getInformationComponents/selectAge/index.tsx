import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import Text from '../../text';
import React, {useState} from 'react';
import {margin, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import PrimaryButton from '../../PrimaryButton';
import {useDispatch, useSelector} from 'react-redux';
import {setGetStartedData} from '@redux';

interface Props {}

const SelectAge = (props: Props) => {
  const {} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const {getStartedData} = useSelector((state: any) => state.root.general);
  const handleAge = (text: any) => {
    dispatch(setGetStartedData({...getStartedData, age: text}));
  };
  return (
    <>
      <Text size={24} semiBold center style={margin.top_56}>
        How old are you?
      </Text>
      <Text size={13} center style={[margin.top_16]} color={colors.grayText}>
        Help us customize workout plans, calculate BMI and session calories.
      </Text>
      <TextInput
        keyboardType="number-pad"
        maxLength={2}
        style={styles.input}
        value={value}
        onChangeText={v => setValue(v)}
        autoFocus
      />
      <Pressable style={margin.top_56} onPress={() => handleAge(value)}>
        <PrimaryButton
          title={'Next'}
          textColor={colors.text}
          containerStyle={margin.top_56}
        />
      </Pressable>
    </>
  );
};

export default SelectAge;

const useStyles = (colors: any) =>
  StyleSheet.create({
    input: {
      height: RF(50),
      width: '100%',
      borderRadius: 24,
      marginTop: RF(40),
      borderWidth: 1,
      color: colors.text,
      borderColor: colors.lightGray,
      textAlign: 'center',
      fontSize: RF(20),
      fontFamily: 'Montserrat-SemiBold',
    },
  });
