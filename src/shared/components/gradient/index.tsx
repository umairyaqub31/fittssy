import {RF} from '@theme';
import React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

interface Props extends LinearGradientProps {
  clrs?: any;
}
const Gradient = (props: Partial<Props>) => {
  const theme: any = useTheme();
  const colors: any = theme.colors;
  const {clrs} = props;
  return (
    <LinearGradient
      end={{x: 1, y: 0}}
      start={{x: 0, y: 0}}
      style={styles.linearGradient}
      colors={
        clrs
          ? ['#28CC9E', '#28CC9E', colors.background]
          : [colors.background, colors.background, colors.background]
      }>
      {props.children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: RF(64),
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default Gradient;
