import {FlatList, ImageBackground, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {margin, RF} from '@theme';
import {useTheme} from '@react-navigation/native';
import Text from '../../text';
import GradientCard from '../../gradientCard';

interface Props {
  data?: any;
  title?: any;
  onPress: (title: any) => void;
  initialState?: any;
}

const SelectCard = (props: Props) => {
  const {data, title, initialState, onPress} = props;
  const theme: any = useTheme();
  const colors = theme.colors;

  return (
    <>
      <Text size={24} semiBold center style={margin.top_56}>
        {title}
      </Text>
      <FlatList
        data={data}
        contentContainerStyle={margin.top_40}
        renderItem={({item}: any) => {
          return (
            // <Pressable
            //   onPress={() => onPress(item.heading)}
            //   style={{
            //     height: RF(106),
            //     width: '100%',
            //     marginBottom: RF(20),
            //   }}>
            //   <ImageBackground
            //     source={
            //       initialState === item?.heading ? gradientFlex : unSelect
            //     }
            //     imageStyle={{
            //       height: '100%',
            //       resizeMode: 'stretch',
            //     }}
            //     style={{
            //       height: '100%',
            //       width: '100%',
            //       alignItems: 'center',
            //       justifyContent: 'center',
            //       //   backgroundColor: colors.card,
            //       borderRadius: RF(16),
            //     }}>
            //     <Text
            //       size={20}
            //       semiBold
            //       color={
            //         initialState === item?.heading
            //           ? colors.primary
            //           : colors.text
            //       }>
            //       {item?.heading}
            //     </Text>
            //     <Text
            //       size={16}
            //       center
            //       color={
            //         initialState === item?.heading
            //           ? colors.primary
            //           : colors.grayText
            //       }
            //       style={margin.top_12}>
            //       {item?.desc}
            //     </Text>
            //   </ImageBackground>
            // </Pressable>
            <>
              <GradientCard
                onPress={() => onPress(item.heading)}
                item={item}
                initialState={initialState}
              />
            </>
          );
        }}
      />
    </>
  );
};

export default SelectCard;

const styles = StyleSheet.create({
  linearGradient: {
    height: RF(106),
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'rgba(54, 216, 170, 0.12)',
    opacity: 0.3,
  },
});
