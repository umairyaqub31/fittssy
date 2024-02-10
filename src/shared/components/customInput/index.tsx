import {RF} from '@theme';
import React from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import Text from '../text';
import {useTheme} from '@react-navigation/native';

interface Props extends TextInputProps {
  m_Top?: any;
  color?: any;
  errors?: any;
  endIcon?: any;
  fontSize?: any;
  label?: string;
  error?: string;
  startIcon?: any;
  tintColor?: any;
  m_Vertical?: any;
  VerifyButton?: any;
  OptionalText?: any;
  tintColorStart?: any;
  onPress?: () => void;
  placeHolder?: any;
}

const CustomInput = (props: Props) => {
  const {
    label,
    error,
    m_Top,
    color,
    errors,
    onPress,
    endIcon,
    fontSize,
    startIcon,
    tintColor,
    m_Vertical,
    VerifyButton,
    OptionalText,
    tintColorStart,
    placeHolder,
    ...otherProps
  } = props;
  const theme: any = useTheme();
  const styles = useStyles(theme?.colors);

  return (
    <View
      style={[
        styles.container,
        {marginVertical: m_Vertical, marginTop: m_Top ? m_Top : RF(20)},
      ]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={[styles.InputContainer]}>
        {startIcon && (
          <TouchableOpacity onPress={onPress}>
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
          </TouchableOpacity>
        )}
        <TextInput
          placeholder={placeHolder}
          placeholderTextColor={color ? color : theme?.colors?.txtGray}
          style={[
            styles.input,
            error !== '' && styles.errorInput,
            {
              padding: 0,
              fontWeight: '500',
              paddingHorizontal: RF(20),
              fontSize: fontSize ? fontSize : RF(14),
              color: color ? color : theme?.colors?.txtGray,
            },
          ]}
          {...otherProps}
          {...props}
        />

        {endIcon && (
          <TouchableOpacity onPress={onPress}>
            <Image
              tintColor={tintColor}
              source={endIcon}
              style={{
                width: RF(20),
                height: RF(20),
                marginBottom: RF(4),
                marginRight: RF(6),
              }}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      paddingLeft: RF(25),
    },
    InputContainer: {
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
      color: '#1A3D7C',
      alignItems: 'center',
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

export default CustomInput;
