import React from 'react';
import MainTabs from './tabs/mainTabs';
import {useSelector} from 'react-redux';
import AuthStack from './stacks/authStacks';

const Routes = () => {
  const {isLoggedIn} = useSelector((state: any) => state.root.user);

  return <>{isLoggedIn ? <MainTabs /> : <AuthStack />}</>;
};

export default Routes;
