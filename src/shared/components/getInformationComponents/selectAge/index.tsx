import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import Text from '../../text';
import React, {useState} from 'react';
import {margin, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import PrimaryButton from '../../PrimaryButton';

interface Props {
  onPress: (age: any) => void;
}

const SelectAge = (props: Props) => {
  const {onPress} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const [value, setValue] = useState('');
  //   console.log(value, '..v');

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
      <Pressable onPress={() => onPress(value)}>
        <PrimaryButton
          title={'Next'}
          textColor={colors.theme}
          containerStyle={margin.top_56}
        />
      </Pressable>
      {/* <View
        style={{
          height: RF(250),
          width: RF(65),
          borderWidth: 1,
          //   alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ScrollPicker
          dataSource={['1', '2', '3', '4', '5', '6', '7']}
          selectedIndex={3}
          renderItem={(item, data, index) => {
            console.log(index, '.....index');

            return (
              <>
                <Text
                  size={18}
                  semiBold
                  center
                  style={{width: '100%'}}
                  color={index == true ? '#000' : colors.fadeGray}>
                  {item}
                </Text>
              </>
            );
            //
          }}
          onValueChange={(data, selectedIndex) => {
            console.log(data);
          }}
          wrapperHeight={250}
          wrapperBackground="#FFFFFF"
          itemHeight={RF(30)}
          highlightColor="#d8d8d8"
          highlightBorderWidth={2}
        />
      </View> */}
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
      borderColor: colors.lightGray,
      textAlign: 'center',
      fontSize: RF(20),
      fontFamily: 'Montserrat-SemiBold',
    },
  });
