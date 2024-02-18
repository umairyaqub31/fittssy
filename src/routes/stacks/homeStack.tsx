import React from 'react';
import {CreateNew, Home} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStack = ({route, navigation}: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="CreateNew" component={CreateNew} />
    </Stack.Navigator>
  );
};

export default HomeStack;
