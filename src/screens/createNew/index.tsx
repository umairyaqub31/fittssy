import {RF} from '@theme';
import styles from './styles';
import {View} from 'react-native';
import React, {useState} from 'react';
import {BackHeader, GradientList} from '@components';

const CreateNew = ({navigation}: any) => {
  const [selected, setSelected] = useState(false);
  const [data, setData] = useState(['Exercise', 'Workout', 'Workout Plan']);

  return (
    <View>
      <BackHeader title={'Create New'} navigation={navigation} />
      <View style={styles.mt} />
      <GradientList data={data} selected={selected} setSelected={setSelected} />
    </View>
  );
};

export default CreateNew;
