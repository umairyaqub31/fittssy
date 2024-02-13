import React from 'react';
import {InsightOverview, ProfileOverview} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ProfileStack = ({route, navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileOverview} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
