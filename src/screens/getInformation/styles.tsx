import {RF} from '@theme';
import {StyleSheet} from 'react-native';

const useStyles = (colors: any) =>
  StyleSheet.create({
    bar: {
      backgroundColor: colors.card,
      height: RF(8),
      borderWidth: 0,
      marginLeft: RF(24),
    },
  });

export default useStyles;
