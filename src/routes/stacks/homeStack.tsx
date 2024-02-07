import React from 'react';
import {
  Home,
  AllCategories,
  CategoryItemDetail,
  CategoryDetails,
  Category,
  SearchScreen,
  Reviews,
} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeStack = ({route, navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="AllCategories" component={AllCategories} />
      <Stack.Screen name="CategoryItemDetail" component={CategoryItemDetail} />
      <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="Reviews" component={Reviews} />
    </Stack.Navigator>
  );
};

export default HomeStack;
