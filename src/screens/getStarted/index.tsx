import {getstarted3} from '@assets';
import {Text, Wrapper} from '@components';
import {useTheme} from '@react-navigation/native';
import {RF} from '@theme';
import React from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const GetStarted = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <ImageBackground
      source={getstarted3}
      style={{width: '100%', height: '100%'}}>
      <StatusBar
        // hidden={true}
        // translucent={true}
        // backgroundColor={'transparent'}
        // barStyle={'dark-content'}
        animated={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent={true}
      />
      <View
        style={{
          flex: 1,
          paddingVertical: 62,
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
        <View style={{}}>
          <TouchableOpacity>
            <View style={{alignSelf: 'center'}}>
              <Text style={{}}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({});
