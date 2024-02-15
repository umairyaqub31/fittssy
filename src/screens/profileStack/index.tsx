import {StyleSheet, Image, View, Pressable} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setIsLoggedIn} from '@redux';
import {Text, Wrapper} from '@components';
import {logout, next, premium, prof} from '@assets';
import {flex, icon, margin, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import {navigate} from '@services';

const ProfileOverview = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);
  const dispatch = useDispatch();
  const {userImg} = useSelector((state: any) => state.root.user);

  const handleLogout = () => {
    dispatch(setIsLoggedIn(false));
  };

  return (
    <Wrapper isTop viewStyle={styles.justify}>
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
          <Image source={premium} style={icon._14} />
          <Text medium color={colors.primary} size={16}>
            Premium User
          </Text>
        </View>
        <Text color={colors.grayText} style={margin.top_8}>
          Joined: 2 months ago
        </Text>
        <Pressable
          style={styles.between}
          onPress={() => navigate('EditProfile', '')}>
          <Text semiBold color={colors.text} size={16}>
            Edit Profile
          </Text>
          <Image source={next} style={icon._14} />
        </Pressable>
        <Pressable
          style={styles.between}
          onPress={() => navigate('PrivacyPolicy', '')}>
          <Text semiBold color={colors.text} size={16}>
            Privacy Policy
          </Text>
          <Image source={next} style={icon._14} />
        </Pressable>
        <Pressable
          style={[styles.between, {borderBottomWidth: 0}]}
          onPress={() => navigate('Settings', '')}>
          <Text semiBold color={colors.text} size={16}>
            Settings
          </Text>
          <Image source={next} style={icon._14} />
        </Pressable>
      </View>
      <Pressable style={styles.logOut} onPress={handleLogout}>
        <Image source={logout} style={icon._24} />
        <Text semiBold color={colors.primary} size={16}>
          Sign Out
        </Text>
      </Pressable>
    </Wrapper>
  );
};

export default ProfileOverview;

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
  });
