import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  LinearGradient,
  LinearGradientProps,
} from 'react-native-linear-gradient';
import {useTheme} from '@react-navigation/native';

interface Props extends LinearGradientProps {
  children?: any;
  bgColor?: any;
  innerStyle?: any;
  mainCardStyle?: any;
}

const BorderGradientCard = (props: Props) => {
  const {children, bgColor, innerStyle, mainCardStyle} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  return (
    <LinearGradient
      {...props}
      start={{x: 0, y: 0.6}}
      end={{x: 0.3, y: 2}}
      style={[styles.linearGradient, mainCardStyle]}>
      <View
        style={[
          styles.innerContainer,
          {backgroundColor: bgColor ? bgColor : colors.white},
          innerStyle,
        ]}>
        {children}
      </View>
    </LinearGradient>
  );
};

export default BorderGradientCard;

const useStyles = (colors: any) =>
  StyleSheet.create({
    linearGradient: {
      height: 105,
      width: '100%',
      borderRadius: 16, // <-- Outer Border Radius
    },
    innerContainer: {
      borderRadius: 16, // <-- Inner Border Radius
      flex: 1,
      margin: 1,
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 10,
      color: '#cc2b5e',
      backgroundColor: 'transparent',
    },
  });
