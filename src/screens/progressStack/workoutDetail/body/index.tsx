import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  BorderGradientCard,
  GradientCard,
  PrimaryButton,
  Text,
} from '@components';
import {gradientFlex} from '@assets';
import {useTheme} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import {flex, margin, RF} from '@theme';

const category = [
  {id: 0, title: 'Weight'},
  {id: 1, title: 'Body Fat'},
  {id: 2, title: 'Waist'},
  {id: 3, title: 'Chest'},
  {id: 4, title: 'Arms'},
  {id: 5, title: 'Forearms'},
  {id: 6, title: 'Shoulders'},
  {id: 7, title: 'Hips'},
  {id: 8, title: 'Thighs'},
  {id: 9, title: 'Calves'},
  {id: 10, title: 'Neck'},
  {id: 11, title: 'Height'},
];

const WorkoutBody = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View
          style={{
            width: '70%',
            alignSelf: 'flex-end',
            marginVertical: RF(16),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text size={14} color={colors.primary}>
            Current
          </Text>
          <Text size={14}>Progress</Text>
          <Text size={14}>Goal</Text>
        </View>
        <FlatList
          scrollEnabled={false}
          data={category}
          renderItem={({item}: any) => {
            return (
              <View style={{...flex.rowBetween, marginTop: 12}}>
                <Text size={16}>{item.title}</Text>
                <View style={{...flex.rowBetween, width: '70%'}}>
                  <BorderGradientCard
                    start={{x: 0, y: 0}}
                    end={{x: 0.5, y: 1.2}}
                    bgColor={colors.primaryOpacity}
                    colors={colors.gradientCard}
                    mainCardStyle={styles.smallCard}
                    innerStyle={styles.innerCard}>
                    <Text size={16}>0.0</Text>
                  </BorderGradientCard>
                  <View style={styles.center}>
                    <Text
                      size={12}
                      color={colors.primary}
                      style={{marginTop: -15, marginBottom: 4}}>
                      0%
                    </Text>
                    <Progress.Bar style={styles.bar} />
                  </View>
                  <Text size={16}>N/A</Text>
                </View>
              </View>
            );
          }}
        />
        <PrimaryButton title={'Save'} containerStyle={margin.top_24} />
      </View>
    </ScrollView>
  );
};

export default WorkoutBody;

const useStyles = (colors: any) =>
  StyleSheet.create({
    innerCard: {
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
    },
    smallCard: {width: 54, height: 32, borderRadius: 6},
    bar: {
      backgroundColor: colors.card,
      height: RF(8),
      borderWidth: 0,
      width: RF(110),
    },
    center: {alignItems: 'center'},
  });
