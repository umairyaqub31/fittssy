import React from 'react';
import styles from './styles';
import {display, gradient} from '@assets';
import {RouteProp} from '@react-navigation/native';
import {Image, ImageBackground, View} from 'react-native';
import {PrimaryButton, Text, Wrapper} from '@components';

interface Props {
  route: RouteProp<{
    params: {
      data?: any;
    };
  }>;
}

const StartWorkOut = (props: Props) => {
  const {data} = props?.route?.params;
  return (
    <Wrapper>
      <View style={styles.container}>
        <Text size={35} semiBold>
          Go!
        </Text>
        <Text regular size={24}>
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
        <PrimaryButton border height={45} width={151} title={'Not Ready'} />
        <PrimaryButton border height={45} width={151} title={'Skip'} />
      </View>
    </Wrapper>
  );
};

export default StartWorkOut;
