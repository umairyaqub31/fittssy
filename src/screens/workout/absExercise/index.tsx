import {abs} from '@utils';
import styles from './styles';
import {navigate} from '@services';
import React, {useState} from 'react';
import {back, minus, next, plus} from '@assets';
import {RouteProp} from '@react-navigation/native';
import {Image, Pressable, View} from 'react-native';
import {CustomOverlay, PrimaryButton, SearchToSelect, Text} from '@components';

interface Props {
  route: RouteProp<{
    params: {
      title?: any;
    };
  }>;
}
const AbsExercise = (props: Props) => {
  const {title} = props?.route?.params;
  const [item, setItem] = useState<any>();
  const [overlay, setOverlay] = useState<any>();

  const onOpen = (item: any, index: any) => {
    setItem(item);
  };

  const onOpenOverlay = () => {
    setOverlay(true);
  };
  const onAdd = () => {};

  return (
    <>
      <SearchToSelect
        data={abs}
        onOpen={onOpen}
        title={'Select ' + title + ' Exercise'}
      />
      <PrimaryButton title={'Select'} width={263} onPress={onOpenOverlay} />

      {overlay && (
        <CustomOverlay overlay={overlay} setOverlay={setOverlay} height={511}>
          <View style={styles.view}>
            <Image source={back} style={styles.img} />
            <Text size={20} semiBold>
              Crunch
            </Text>
            <Image source={next} style={styles.img} />
          </View>

          <Section />

          <View style={styles.btn}>
            <Pressable style={styles.innerView} onPress={onAdd}>
              <Image source={minus} style={styles.m} />
            </Pressable>
            <Pressable style={styles.innerView} onPress={onAdd}>
              <Image source={plus} style={styles.p} />
            </Pressable>
          </View>

          <View style={styles.btn}>
            <PrimaryButton
              width={126}
              height={43}
              title={'Cancel'}
              bgColor={'white'}
            />
            <PrimaryButton
              width={126}
              height={43}
              title={'Save'}
              textColor={'white'}
              onPress={() => navigate('NewWorkOut', {data: item})}
            />
          </View>
        </CustomOverlay>
      )}
    </>
  );
};

const Section = () => {
  return (
    <>
      <View style={styles.txtView}>
        <Text size={12} semiBold>
          Sets
        </Text>
        <Text size={12} semiBold>
          Weight
        </Text>
        <Text size={12} semiBold>
          Reps
        </Text>
        <Text size={12} semiBold>
          1RM
        </Text>
      </View>
      <View style={styles.line} />
    </>
  );
};
export default AbsExercise;
