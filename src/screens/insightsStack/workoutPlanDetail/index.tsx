import {FlatList, Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {BackHeader, Text, Wrapper} from '@components';
import {margin, RF} from '@theme';
import {detailData} from '@utils';
import {navigate} from '@services';

const WorkoutPlanDetail = ({route, navigation}: any) => {
  const {item} = route.params;

  const handlePress = (item: any) => {
    navigate('PlanDetailGraph', {item: item});
  };

  return (
    <Wrapper isTop>
      <BackHeader title={item.title} startIcon navigation={navigation} />
      <FlatList
        style={margin.top_8}
        data={detailData}
        renderItem={({item}: any) => {
          return (
            <Pressable
              style={styles.direction}
              onPress={() => handlePress(item)}>
              <View style={styles.imageView}>
                <Image
                  source={{
                    uri: 'https://s3-alpha-sig.figma.com/img/b22d/321c/946c7f6b41ccce39a378ce9817e23df0?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S9cipGG49ZlK4mIDeeOAfNyVYxqB2jUscGw5LzNZpnBoI2t7JlIQ4Nb7UJ8C6MoY0f5x7jAB5VB~qSu21MntqTsu430PYTUrfnI~0eDO2TIVVenBKweeCPzwJ7SHt-szKALhfVb50fX7jY0NMB94H-kE0z2GbNxW4baPQ24y-j7r5fFRc1s2K1EFNoQKerxrE151HVOMOk1T6CCzrGFw7l18W2Tu9-bp1j9LXkN66CID1YHfVkWyM5pa0aQOurrj67XS7dWfOmnd1GhsBAyi4lxKGSOHJ6A9Iu9onqyn9NJF9068eNuu9Kz8OGZCoBjsSr6y7fALCCw~ZgquCIXHSw__',
                  }}
                  style={{height: '100%', width: '100%'}}
                />
              </View>
              <Text size={16} semiBold style={margin.left_14}>
                {item.name}
              </Text>
            </Pressable>
          );
        }}
      />
    </Wrapper>
  );
};

export default WorkoutPlanDetail;

const styles = StyleSheet.create({
  imageView: {
    height: RF(56),
    width: RF(56),
    overflow: 'hidden',
    borderRadius: 30,
  },
  direction: {
    flexDirection: 'row',
    marginTop: RF(24),
  },
});
