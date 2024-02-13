import React from 'react';
import {
  Login,
  GetInformation,
  GetStarted,
  Register,
  ForgotPassword,
  VerificatioOTP,
} from '@screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthStack = ({route}: any) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="GetInformation" component={GetInformation} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="VerificatioOTP" component={VerificatioOTP} />
    </Stack.Navigator>
  );
};

export default AuthStack;
