import {
  View,
  StyleProp,
  TextStyle,
  StyleSheet,
  StatusBar,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {RF} from '@theme';
import {useTheme} from '@react-navigation/native';

interface Props extends TouchableOpacityProps {
  style?: any;
  bgColor?: any;
  icon?: string;
  onPress?: any;
  title?: string;
  children?: any;
  large?: boolean;
  colorTheme?: any;
  loading?: boolean;
  disabled?: boolean;
  titleColorProp?: string;
  disabledMessage?: boolean;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disableBackgroundColor?: boolean;
  isPaddingH?: any;
  isTop?: any;
  isMarginHorizontal?: any;
  statusBarStyle?: any;
  statusBarBagColor?: any;
  translucent?: any;
  hidden?: any;
  bgClr?: any;
}
const Wrapper = (props: Props) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(theme.colors);

  return (
    <View
      style={[
        styles.container,
        props.viewStyle,
        {
          paddingBottom: 90,
          backgroundColor: props?.bgClr ? props?.bgClr : colors.background,
          paddingTop: props?.isTop ? RF(37) : 0,
          paddingHorizontal: props?.isPaddingH ? 0 : RF(20),
          marginHorizontal: props?.isMarginHorizontal ? RF(20) : 0,
        },
      ]}>
      <StatusBar
        hidden={props?.hidden}
        translucent={props.translucent ? true : false}
        backgroundColor={
          props.statusBarBagColor ? props.statusBarBagColor : colors.background
        }
        barStyle={props.statusBarStyle ? props.statusBarStyle : colors.stausbar}
      />
      {props.children}
    </View>
  );
};

const useStyles = StyleSheet.create((color: any) => ({
  container: {
    flex: 1,
  },
}));

export default Wrapper;
