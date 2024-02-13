import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CreateNew,
  Exercise,
  SearchExercise,
  SearchWorkOut,
  AbsExercise,
  NewWorkOut,
  EditWorkOut,
  StartWorkOut,
  WorkOut,
} from '@screens';

const Stack = createStackNavigator();

const WorkOutStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* //.......kinza.......// */}
      <Stack.Screen name="CreateNew" component={CreateNew} />
      <Stack.Screen name="Exercise" component={Exercise} />
      <Stack.Screen name="WorkOut" component={WorkOut} />
      <Stack.Screen name="SearchExercise" component={SearchExercise} />
      <Stack.Screen name="SearchWorkOut" component={SearchWorkOut} />
      <Stack.Screen name="AbsExercise" component={AbsExercise} />
      <Stack.Screen name="NewWorkOut" component={NewWorkOut} />
      <Stack.Screen name="EditWorkOut" component={EditWorkOut} />
      <Stack.Screen name="StartWorkOut" component={StartWorkOut} />
    </Stack.Navigator>
  );
};

export default WorkOutStack;
