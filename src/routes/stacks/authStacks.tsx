import React from 'react';
import {GetInformation, GetStarted, Login} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="GetInformation" component={GetInformation} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
