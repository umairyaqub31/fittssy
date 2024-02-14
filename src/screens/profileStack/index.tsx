import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setIsLoggedIn} from '@redux';

const ProfileOverview = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text onPress={() => dispatch(setIsLoggedIn(false))}>logout</Text>
    </View>
  );
};

export default ProfileOverview;

const styles = StyleSheet.create({});
