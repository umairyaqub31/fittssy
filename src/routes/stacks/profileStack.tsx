import React from 'react';
import {
  AppMode,
  EditProfile,
  InsightOverview,
  Notification,
  PrivacyPolicy,
  ProfileOverview,
  Settings,
  ThirdParty,
  UnitMeasure,
} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ProfileStack = ({route, navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileOverview} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="UnitMeasure" component={UnitMeasure} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="AppMode" component={AppMode} />
      <Stack.Screen name="ThirdParty" component={ThirdParty} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
