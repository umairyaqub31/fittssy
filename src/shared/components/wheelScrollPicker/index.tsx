import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {RF} from '@theme';
import Text from '../text';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

import {useTheme} from '@react-navigation/native';

interface Props {
  data?: any;
  handleChange: (value: any) => void;
}

const WheelScrollPicker = (props: Props) => {
  const {data, handleChange} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <>
      <View
        style={{
          height: RF(250),
          width: RF(65),
          backgroundColor: 'green',
          //   alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            position: 'absolute',
            height: RF(35),
            borderRadius: 22,
            width: RF(65),
            backgroundColor: colors.card,
            opacity: 0.5,
            zIndex: 0.5,
            alignSelf: 'center',
          }}
        />
        <ScrollPicker
          dataSource={data}
          selectedIndex={2}
          renderItem={(item, data, index) => {
            return (
              <>
                <Text
                  size={18}
                  medium
                  center
                  style={{opacity: index === true ? 1 : 0.5}}
                  color={index === true ? colors.text : colors.grayText}>
                  {item}
                </Text>
              </>
            );
            //
          }}
          onValueChange={(data, selectedIndex) => {
            handleChange(data);
            // console.log(data);
          }}
          wrapperHeight={RF(250)}
          wrapperBackground={colors.background}
          itemHeight={RF(35)}
          highlightColor={'#fff'}
          activeItemTextStyle={styles.height}
          itemTextStyle={styles.height}
        />
      </View>
    </>
  );
};

export default WheelScrollPicker;

const styles = StyleSheet.create({
  height: {
    height: 50,
    color: 'red',
  },
});
