import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CreateNew,
  Exercise,
  GetStarted,
  Login,
  GetInformation,
  WorkOut,
  SearchExercise,
  SearchWorkOut,
} from '@screens';

const Stack = createStackNavigator();

const AuthStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* //.......kinza.......// */}
      <Stack.Screen name="CreateNew" component={CreateNew} />
      <Stack.Screen name="Exercise" component={Exercise} />
      <Stack.Screen name="WorkOut" component={WorkOut} />
      <Stack.Screen name="SearchExercise" component={SearchExercise} />
      <Stack.Screen name="SearchWorkOut" component={SearchWorkOut} />

      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="GetInformation" component={GetInformation} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
