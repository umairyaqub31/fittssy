import React from 'react';
import {RF} from '@theme';
import Text from '../text';
import {back, plus} from '@assets';
import {useTheme} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, View} from 'react-native';

const BackHeader = ({
  title,
  endIcon,
  navigation,
}: {
  title?: any;
  endIcon?: any;
  navigation?: any;
}) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(theme);

  return (
    <View style={styles.main}>
      <Pressable
        style={[styles.container, {backgroundColor: colors?.lightGray}]}
        onPress={() => navigation.goBack()}>
        <Image source={back} style={styles.img} />
      </Pressable>
      <View style={styles.txtView}>
        <Text bold size={16}>
          {title}
        </Text>
      </View>

      {endIcon && (
        <View style={styles.imgView}>
          <Image source={plus} style={styles.image} />
        </View>
      )}
    </View>
  );
};

const useStyles = (theme: any) =>
  StyleSheet.create({
    image: {width: RF(25), height: RF(25)},
    imgView: {
      width: RF(50),
      height: RF(50),
      borderWidth: 1,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme?.colors?.borderGray,
    },
    img: {width: RF(6), height: RF(11)},
    txtView: {
      width: '70%',
      alignItems: 'center',
    },
    main: {
      marginTop: RF(40),
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: RF(20),
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
