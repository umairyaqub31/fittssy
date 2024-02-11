import React from 'react';
import {RF} from '@theme';
import Text from '../text';
import {back, plus} from '@assets';
import {useTheme} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, View} from 'react-native';

const BackHeader = ({
  edit,
  width,
  title,
  onEdit,
  endIcon,
  endTitle,
  navigation,
}: {
  edit?: any;
  width?: any;
  title?: any;
  onEdit?: any;
  endIcon?: any;
  navigation?: any;
  endTitle?: any;
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
      <View style={[styles.txtView, {width: width ? width : '70%'}]}>
        <Text bold size={16}>
          {title}
        </Text>
      </View>

      {endIcon ? (
        <View style={styles.imgView}>
          <Image source={plus} style={styles.image} />
        </View>
      ) : edit ? (
        <Pressable style={styles.border} onPress={onEdit}>
          <Text color={theme?.colors?.primary} size={14} medium>
            {endTitle ? endTitle : 'Edit'}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
};

const useStyles = (theme: any) =>
  StyleSheet.create({
    border: {
      width: RF(73),
      height: RF(35),
      borderWidth: 1,
      borderRadius: 20,
      borderColor: theme?.colors?.primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 30,
    },
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
      // width: '65%',
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
