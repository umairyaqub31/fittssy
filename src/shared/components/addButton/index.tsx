import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {RF} from '@theme';
import Text from '../text';
import {plus} from '@assets';
import {useTheme} from '@react-navigation/native';

interface Props {
  onPress: any;
  center?: any;
  title?: any;
  source?: any;
}

const AddButton = (props: Props) => {
  const {onPress, center, title, source} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);

  return (
    <View
      style={{
        alignSelf: center ? 'center' : 'auto',
        alignItems: 'center',
      }}>
      <Pressable style={styles.innerView} onPress={onPress}>
        <Image source={source ? source : plus} style={styles.pImg} />
      </Pressable>
      <Text size={14} regular>
        {title ? title : 'Add Exercise'}
      </Text>
    </View>
  );
};

export default AddButton;

const useStyles = (colors: any) =>
  StyleSheet.create({
    pImg: {
      width: RF(30),
      tintColor: colors.text,
      height: RF(30),
    },
    innerView: {
      width: RF(58),
      height: RF(58),
      borderWidth: 1,
      borderRadius: 100,
      alignItems: 'center',
      backgroundColor: colors.card,
      marginBottom: RF(10),
      borderColor: '#D1D1D1',
      justifyContent: 'center',
    },
  });
