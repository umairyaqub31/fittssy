import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@react-navigation/native';
import {BorderGradientCard, Text, Wrapper} from '@components';
import {margin} from '@theme';
import {navigate} from '@services';

const data = [
  {id: 0, title1: 'Bulking: 3 Days', title2: 'Benji 3 Day Plan'},
  {id: 1, title1: 'Bulking: 3 Days', title2: 'pmegyes’s 3 Day Plan'},
  {id: 2, title1: 'Bulking: 4 Days', title2: '5day PPL Plan'},
];

const InsightOverview = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const [selected, setSelected] = useState<any>();

  const handleCard = (item: any) => {
    setSelected(item.id);
    navigate('CurrentPlan', {item});
  };
  const unselectgradientColor = [colors.card, colors.card, colors.card];
  return (
    <Wrapper isTop>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <Pressable style={margin.top_20} onPress={() => handleCard(item)}>
              <BorderGradientCard
                bgColor={colors.white}
                colors={
                  selected == item.id
                    ? colors?.gradientCard
                    : unselectgradientColor
                }>
                <Text size={12} regular center color={colors.grayText}>
                  {item.title1}
                </Text>
                <Text
                  size={18}
                  semiBold
                  center
                  style={margin.top_12}
                  color={colors.text}>
                  {item.title2}
                </Text>
              </BorderGradientCard>
            </Pressable>
          );
        }}
      />
    </Wrapper>
  );
};

export default InsightOverview;

const useStyles = (colors: any) =>
  StyleSheet.create({
    linearGradient: {
      height: 106,
      width: '90%',
      marginTop: 50,
      alignSelf: 'center',
      borderRadius: 16, // <-- Outer Border Radius
    },
    innerContainer: {
      borderRadius: 16, // <-- Inner Border Radius
      flex: 1,
      margin: 1,
      backgroundColor: colors.primaryOpacity,
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 10,
      color: '#cc2b5e',
      backgroundColor: 'transparent',
    },
  });
