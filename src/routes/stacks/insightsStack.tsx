import React from 'react';
import {CurrentPlan, InsightOverview} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const IsnsightStack = ({route, navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Insight" component={InsightOverview} />
      <Stack.Screen name="CurrentPlan" component={CurrentPlan} />
    </Stack.Navigator>
  );
};

export default IsnsightStack;
