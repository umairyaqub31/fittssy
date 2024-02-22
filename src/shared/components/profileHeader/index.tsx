import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {flex, margin, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import Text from '../text';
import {prof} from '@assets';

interface Props {
  userImg: any;
}

const ProfileHeader = (props: Props) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const {userImg} = props;
  return (
    <View style={styles.container}>
      <View style={styles.imgView}>
        <Image
          source={userImg ? {uri: userImg} : prof}
          style={styles.prof_Image}
        />
      </View>
      <Text bold color={colors.text} size={22}>
        Sarah Wegan
      </Text>

      <View style={[flex.rowSimple, styles.gap]}>
        {/* <Image source={premium} style={icon._14} /> */}
        <Text medium color={colors.primary} size={16}>
          Standard User
        </Text>
      </View>
      <Text color={colors.grayText} style={margin.top_8}>
        Joined: 2 months ago
      </Text>
    </View>
  );
};

export default ProfileHeader;

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
  });
