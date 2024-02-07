import * as React from 'react';
import {createNavigationContainerRef} from '@react-navigation/native';
// export const navigationRef = createNavigationContainerRef();

export const navigationRef: any = React.createRef();

export function navigate(name: any, params: any) {
  navigationRef.current?.navigate(name, params);
}

export const getCurrentRoute = () => {
  const route = navigationRef.getCurrentRoute();
  return route.name;
};

export const notificationOpenHandler = (data: any) => {};
