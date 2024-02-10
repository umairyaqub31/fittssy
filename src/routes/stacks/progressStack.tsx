import React from 'react';
import {ProgressOverview} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ProgressStack = ({route, navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProgressOverview" component={ProgressOverview} />
    </Stack.Navigator>
  );
};

export default ProgressStack;
