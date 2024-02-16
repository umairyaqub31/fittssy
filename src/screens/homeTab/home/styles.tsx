import {RF, SCREEN_WIDTH} from '@theme';
import {StyleSheet} from 'react-native';

const useStyles = (colors: any) =>
  StyleSheet.create({
    MainContainer: {
      marginTop: RF(24),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    ImageView: {
      width: RF(46),
      height: RF(46),
      backgroundColor: colors.card,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: RF(24),
    },
    ImageStyle: {
      width: RF(12),
      height: RF(12),
      resizeMode: 'contain',
      tintColor: colors.text,
    },
    rowStyles: {flexDirection: 'row', alignItems: 'center'},
    ImageBackgroundStyle: {
      width: SCREEN_WIDTH,
      alignSelf: 'center',
      height: '100%',
      justifyContent: 'flex-end',
    },
    TabStyle: {flexDirection: 'row', alignItems: 'center', marginTop: RF(16)},
  });

export default useStyles;
