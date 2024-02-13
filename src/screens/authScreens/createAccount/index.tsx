import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  View,
} from 'react-native';
import {CustomInput, PrimaryButton, Text, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {flex, icon, margin, RF} from '@theme';
import {apple, google, hiddenEye} from '@assets';
import {useStyles} from './styles';
import {navigate} from '@services';

const Register = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const [visible, setVisible] = useState(true);
  const styles = useStyles(colors);
  const togglePassword = () => {
    setVisible(!visible);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <Wrapper isTop>
          <Text semiBold size={22} color={colors.text}>
            Create your account
          </Text>
          <Text
            color={colors.grayText}
            style={[margin.top_4, margin.bottom_24]}>
            Enter your details to continue
          </Text>
          <CustomInput label="Email Address" />
          <CustomInput
            label="Password"
            endIcon={hiddenEye}
            onPress={togglePassword}
            secureTextEntry={visible}
          />
          <CustomInput
            label="Confirm Password"
            endIcon={hiddenEye}
            onPress={togglePassword}
            secureTextEntry={visible}
          />
          <Pressable style={margin.top_32}>
            <PrimaryButton
              title={'Create an account'}
              textColor={colors.theme}
            />
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
              onPress={() => navigate('Login', '')}>
              Sign In
            </Text>
          </Text>
        </Wrapper>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Register;
