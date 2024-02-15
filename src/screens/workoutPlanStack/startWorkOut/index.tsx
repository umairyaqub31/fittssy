import React from 'react';
import styles from './styles';
import {display, gradient} from '@assets';
import {RouteProp, useTheme} from '@react-navigation/native';
import {Image, ImageBackground, View} from 'react-native';
import {PrimaryButton, Text, Wrapper} from '@components';
import {margin, RF} from '@theme';

interface Props {
  route: RouteProp<{
    params: {
      data?: any;
    };
  }>;
}

const StartWorkOut = (props: Props) => {
  const {data} = props?.route?.params;
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <Wrapper isPaddingH={-10}>
      <View style={styles.container}>
        <Text size={35} semiBold>
          Go!
        </Text>
        <Text regular size={24} style={margin.top_20} color={colors.text}>
          Est. 1h 9 min
        </Text>
      </View>
      <ImageBackground
        source={gradient}
        imageStyle={styles.image}
        style={styles.main}>
        <Image source={display} style={styles.img} />
      </ImageBackground>

      <View style={styles.viewBtn}>
        <PrimaryButton border height={45} width={141} title={'Not Ready'} />
        <PrimaryButton border height={45} width={141} title={'Skip'} />
      </View>
    </Wrapper>
  );
};

export default StartWorkOut;
