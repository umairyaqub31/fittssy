import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {RF} from '@theme';
import Text from '../text';
import {plus} from '@assets';

interface Props {
  onPress: any;
  center?: any;
  title?: any;
  source?: any;
}

const AddButton = (props: Props) => {
  const {onPress, center, title, source} = props;
  return (
    <View
      style={{
        alignSelf: center ? 'center' : 'auto',
        alignItems: 'center',
      }}>
      <Pressable style={styles.innerView} onPress={onPress}>
        <Image source={source ? source : plus} style={styles.pImg} />
      </Pressable>
      <Text size={14} regular>
        {title ? title : 'Add Exercise'}
      </Text>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  pImg: {
    width: RF(30),
    height: RF(30),
  },
  innerView: {
    width: RF(58),
    height: RF(58),
    borderWidth: 1,
    borderRadius: 100,
    alignItems: 'center',
    marginBottom: RF(10),
    borderColor: '#D1D1D1',
    justifyContent: 'center',
  },
});
