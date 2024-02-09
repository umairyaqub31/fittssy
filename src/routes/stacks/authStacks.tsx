import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CreateNew, Exercise, GetStarted, Login,GetInformation} from '@screens';

const Stack = createStackNavigator();

const AuthStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CreateNew" component={CreateNew} />
      <Stack.Screen name="Exercise" component={Exercise} />

      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="GetInformation" component={GetInformation} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
