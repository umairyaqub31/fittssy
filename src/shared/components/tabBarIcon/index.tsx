import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import {RF} from '@theme';
import {useTheme} from '@react-navigation/native';

interface Props {
  source?: any;
  focused?: any;
  activeStack?: any;
  onPress: (text: any) => void;
}

const TabBarIcon = (props: Props) => {
  const {source, focused, activeStack, onPress} = props;
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <Pressable
      style={{
        height: RF(55),
        width: RF(55),
        borderWidth: 1,
        borderRadius: RF(30),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: focused ? colors.primary : colors.card,
      }}
      onPress={() => onPress(activeStack)}>
      <View
        style={{
          height: RF(45),
          width: RF(45),
          borderWidth: 1,
          borderRadius: RF(30),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: RF(35),
            width: RF(35),
            borderWidth: 1,
            borderRadius: RF(30),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={source}
            style={[
              styles.image,
              {
                tintColor: focused ? '#00538F' : '#949494',
              },
            ]}
            resizeMode={'contain'}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  image: {width: 24, height: 24, opacity: 100},
  img: {},
  tabIcon: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  tabBarStyle: {
    height: 75,
    width: '100%',
    alignSelf: 'center',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    // backgroundColor: 'rgba(246, 246, 246, 1)',
    // backgroundColor: 'red',
    paddingBottom: 0,
    elevation: 0,
    borderTopWidth: 0,
  },
});
