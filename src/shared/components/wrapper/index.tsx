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
  const styles = useStyles(theme.colors);

  return (
    <View
      style={[
        styles.container,
        props.viewStyle,
        {
          backgroundColor: props?.bgClr ? props?.bgClr : '#fff',
          paddingTop: props?.isTop ? RF(43) : 0,
          paddingHorizontal: props?.isPaddingH ? props?.isPaddingH : RF(20),
          marginHorizontal: props?.isMarginHorizontal ? RF(20) : 0,
        },
      ]}>
      <StatusBar
        hidden={props?.hidden}
        translucent={props.translucent ? true : false}
        backgroundColor={
          props.statusBarBagColor ? props.statusBarBagColor : 'white'
        }
        barStyle={props.statusBarStyle ? props.statusBarStyle : 'dark-content'}
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
