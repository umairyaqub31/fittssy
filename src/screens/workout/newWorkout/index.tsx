import React, {useEffect, useState} from 'react';
import {plus} from '@assets';
import styles from './styles';
import {FlatList, Image, Pressable, View} from 'react-native';
import {BackHeader, CrunchBox, PrimaryButton, Text} from '@components';
import {RouteProp} from '@react-navigation/native';
import {navigate} from '@services';

interface Props {
  route: RouteProp<{
    params: {
      data?: any;
    };
  }>;
}

const NewWorkOut = (props: Props) => {
  const {data} = props?.route?.params;

  const [list, setList] = useState<any>([
    {weight: '60', reps: '15', rm: '90.0'},
  ]);
  const [exercise, setExercise] = useState<any>(0);

  const onAddExr = () => {
    navigate('WorkOut', {data: 2});
    // let arr = [...list];
    // let obj = {
    //   weight: '70',
    //   reps: '25',
    //   rm: '90.0',
    // };
    // arr.push(obj);
    // setList(arr);
  };

  const onEdit = () => {
    navigate('EditWorkOut', {data: ''});
  };

  return (
    <View style={{flex: 1}}>
      <BackHeader
        title={'Create New Workout'}
        edit
        width={'65%'}
        onEdit={onEdit}
      />

      <View>
        <FlatList
          data={list}
          renderItem={({item, index}: any) => {
            return <CrunchBox data={item} endImg />;
          }}
        />
      </View>

      <View style={styles.outerView}>
        <Pressable style={styles.innerView} onPress={onAddExr}>
          <Image source={plus} style={styles.pImg} />
        </Pressable>
        <Text size={14} regular>
          Add Exercise
        </Text>

        <View style={styles.btnView}>
          <PrimaryButton
            width={263}
            title={'Start Workout'}
            textColor={'white'}
            onPress={() => navigate('StartWorkOut', {title: 'start workout'})}
          />
        </View>
      </View>
    </View>
  );
};

export default NewWorkOut;
