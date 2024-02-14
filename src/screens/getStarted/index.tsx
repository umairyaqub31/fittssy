import {getstarted3} from '@assets';
import {PrimaryButton, Text, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';
import {setGetStarted} from '@redux';
import {navigate} from '@services';
import {RF} from '@theme';
import React from 'react';
import {
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';

const GetStarted = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const dispatch = useDispatch();

  const getStarted = () => {
    dispatch(setGetStarted(true));
    navigate('GetInformation', '');
  };

  return (
    <ImageBackground
      source={getstarted3}
      style={{width: '100%', height: '100%'}}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <View
        style={{
          flex: 1,
          paddingVertical: 62,
          paddingHorizontal: 20,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Text
          regular
          color={colors.white}
          size={44}
          style={{alignSelf: 'center'}}>
          Fittssy
        </Text>
        <View>
          <PrimaryButton
            title={'Get Started'}
            bgColor={colors.primary}
            textColor={colors.white}
            onPress={getStarted}
          />
          <View style={styles.signInView}>
            <Text regular color={colors.white}>
              Already have an account?{' '}
            </Text>
            <Pressable onPress={() => navigate('Login', '')}>
              <Text color={colors.primary}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  signInView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: RF(20),
    marginBottom: 10,
  },
});
