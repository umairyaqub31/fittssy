import {RF} from '@theme';
import Text from '../text';
import React, {useState} from 'react';
import {dots, link, row} from '@assets';
import {useTheme} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, TextInput, View} from 'react-native';

const CrunchBox = ({
  mt,
  src,
  data,
  swap,
  style,
  endImg,
  editWorkout,
  onPressSwap,
}: {
  mt?: any;
  src?: any;
  data?: any;
  swap?: any;
  style?: any;
  endImg?: any;
  editWorkout?: any;
  onPressSwap?: any;
}) => {
  const theme: any = useTheme();
  const colors = theme?.colors;
  const styles = useStyles(theme);
  const [value, setValue] = useState('');

  return (
    <View
      style={[style ? style : styles.container, {marginTop: mt ? mt : RF(20)}]}>
      <Image source={row} style={styles.r} />
      <View style={styles.main}>
        <Section
          styles={styles}
          theme={theme}
          swap={swap}
          src={src}
          onPress={onPressSwap}
        />

        {editWorkout ? (
          <View style={styles.v}>
            <View style={styles.center}>
              <Text size={13} regular>
                Sets
              </Text>
              <TextInput
                // value={value}
                maxLength={1}
                textAlign="center"
                style={styles.input}
                keyboardType="numeric"
                // onChangeText={v => setValue(v)}
              />
              <View style={styles.underline} />
            </View>
            <View style={styles.bar} />

            <View style={styles.center}>
              <Text size={13} regular>
                Reps
              </Text>
              <TextInput
                // value={value}
                maxLength={1}
                textAlign="center"
                style={styles.input}
                keyboardType="numeric"
                // onChangeText={v => setValue(v)}
              />
              <View style={styles.underline} />
            </View>
            <View style={styles.bar} />

            <View style={styles.center}>
              <Text size={13} regular>
                Rest
              </Text>
              <TextInput
                // value={value}
                maxLength={1}
                textAlign="center"
                style={styles.input}
                keyboardType="numeric"
                // onChangeText={v => setValue(v)}
              />
              <View style={styles.underline} />
            </View>
            <View style={styles.bar} />

            <View style={styles.center}>
              <Text size={13} regular>
                Interval
              </Text>
              <TextInput
                // value={value}
                maxLength={1}
                textAlign="center"
                style={styles.input}
                keyboardType="numeric"
                // onChangeText={v => setValue(v)}
              />
              <View style={styles.underline} />
            </View>
          </View>
        ) : (
          <View style={styles.flexRow}>
            <Text size={16} regular>
              {data?.weight} kg
            </Text>
            <View style={styles.bar} />
            <Text size={16} regular>
              {data?.reps} Reps
            </Text>
            <View style={styles.bar} />

            <Text size={16} regular>
              {data?.rm}/1RM
            </Text>
          </View>
        )}
        {endImg && <Image source={link} style={styles.l} />}
      </View>
    </View>
  );
};

const Section = ({
  swap,
  styles,
  theme,
  src,
  onPress,
}: {
  swap?: any;
  styles?: any;
  theme?: any;
  src?: any;
  onPress?: any;
}) => {
  return (
    <>
      <View style={styles.view}>
        <View style={styles.row}>
          <Text medium size={18}>
            Abs Exercise:
          </Text>
          <Text semiBold size={18} style={styles.ml}>
            Crunch
          </Text>
          {swap && (
            <Pressable onPress={onPress}>
              <Text
                semiBold
                size={14}
                style={{marginLeft: RF(5), alignSelf: 'center'}}
                color={theme?.colors?.primary}>
                Swap
              </Text>
            </Pressable>
          )}
        </View>

        <Image source={src ? src : dots} style={styles.d} />
      </View>
      <View style={styles.line} />
    </>
  );
};

const useStyles = (theme: any) =>
  StyleSheet.create({
    underline: {
      height: 2,
      width: RF(47),
      backgroundColor: theme?.colors?.grey,
      marginTop: -5,
    },
    center: {alignItems: 'center'},
    input: {
      width: RF(47),
      height: RF(40),
      fontSize: RF(16),
      fontFamily: 'Montserrat',
      color: '#222222',
      textAlign: 'center',
    },
    v: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginTop: RF(5),
    },
    l: {
      width: RF(34),
      height: RF(34),
      alignSelf: 'flex-end',
      marginRight: RF(20),
      marginTop: RF(10),
    },
    bar: {
      width: RF(2),
      height: RF(12),
      backgroundColor: theme?.colors?.grey,
      marginTop: RF(15),
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginTop: RF(20),
    },
    line: {
      height: 1,
      backgroundColor: '#EAEAEA',
      marginTop: RF(10),
      marginHorizontal: RF(20),
    },
    view: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: RF(20),
      marginTop: RF(10),
    },
    d: {
      width: RF(21),
      height: RF(21),
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: RF(20),
      // marginTop: RF(20),
      paddingBottom: 30,
    },
    r: {
      width: RF(20),
      height: RF(20),
    },
    ml: {
      marginLeft: RF(5),
    },
    row: {
      flexDirection: 'row',
    },
    main: {
      height: RF(115),
      borderWidth: 1,
      borderColor: theme?.colors?.lightGray,
      marginLeft: RF(5),
      borderRadius: 20,
      width: '95%',
    },
  });

export default CrunchBox;
