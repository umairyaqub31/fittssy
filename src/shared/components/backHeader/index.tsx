import React from 'react';
import {RF} from '@theme';
import Text from '../text';
import {back, plus} from '@assets';
import {useTheme} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {navigationRef} from '@services';

const BackHeader = ({
  edit,
  width,
  title,
  onEdit,
  endIcon,
  noIcon,
  endTitle,
  navigation,
  isHorizontal,
}: {
  edit?: any;
  width?: any;
  title?: any;
  onEdit?: any;
  endIcon?: any;
  navigation?: any;
  endTitle?: any;
  noIcon?: any;
  isHorizontal?: any;
}) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(theme);

  const handleBack = () => {
    navigationRef.current.goBack();
  };

  return (
    <View style={[styles.main, {paddingHorizontal: isHorizontal ? RF(20) : 0}]}>
      {noIcon ? null : (
        <Pressable
          style={[styles.container, {backgroundColor: colors.card}]}
          onPress={handleBack}>
          <Image source={back} style={styles.img} />
        </Pressable>
      )}

      <View style={[styles.txtView]}>
        <Text bold size={16} center>
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
      height: RF(35),
      width: RF(73),
      borderWidth: 1,
      borderRadius: 20,
      borderColor: theme?.colors?.primary,
      alignItems: 'center',
      justifyContent: 'center',
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
    img: {width: RF(6), height: RF(11), tintColor: theme?.colors?.text},
    txtView: {
      // width: '65%',
      position: 'absolute',
      right: 0,
      left: 0,
    },
    main: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    container: {
      // flex: 1,

      width: RF(46),
      height: RF(46),
      zIndex: 100,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default BackHeader;
