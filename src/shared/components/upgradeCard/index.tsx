import {StyleSheet, View, Image, Pressable} from 'react-native';
import React from 'react';
import BorderGradientCard from '../borderGradientCard';
import {useTheme} from '@react-navigation/native';
import Text from '../text';
import {icon, margin, RF} from '@theme';
import {next} from '@assets';
import {navigate} from '@services';

const UpGradeCard = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  return (
    <Pressable onPress={() => navigate('SelectPlan')}>
      <BorderGradientCard
        innerStyle={styles.gradientInnerCard}
        colors={['transparent', 'transparent']}
        bgColor={colors.background}>
        <BorderGradientCard
          mainCardStyle={{height: 25, width: 58}}
          colors={colors.gradientCard}
          bgColor={colors.primaryOpacity}>
          <Text size={12} semiBold center color={colors.primary}>
            PRO
          </Text>
        </BorderGradientCard>
        <Text
          size={16}
          semiBold
          center
          color={colors.text}
          style={margin.top_8}>
          Upgrade to Premium
        </Text>
        <Text
          size={12}
          semiBold
          center
          color={colors.grayText}
          style={margin.top_4}>
          This subscription is auto-renewable
        </Text>
        <Image
          source={next}
          style={{
            ...icon._14,
            position: 'absolute',
            right: RF(24),
          }}
          tintColor={colors.text}
        />
      </BorderGradientCard>
    </Pressable>
  );
};

export default UpGradeCard;

const useStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    imgView: {
      height: RF(104),
      width: RF(104),
      borderRadius: 55,
      marginBottom: RF(8),
      overflow: 'hidden',
    },
    prof_Image: {
      height: '100%',
      width: '100%',
    },
    gap: {
      gap: 5,
    },
    between: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: RF(16),
      borderBottomWidth: 1,
      borderColor: colors.card,
      marginTop: RF(16),
    },
    logOut: {
      borderBottomWidth: 1,
      borderTopWidth: 1,
      paddingVertical: RF(16),
      gap: 10,
      flexDirection: 'row',
      width: '100%',
      borderColor: colors.card,
      marginBottom: RF(20),
    },
    justify: {
      justifyContent: 'space-between',
    },
    gradientInnerCard: {
      borderWidth: 1,
      borderColor: colors.card,
      alignItems: 'flex-start',
      padding: 10,
    },
  });
