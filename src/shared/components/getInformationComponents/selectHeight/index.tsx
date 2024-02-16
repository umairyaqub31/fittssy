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

const SelectHeight = (props: Props) => {
  const {} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const [feet, setFeet] = useState<any>('');
  const [inch, setInch] = useState<any>('');
  const [selected, setSelected] = useState('ft');
  const {getStartedData} = useSelector((state: any) => state.root.general);
  const dispatch = useDispatch();
  console.log(getStartedData, '.......getStartedData');

  const handleShiftCards = (text: any) => {
    setSelected(text);
  };
  const handleFeet = (value: any) => {
    console.log(value, '.......feet');
    setFeet(value);
  };
  const handleInch = (value: any) => {
    setInch(value);
    console.log(value, '.......Inch');
  };
  const concatHeight = `${feet}'${inch} `;

  const handleHeight = (text: any) => {
    dispatch(setGetStartedData({...getStartedData, height: text}));
  };

  return (
    <>
      <Text size={24} semiBold center style={margin.top_56} color={colors.text}>
        What's your height?
      </Text>
      <ShiftCards
        title1={'ft'}
        title2={'cm'}
        onPress={handleShiftCards}
        initialState={selected}
      />
      <TextInput
        editable={false}
        keyboardType="number-pad"
        // maxLength={2}
        value={selected == 'ft' ? `${feet}'${inch}"` : `${feet}${inch}`}
        style={styles.input}
      />
      <Pressable
        style={margin.top_56}
        onPress={() => handleHeight(concatHeight)}>
        <PrimaryButton
          title={'Next'}
          textColor={colors.text}
          containerStyle={margin.top_56}
        />
      </Pressable>
      {selected == 'ft' ? (
        <View style={styles.wheelContainer}>
          <WheelScrollPicker
            data={['1', '2', '3', '4', '5', '6', '7']}
            handleChange={handleFeet}
          />
          <Text color={colors.text} medium size={18}>
            ft
          </Text>
          <WheelScrollPicker
            handleChange={handleInch}
            data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']}
          />
          <Text color={colors.text} medium size={18}>
            in
          </Text>
        </View>
      ) : (
        <View style={[styles.wheelContainer, {justifyContent: 'center'}]}>
          <WheelScrollPicker
            data={[
              '171',
              '172',
              '173',
              '174',
              '175',
              '176',
              '177',
              '178',
              '179',
              '180',
              '181',
            ]}
            handleChange={handleFeet}
          />
          <Text color={colors.text} medium size={18}>
            cm
          </Text>
        </View>
      )}
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
      color: colors.text,
      fontSize: RF(20),
      fontFamily: 'Montserrat-SemiBold',
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
