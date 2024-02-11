import React from 'react';
import {ProgressOverview, WorkoutDetail} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ProgressStack = ({route, navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProgressOverview" component={ProgressOverview} />
      <Stack.Screen name="WorkoutDetail" component={WorkoutDetail} />
    </Stack.Navigator>
  );
};

export default ProgressStack;
