import {RF} from '@theme';
import React, {useState} from 'react';
import Text from '../text';
import {useTheme} from '@react-navigation/native';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {dots, greenBox, stat} from '@assets';

const PlanBox = ({
  onPress,
  onClickEdit,
  label,
  description,
  status,
  index,
}: {
  onPress?: any;
  label?: any;
  description?: any;
  status?: any;
  index?: any;
  onClickEdit: (i: any) => void;
}) => {
  const theme: any = useTheme();
  const colors: any = theme.colors;
  const styles = useStyles(theme);
  const [cardSwitch, setCardSwitch] = useState<any>('Current');
  const [condition, setCondition] = useState();

  const handleSwitch = (i: any) => {
    setCondition(i);
    // if (condition == i) {
    //   console.log(condition, '...condition');

    //   setCardSwitch('Current');
    // } else {
    //   setCardSwitch('Switch');
    // }
  };

  console.log(condition, '......innnn');

  return (
    <Pressable onPress={onPress} style={styles.main}>
      <View style={styles.outer}>
        {condition == index ? (
          <ImageBackground
            source={greenBox}
            imageStyle={styles.bgImg}
            style={styles.image}>
            <Text
              onPress={() => handleSwitch(index)}
              color={theme?.colors?.primary}
              size={14}
              regular
              style={styles.s}>
              {status}
            </Text>
          </ImageBackground>
        ) : (
          <Text
            onPress={() => handleSwitch(index)}
            color={theme?.colors?.primary}
            size={14}
            regular
            style={styles.status}>
            {condition == index ? 'Current' : 'Switch'}
          </Text>
        )}
        <Text color={colors.text} size={12} regular style={styles.ml}>
          {label}
        </Text>
        <Pressable onPress={() => onClickEdit(description)}>
          <Image source={dots} style={styles.img} />
        </Pressable>
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
      marginTop: RF(11),
    },
    bgImg: {
      width: RF(69),
      height: RF(27),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default PlanBox;
