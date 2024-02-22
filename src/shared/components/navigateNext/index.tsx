import {StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import Text from '../text';
import {next} from '@assets';
import {icon, RF} from '@theme';
import {navigate} from '@services';

interface Props {
  onPress: any;
  title: any;
}

const NavigateNext = (props: Props) => {
  const {onPress, title} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);

  return (
    <Pressable style={styles.between} onPress={() => navigate(onPress, '')}>
      <Text semiBold color={colors.text} size={16}>
        {title}
      </Text>
      <Image source={next} style={icon._14} tintColor={colors.text} />
    </Pressable>
  );
};

export default NavigateNext;

const useStyles = (colors: any) =>
  StyleSheet.create({
    between: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: RF(16),
      borderBottomWidth: 1,
      borderColor: colors.card,
      marginTop: RF(16),
    },
  });
