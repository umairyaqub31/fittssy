import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {PrimaryButton} from '@components';
import {RF} from '@theme';
import {Text} from '@components';
import {Image} from 'react-native';
import {logsImage, p_link} from '@assets';

const WorkoutLogs = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  return (
    <View style={{flex: 1}}>
      <View
        style={[
          styles.row,
          {justifyContent: 'flex-end', marginTop: 7, marginBottom: 16},
        ]}>
        <PrimaryButton
          width={111}
          height={44}
          title={'Share'}
          bgColor={colors.primary}
          textColor={colors.white}
          // onPress={() => navigate('GetInformation', '')}
        />
      </View>
      {/* <Text>WorkoutLogs</Text> */}
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5]}
          renderItem={({item, index}) => (
            <ListItem
              //   selectedItemIndex={selectedItemIndex}
              //   setSelectedItemIndex={setSelectedItemIndex}
              colors={colors}
              item={item}
              index={index}
              styles={styles}
              //   onPress={handlePressWorkout}
            />
          )}
        />
      </View>
    </View>
  );
};

export default WorkoutLogs;

const ListItem = (props: any) => {
  const {colors, item, index, styles, onPress} = props;

  return (
    <View style={styles.listItemContainer}>
      <Text
        style={{
          color: colors.text,
        }}
        size={14}
        semiBold>
        Egyptian Lateral Raise
      </Text>
      <View style={styles.lineStyle} />
      <View style={styles.row}>
        <View style={styles.imageView}>
          <Image source={logsImage} style={styles.img} />
        </View>
        <View style={{}}>
          {[1, 2, 3].map((i: any, index: any) => (
            <View style={[styles.row, {marginBottom: 4}]} key={index}>
              <Text
                style={{
                  color: colors.text,
                }}
                size={12}
                thin>
                Set 1:{' '}
              </Text>
              <Text
                style={{
                  color: colors.text,
                }}
                size={14}
                medium>
                23 kg x 8{' '}
              </Text>
              <View style={styles.verticleLine} />
              <Text
                style={{
                  color: colors.text,
                }}
                size={12}
                medium>
                {' '}
                00:00:58
              </Text>
            </View>
          ))}
          <View style={styles.row}>
            <Text
              style={{
                color: colors.primary,
              }}
              size={12}
              thin>
              Best 1RM:{' '}
            </Text>
            <Text
              style={{
                color: colors.primary,
              }}
              size={12}
              medium>
              29.1
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          alignSelf: 'flex-end',
          zIndex: 10,
          // position: 'absolute',
          // bottom: -28,
          // right: 10,
        }}>
        <Image source={p_link} style={styles._link} />
      </View>
    </View>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    listItemContainer: {
      height: RF(143),
      backgroundColor: colors.background,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: colors.card,
      borderRadius: 16,
      padding: 14,
    },
    lineStyle: {
      borderBottomColor: colors.card,
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginVertical: 10,
    },
    row: {flexDirection: 'row', alignItems: 'center'},
    verticleLine: {
      height: '65%',
      width: 1,
      backgroundColor: colors.grayText,
    },
    imageView: {
      width: 68,
      height: 68,
      marginRight: 14,
    },
    img: {
      resizeMode: 'cover',
      width: 68,
      height: 68,
      // transform: [{scale: 0.55}],
    },
    _link: {
      width: 34,
      height: 34,
    },
  });
