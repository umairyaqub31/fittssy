import {RF} from '@theme';
import {StyleSheet} from 'react-native';

export const useStyles = (colors: any) =>
  StyleSheet.create({
    line: {
      borderTopWidth: 1,
      width: '43%',
      borderColor: colors.grayText,
      top: 1,
    },
    authCard: {
      height: RF(50),
      borderRadius: 35,
      backgroundColor: colors.card,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      gap: RF(12),
    },
  });
