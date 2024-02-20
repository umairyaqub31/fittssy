import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  LinearGradient,
  LinearGradientProps,
} from 'react-native-linear-gradient';
import {useTheme} from '@react-navigation/native';

interface Props extends LinearGradientProps {
  children?: any;
  bgColor?: any;
}

const BorderGradientCard = (props: Props) => {
  const {children, bgColor} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  return (
    <View>
      <LinearGradient
        {...props}
        start={{x: 0, y: 0.6}}
        end={{x: 0.3, y: 2}}
        style={styles.linearGradient}>
        <View
          style={[
            styles.innerContainer,
            {backgroundColor: bgColor ? bgColor : colors.white},
          ]}>
          {children}
        </View>
      </LinearGradient>
    </View>
  );
};

export default BorderGradientCard;

const useStyles = (colors: any) =>
  StyleSheet.create({
    linearGradient: {
      height: 100,
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
