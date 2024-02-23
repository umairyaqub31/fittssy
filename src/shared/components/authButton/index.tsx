import {StyleSheet, View, Pressable, Image} from 'react-native';
import React from 'react';
import {icon, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import Text from '../text';

interface Props {
  src?: any;
  title?: any;
  style?: any;
}

const AuthButtons = (props: Props) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const {src, title, style} = props;
  return (
    <View style={style}>
      <Pressable style={styles.authCard}>
        <Image source={src} style={{...icon._20, tintColor: colors.text}} />
        <Text color={colors.grayText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default AuthButtons;

const useStyles = (colors: any) =>
  StyleSheet.create({
    authCard: {
      height: RF(48),
      borderRadius: 35,
      backgroundColor: colors.card,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      gap: RF(12),
    },
  });
