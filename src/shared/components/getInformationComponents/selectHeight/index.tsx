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
import {arrayRange} from '@utils';
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
  const CM_OPTIONS = arrayRange(80, 230, 1).map(String);

  const handleShiftCards = (text: any) => {
    setSelected(text);
  };
  const handleFeet = (value: any) => {
    setFeet(value);
  };
  const handleInch = (value: any) => {
    setInch(value);
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
      <View style={margin.top_56}>
        <PrimaryButton
          onPress={() => handleHeight(concatHeight)}
          title={'Next'}
          containerStyle={margin.top_56}
        />
      </View>
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
          <WheelScrollPicker data={CM_OPTIONS} handleChange={handleFeet} />
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
