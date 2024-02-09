import React from 'react';
import {RF} from '@theme';
import Text from '../text';
import {back} from '@assets';
import {useTheme} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, View} from 'react-native';

const BackHeader = ({title, navigation}: {title?: any; navigation?: any}) => {
  const theme: any = useTheme();
  const colors = theme.colors;

  return (
    <View style={styles.main}>
      <Pressable
        style={[styles.container, {backgroundColor: colors?.lightGray}]}
        onPress={() => navigation.goBack()}>
        <Image source={back} style={styles.img} />
      </Pressable>
      <View style={styles.txtView}>
        <Text bold>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {width: RF(6), height: RF(11)},
  txtView: {
    width: '70%',
    alignItems: 'center',
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: RF(20),
    marginTop: RF(40),
  },
  container: {
    width: RF(46),
    height: RF(46),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BackHeader;
