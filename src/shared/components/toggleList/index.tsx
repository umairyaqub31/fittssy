import React from 'react';
import ToggleButton from '../toggleButton';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import Text from '../text';
import {RF} from '@theme';

const ToggleList = ({
  data,
  onToggle,
  selected,
}: {
  data?: any;
  onToggle?: any;
  selected?: any;
}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}: any) => {
        return (
          <View style={styles.list}>
            <ToggleButton
              onToggle={() => onToggle(item, index)}
              toggle={selected == index ? true : false}
            />
            <Text style={styles.text} size={14} medium>
              {item?.title}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: RF(20),
  },
});

export default ToggleList;
