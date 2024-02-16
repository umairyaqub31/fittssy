import {RF} from '@theme';
import React from 'react';
import Text from '../text';
import {useTheme} from '@react-navigation/native';
import {View, Image, Pressable, StyleSheet, TextInputProps} from 'react-native';

interface Props extends TextInputProps {
  m_Top?: any;
  color?: any;
  endIcon?: any;
  label?: string;
  error?: string;
  startIcon?: any;
  tintColor?: any;
  m_Vertical?: any;
  tintColorStart?: any;
  onPress?: () => void;
  placeHolder?: any;
  title?: any;
}
const DropDown = (props: Props) => {
  const {
    label,
    error,
    m_Top,
    color,
    onPress,
    endIcon,
    startIcon,
    tintColor,
    m_Vertical,
    tintColorStart,
    placeHolder,
    title,
    ...otherProps
  } = props;
  const theme: any = useTheme();
  const styles = useStyles(theme?.colors);

  return (
    <Pressable
      style={[
        styles.container,
        {marginVertical: m_Vertical, marginTop: m_Top ? m_Top : RF(20)},
      ]}
      onPress={() => onPress(title)}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={[styles.InputContainer]}>
        {startIcon && (
          <Image
            source={startIcon}
            style={{
              width: RF(16),
              height: RF(16),
              marginBottom: RF(4),
              tintColor: tintColorStart,
            }}
            resizeMode={'contain'}
          />
        )}
        <Text style={styles.input} medium>
          {title}
        </Text>

        {endIcon && (
          <Image
            tintColor={tintColor}
            source={endIcon}
            style={{
              width: RF(12),
              height: RF(13),
              marginRight: RF(12),
            }}
            resizeMode={'contain'}
          />
        )}
      </View>
    </Pressable>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      // paddingLeft: RF(25),
      width: '100%',
    },
    InputContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: colors?.borderGray,
      borderWidth: 1,
      height: RF(48),
      borderRadius: 35,
      marginRight: RF(20),
    },
    label: {
      fontWeight: '600',
      marginBottom: RF(15),
    },
    input: {
      flex: 1,
      color: '#858585',
      alignItems: 'center',
      fontSize: RF(14),
      paddingHorizontal: RF(20),
    },
    errorInput: {
      borderColor: 'red',
    },
    errorText: {
      color: 'red',
      fontSize: RF(12),
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '500',
    },
  });

export default DropDown;
