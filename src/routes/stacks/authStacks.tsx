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
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const AuthStack = ({route}: any) => {
  const {getStarted, info} = useSelector((state: any) => state.root.user);
  console.log(getStarted);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      {...{
        initialRouteName:
          getStarted == false
            ? 'GetStarted'
            : info == 'completed'
            ? 'Login'
            : 'GetInformation',
      }}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="GetInformation" component={GetInformation} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="VerificatioOTP" component={VerificatioOTP} />
    </Stack.Navigator>
  );
};

export default AuthStack;
