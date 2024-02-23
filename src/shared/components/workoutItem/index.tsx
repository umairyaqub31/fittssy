import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../text';
import {margin, padding, RF} from '@theme';
import BorderGradientCard from '../borderGradientCard';

interface Props {
  colors?: any;
  item?: any;
  index?: any;
  selectedItemIndex?: any;
  onPress: (i: any) => void;
}

const WorkoutItem = (props: Props) => {
  const {colors, index, selectedItemIndex, onPress} = props;
  const styles = useStyles(colors);
  return (
    <>
      <Pressable onPress={() => onPress(index)}>
        <BorderGradientCard
          bgColor={
            index == selectedItemIndex ? colors.primaryOpacity : colors.card
          }
          innerStyle={padding.Horizontal_14}
          mainCardStyle={margin.top_14}
          colors={
            index == selectedItemIndex
              ? colors.gradientCard
              : ['transparent', 'transparent']
          }>
          <View style={[styles.row, {marginBottom: 4}]}>
            <Text
              style={{
                color:
                  index == selectedItemIndex ? colors.primary : colors.text,
              }}
              size={12}
              thin>
              Training:{' '}
            </Text>
            <Text
              style={{
                color:
                  index == selectedItemIndex ? colors.primary : colors.text,
              }}
              size={12}
              medium>
              00:40:08{' '}
            </Text>
            <View
              style={[
                styles.verticleLine,
                {
                  backgroundColor:
                    index == selectedItemIndex
                      ? colors.primary
                      : colors.grayText,
                },
              ]}
            />

            <Text
              style={{
                color:
                  index == selectedItemIndex ? colors.primary : colors.text,
              }}
              size={12}
              thin>
              {' '}
              Actual:{' '}
            </Text>
            <Text
              style={{
                color:
                  index == selectedItemIndex ? colors.primary : colors.text,
              }}
              size={12}
              medium>
              00:13:12{' '}
            </Text>
            <View
              style={[
                styles.verticleLine,
                {
                  backgroundColor:
                    index == selectedItemIndex
                      ? colors.primary
                      : colors.grayText,
                },
              ]}
            />
            <Text
              style={{
                color:
                  index == selectedItemIndex ? colors.primary : colors.text,
              }}
              size={12}
              thin>
              {' '}
              Rest:{' '}
            </Text>
            <Text
              style={{
                color:
                  index == selectedItemIndex ? colors.primary : colors.text,
              }}
              size={12}
              medium>
              00:27:59{' '}
            </Text>
          </View>

          <View style={[styles.row]}>
            <Text
              style={{
                color:
                  index == selectedItemIndex ? colors.primary : colors.text,
              }}
              size={12}
              thin>
              Idle:{' '}
            </Text>
            <Text
              style={{
                color:
                  index == selectedItemIndex ? colors.primary : colors.text,
              }}
              size={12}
              medium>
              00:00:00{' '}
            </Text>
            <View
              style={[
                styles.verticleLine,
                {
                  backgroundColor:
                    index == selectedItemIndex
                      ? colors.primary
                      : colors.grayText,
                },
              ]}
            />

            <Text
              style={{
                color:
                  index == selectedItemIndex ? colors.primary : colors.text,
              }}
              size={12}
              thin>
              {' '}
              Complete:{' '}
            </Text>
            <Text
              style={{
                color:
                  index == selectedItemIndex ? colors.primary : colors.text,
              }}
              size={12}
              medium>
              8{' '}
            </Text>
            <View
              style={[
                styles.verticleLine,
                {
                  backgroundColor:
                    index == selectedItemIndex
                      ? colors.primary
                      : colors.grayText,
                },
              ]}
            />
            <Text
              style={{
                color:
                  index == selectedItemIndex ? colors.primary : colors.text,
              }}
              size={12}
              thin>
              {' '}
              Weight:{' '}
            </Text>
            <Text
              style={{
                color:
                  index == selectedItemIndex ? colors.primary : colors.text,
              }}
              size={12}
              medium>
              6896.0 kg{' '}
            </Text>
          </View>

          <View style={styles.lineStyle} />

          <Text
            style={{
              color: index == selectedItemIndex ? colors.primary : colors.text,
            }}
            size={18}
            semiBold>
            Workout 2
          </Text>
        </BorderGradientCard>
      </Pressable>
    </>
  );
};

export default WorkoutItem;

const useStyles = (colors: any) =>
  StyleSheet.create({
    footerDot: {
      height: 12,
      width: 12,
      borderRadius: 6,
      marginRight: 6,
    },
    footerText: {
      color: colors.grayText,
    },
    dateText: {
      color: colors.text,
    },
    listItemContainer: {
      height: RF(105),
      backgroundColor: colors.card,
      marginBottom: 20,
      borderRadius: 16,
    },
    verticleLine: {
      height: '65%',
      width: 1,
      //   backgroundColor: '#909090',
    },
    lineStyle: {
      borderBottomColor: 'gray',
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginVertical: 10,
    },
    row: {flexDirection: 'row', alignItems: 'center'},
  });
