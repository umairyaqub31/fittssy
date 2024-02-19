import {StyleSheet, View} from 'react-native';
import React from 'react';
import {RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import Swiper, {SwiperProps} from 'react-native-swiper';
import Text from '../text';
import {Innerprops} from './props';

interface Props extends SwiperProps {}

const SwipeHeader = (props: Props) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  return (
    <Swiper {...props} {...Innerprops(styles)}>
      <View style={styles.contentView}>
        <Text size={16} bold color={colors.text}>
          Today
          <Text size={14} regular color={colors.text}>
            (Wed 27/11/23)
          </Text>
        </Text>
      </View>
      <View style={styles.contentView}>
        <Text size={16} bold color={colors.text}>
          Tomorrow
          <Text size={14} regular color={colors.text}>
            (Wed 28/11/23)
          </Text>
        </Text>
      </View>
    </Swiper>
  );
};

export default SwipeHeader;

const useStyles = (colors: any) =>
  StyleSheet.create({
    contentView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
    container: {
      flex: 1 / 10,
      alignItems: 'flex-start',
      padding: 0,
      paddingVertical: 0,
      backgroundColor: colors.background,

      margin: 0,
      marginVertical: 0,
      justifyContent: 'flex-start',
    },
    buttonWrapper: {
      alignItems: 'flex-start',
      paddingVertical: 0,
    },

    null: {
      width: 0,
      height: 0,
    },
  });
