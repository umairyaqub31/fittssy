import {StyleSheet, Image, View, Pressable, FlatList} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setIsLoggedIn} from '@redux';
import {
  NavigateNext,
  ProfileHeader,
  Text,
  UpGradeCard,
  Wrapper,
} from '@components';
import {logout, next, prof} from '@assets';
import {flex, icon, margin, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import {navigate} from '@services';
import {profileData} from '@utils';

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
    <Wrapper viewStyle={styles.justify}>
      <ProfileHeader userImg={userImg} />
      <View>
        <FlatList
          data={profileData}
          renderItem={({item, index}: any) => {
            return <NavigateNext title={item.title} onPress={item.screen} />;
          }}
        />
      </View>

      {/* .............Premium Card.......... */}
      <UpGradeCard />

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
