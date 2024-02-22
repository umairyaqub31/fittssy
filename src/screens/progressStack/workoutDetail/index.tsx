import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {BackHeader} from '@components';
import moment from 'moment';
import TopTabs from '../../../routes/tabs/topTabs';

interface Props {
  route: RouteProp<{
    params: {
      title?: any;
    };
  }>;
}
const WorkoutDetail = (props: Partial<Props>) => {
  const {selectedDate}: any = props.route?.params;

  return (
    <View style={{flex: 1, paddingHorizontal: 20, paddingTop: 20}}>
      <BackHeader
        title={moment(selectedDate).format('MMMM DD, YYYY')}
        width={'100%'}
        // onEdit={onEdit}
      />
      <View style={{flex: 1, marginTop: 10}}>
        <TopTabs />
      </View>
      {/* <Text>WorkoutDetail</Text> */}
    </View>
  );
};

export default WorkoutDetail;

const styles = StyleSheet.create({});
