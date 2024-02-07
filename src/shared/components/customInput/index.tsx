import {RF} from '@theme';
import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  Image,
  TouchableOpacity,
} from 'react-native';
import Text from '../text';
import useStyles from './styles';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  color?: any;
  startIcon?: any;
  endIcon?: any;
  m_Vertical?: any;
  m_Top?: any;
  tintColor?: any;
  tintColorStart?: any;
  VerifyButton?: any;
  OptionalText?: any;
  onPress?: () => void;
  errors?: any;
  fontSize?: any;
}

const CustomInput = (props: Props) => {
  const {
    label,
    error,
    onPress,
    m_Vertical,
    m_Top,
    startIcon,
    endIcon,
    VerifyButton,
    tintColor,
    tintColorStart,
    OptionalText,
    errors,
    fontSize,
    color,
    ...otherProps
  } = props;

  const styles = useStyles({});

  return (
    <View
      style={[
        styles.container,
        {marginVertical: m_Vertical, marginTop: m_Top},
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
          placeholder=""
          style={[
            styles.input,
            error !== '' && styles.errorInput,
            {
              padding: 0,
              paddingHorizontal: RF(20),
              fontSize: fontSize,
              color: color,
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

export default CustomInput;
