import {StyleSheet, View} from 'react-native';
import React from 'react';
import {RF} from '@theme';
import Text from '../text';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

import {useTheme} from '@react-navigation/native';

const WheelScrollPicker = () => {
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <>
      <View
        style={{
          height: RF(250),
          width: RF(65),
          borderWidth: 1,
          //   alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ScrollPicker
          dataSource={['1', '2', '3', '4', '5', '6', '7']}
          selectedIndex={3}
          renderItem={(item, data, index) => {
            console.log(index, '.....index');

            return (
              <>
                <Text
                  size={18}
                  semiBold
                  center
                  style={{width: '100%'}}
                  color={index == true ? '#000' : colors.fadeGray}>
                  {item}
                </Text>
              </>
            );
            //
          }}
          onValueChange={(data, selectedIndex) => {
            console.log(data);
          }}
          wrapperHeight={250}
          wrapperBackground="#FFFFFF"
          itemHeight={RF(30)}
          highlightColor="#d8d8d8"
          highlightBorderWidth={2}
        />
      </View>
    </>
  );
};

export default WheelScrollPicker;

const styles = StyleSheet.create({});
