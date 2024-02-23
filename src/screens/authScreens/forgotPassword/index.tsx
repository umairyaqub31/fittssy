import {Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {CustomInput, PrimaryButton, Text, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';
import {margin} from '@theme';
import {useFormik} from 'formik';
import {ForgotValidationSchema, navigate} from '@services';

const ForgotPassword = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const [isEmailFocused, setIsEmailFocused] = useState(true);
  const handleLogin = (values: any) => {
    navigate('VerificatioOTP', '');
  };
  const formik: any = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ForgotValidationSchema,
    onSubmit: (values: any) => {
      handleLogin(values);
    },
  });
  const handleFormik = () => {
    formik?.handleSubmit();
  };
  return (
    <Wrapper>
      <Text semiBold size={22} color={colors.text}>
        Forgot Password?
      </Text>
      <Text color={colors.grayText} style={[margin.top_4, margin.bottom_24]}>
        Enter your email address to recover password.
      </Text>
      <CustomInput
        label="Email Address"
        labelStyle={{color: isEmailFocused ? colors.primary : colors.text}}
        inputStyle={{
          borderColor: isEmailFocused ? colors.primary : colors.grayText,
        }}
        autoFocus
        onBlur={() => setIsEmailFocused(false)}
        onFocus={() => setIsEmailFocused(true)}
        onChangeText={formik.handleChange('email')}
        value={formik?.values?.email}
      />
      {formik.touched.email && formik.errors.email && (
        <Text regular size={10} color={'red'}>
          {formik?.errors?.email}
        </Text>
      )}
      <View style={margin.top_24}>
        <PrimaryButton
          onPress={handleFormik}
          title={'Send'}
          textColor={colors.theme}
        />
      </View>
      <Text
        center
        medium
        color={colors.grayText}
        style={[margin.top_16]}
        belowLine="1">
        Try another way
      </Text>
    </Wrapper>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
