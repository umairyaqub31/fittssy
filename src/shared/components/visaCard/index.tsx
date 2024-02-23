import {StyleSheet, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import {BackHeader, Text, Wrapper} from '@components';
import {Mask, Visa} from '@assets';
import {margin, RF} from '@theme';
import {useTheme} from '@react-navigation/native';

interface Props {
  cardHolderName?: any;
  cardNumber?: any;
  height?: any;
}

const VISACard = (props: Props) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  const {cardHolderName, cardNumber, height} = props;
  return (
    <View style={{...styles.card, height: height ? height : 180}}>
      <ImageBackground source={Mask} style={styles.image}>
        <Image source={Visa} style={styles.visa} />
        <View>
          <Text color={colors.white} size={20}>
            {cardHolderName}
          </Text>
          <Text semiBold color={colors.white} size={20} style={margin.top_8}>
            {cardNumber}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default VISACard;

const styles = StyleSheet.create({
  card: {
    height: 180,
    marginTop: RF(38),
    width: '100%',
    overflow: 'hidden',
    borderRadius: 15,
  },
  image: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: RF(23),
    paddingRight: RF(23),
    paddingLeft: RF(14),
    paddingBottom: RF(14),
  },
  visa: {
    height: RF(24),
    width: RF(74),
    alignSelf: 'flex-end',
    resizeMode: 'contain',
  },
});
