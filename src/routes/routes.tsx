import React from 'react';
import MainTabs from './tabs/mainTabs';
import {useSelector} from 'react-redux';
import ProgressStack from './stacks/progressStack';

const Routes = () => {
  const {isLoggedIn} = useSelector((state: any) => state.root.user);
  return <ProgressStack />;
  // return <>{isLoggedIn ? <MainTabs /> : <AuthStack />}</>;
};

export default Routes;
