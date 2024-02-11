import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import Text from '../text';
import {RF} from '@theme';

interface Props {
  initialState?: any;
  title1?: any;
  title2?: any;
  onPress: (text: any) => void;
}

const ShiftCards = (props: Props) => {
  const {initialState, title1, title2, onPress} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <View style={styles.selectedView}>
      <Pressable
        onPress={() => onPress(title1)}
        style={{
          width: '50%',
          backgroundColor:
            initialState == title1 ? colors.primary : colors.card,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          color={initialState == title1 ? colors.white : colors.grayText}
          semiBold>
          {title1}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => onPress(title2)}
        style={{
          width: '50%',
          backgroundColor:
            initialState == title2 ? colors.primary : colors.card,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          color={initialState == title2 ? colors.white : colors.grayText}
          semiBold>
          {title2}
        </Text>
      </Pressable>
    </View>
  );
};

export default ShiftCards;

const styles = StyleSheet.create({
  selectedView: {
    width: RF(137),
    // borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 33,
    overflow: 'hidden',
    height: RF(37),
    marginTop: RF(20),
    alignSelf: 'center',
  },
});
