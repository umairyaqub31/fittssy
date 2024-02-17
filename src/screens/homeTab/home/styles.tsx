import {RF, SCREEN_WIDTH} from '@theme';
import {StyleSheet} from 'react-native';

const useStyles = (colors: any) =>
  StyleSheet.create({
    buttonView: {
      alignSelf: 'center',
      zIndex: 100,
    },
    text: {width: RF(170), marginTop: RF(20), gap: RF(4)},
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
