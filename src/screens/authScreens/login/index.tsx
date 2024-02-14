import {Image, Pressable, View} from 'react-native';
import {CustomInput, PrimaryButton, Text, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {flex, icon, margin, RF} from '@theme';
import {apple, google, hiddenEye} from '@assets';
import {useStyles} from './styles';
import {LoginValidationSchema, navigate} from '@services';
import {useDispatch} from 'react-redux';
import {setIsLoggedIn} from '@redux';
import {useFormik} from 'formik';

const Login = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);
  const [isEmailFocused, setIsEmailFocused] = useState(true);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const styles = useStyles(colors);

  const togglePassword = () => {
    setVisible(!visible);
  };
  const handleLogin = (values: any) => {
    dispatch(setIsLoggedIn(true));
  };
  const formik: any = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginValidationSchema,
    onSubmit: (values: any) => {
      console.log(values, '.........v');
      handleLogin(values);
    },
  });
  const handleFormik = () => {
    formik?.handleSubmit();
    // dispatch(setIsLoggedIn(true));
  };
  return (
    <Wrapper isTop>
      <Text semiBold size={22} color={colors.text} style={margin.bottom_24}>
        Welcome back, Sarah!
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
      <CustomInput
        label="Password"
        labelStyle={{color: isPasswordFocused ? colors.primary : colors.text}}
        inputStyle={{
          borderColor: isPasswordFocused ? colors.primary : colors.grayText,
        }}
        onChangeText={formik.handleChange('password')}
        value={formik?.values?.password}
        onBlur={() => setIsPasswordFocused(false)}
        onFocus={() => setIsPasswordFocused(true)}
        endIcon={hiddenEye}
        onPress={togglePassword}
        secureTextEntry={visible}
      />
      {formik.touched.password && formik.errors.password && (
        <Text regular size={10} color={'red'}>
          {formik?.errors?.password}
        </Text>
      )}

      <Text
        onPress={() => navigate('ForgotPassword', '')}
        size={12}
        semiBold
        style={[margin.top_12, {alignSelf: 'flex-end'}]}
        color={colors.primary}>
        Forgot Password?
      </Text>
      <Pressable style={margin.top_24} onPress={handleFormik}>
        <PrimaryButton title={'Sign In'} textColor={colors.theme} />
      </Pressable>
      <View style={[flex.rowBetween, margin.Vertical_24]}>
        <View style={styles.line} />
        <Text bold color={colors.grayText}>
          Or
        </Text>
        <View style={styles.line} />
      </View>
      <Pressable style={styles.authCard}>
        <Image source={google} style={icon._20} />
        <Text color={colors.grayText}>Continue with Google</Text>
      </Pressable>
      <Pressable style={[styles.authCard, margin.top_20]}>
        <Image source={apple} style={icon._20} />
        <Text color={colors.grayText}>Continue with Apple ID</Text>
      </Pressable>
      <Text center medium color={colors.text} style={margin.Vertical_40}>
        Already have an account?{' '}
        <Text
          color={colors.primary}
          bold
          onPress={() => navigate('GetInformation', '')}>
          Sign Up
        </Text>
      </Text>
    </Wrapper>
  );
};

export default Login;
