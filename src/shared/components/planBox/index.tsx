import {RF} from '@theme';
import React from 'react';
import Text from '../text';
import {useTheme} from '@react-navigation/native';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {dots, greenBox} from '@assets';

const PlanBox = ({
  onPress,
  label,
  description,
  status,
}: {
  onPress?: any;
  label?: any;
  description?: any;
  status?: any;
}) => {
  const theme: any = useTheme();
  const styles = useStyles(theme);

  return (
    <Pressable onPress={onPress} style={styles.main}>
      <View style={styles.outer}>
        {status == 'Current' ? (
          <ImageBackground
            source={greenBox}
            imageStyle={styles.bgImg}
            style={styles.image}>
            <Text
              color={theme?.colors?.primary}
              size={14}
              regular
              style={styles.s}>
              {status}
            </Text>
          </ImageBackground>
        ) : (
          <Text
            color={theme?.colors?.primary}
            size={14}
            regular
            style={styles.status}>
            {status}
          </Text>
        )}
        <Text color={'black'} size={12} regular style={styles.ml}>
          {label}
        </Text>
        <Image source={dots} style={styles.img} />
      </View>
      <Text align semiBold size={18}>
        {description}
      </Text>
    </Pressable>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    ml: {
      marginLeft: RF(-5),
      marginTop: RF(10),
    },
    img: {
      width: RF(21),
      height: RF(21),
      marginRight: RF(20),
    },
    outer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    image: {
      marginVertical: RF(10),
      marginTop: RF(20),
    },
    s: {marginTop: 3, marginLeft: RF(5)},
    status: {
      marginVertical: RF(10),
      marginTop: RF(20),
      marginLeft: RF(15),
    },
    main: {
      height: RF(99),
      borderWidth: 1,
      borderColor: colors?.colors?.lightGray,
      borderRadius: 30,
      marginVertical: RF(11),
    },
    bgImg: {
      width: RF(69),
      height: RF(27),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default PlanBox;
