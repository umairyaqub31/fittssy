import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {BackHeader, NavigateNext, Wrapper} from '@components';
import {settingsData} from '@utils';
import {margin} from '@theme';

const Settings = ({navigation}: any) => {
  return (
    <Wrapper>
      <BackHeader title={'Settings'} startIcon navigation={navigation} />
      <FlatList
        data={settingsData}
        style={margin.top_32}
        renderItem={({item}: any) => {
          return <NavigateNext title={item.title} onPress={item.screen} />;
        }}
      />
    </Wrapper>
  );
};

export default Settings;

const styles = StyleSheet.create({});
