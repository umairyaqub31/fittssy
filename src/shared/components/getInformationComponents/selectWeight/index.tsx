import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Text from '../../text';
import {margin, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import PrimaryButton from '../../PrimaryButton';
import RNPickerSelect from 'react-native-picker-select';
import ShiftCards from '../../shiftCards';
import WheelScrollPicker from '../../wheelScrollPicker';
import {useDispatch, useSelector} from 'react-redux';
import {setGetStartedData} from '@redux';
interface Props {}

const SelectWeight = (props: Props) => {
  const {} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState('lbs');
  const {getStartedData} = useSelector((state: any) => state.root.general);
  const dispatch = useDispatch();
  console.log(getStartedData, '.......getStartedData');

  const handleShiftCards = (text: any) => {
    setSelected(text);
  };
  const handleWeight = () => {
    dispatch(setGetStartedData({...getStartedData, weight: value}));
  };

  return (
    <>
      <Text size={24} semiBold center style={margin.top_56} color={colors.text}>
        What's your Weight?
      </Text>
      <ShiftCards
        title1={'lbs'}
        title2={'kg'}
        onPress={handleShiftCards}
        initialState={selected}
      />

      <View style={[styles.input, margin.top_40]}>
        <TextInput
          keyboardType="number-pad"
          value={value}
          maxLength={3}
          autoFocus
          onChangeText={setValue}
          style={{
            width: '50%',
            textAlign: 'right',
            fontSize: RF(20),
            fontFamily: 'Montserrat-SemiBold',
            color: colors.text,
          }}
        />
        <Text size={20} semiBold color={colors.text}>
          {selected}
        </Text>
      </View>
      <View style={margin.top_56}>
        <PrimaryButton
          onPress={handleWeight}
          title={'Next'}
          textColor={colors.text}
          containerStyle={margin.top_56}
        />
      </View>
    </>
  );
};

export default SelectWeight;

const useStyles = (colors: any) =>
  StyleSheet.create({
    staticText: {
      alignSelf: 'center',
      color: 'gray',
    },
    input: {
      height: RF(50),
      width: '100%',
      borderRadius: 24,
      borderWidth: 1,
      borderColor: colors.lightGray,
      alignItems: 'center',
      flexDirection: 'row',
    },
    wheelContainer: {
      width: '100%',
      paddingTop: RF(50),
      height: RF(250),
      // marginTop: RF(35),
      backgroundColor: 'transparent',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    selectedView: {
      width: RF(137),
      // borderWidth: 1,
      flexDirection: 'row',
      borderRadius: 33,
      overflow: 'hidden',
      height: RF(37),
      marginTop: RF(20),
      alignSelf: 'center',
    },
  });
