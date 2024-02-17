import {store} from '@redux';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {navigationRef} from '@services';
import Routes from './src/routes/routes';
import React, {useState, useEffect, useLayoutEffect} from 'react';
import {persistor} from './src/shared/redux/store';
import {defaultTheme, darkThemeStyle} from '@theme';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ModalProvider} from '@hooks';
import {EventRegister} from 'react-native-event-listeners';
import {getDataFromUserDefaults, setIsDarkModeEnabled} from '@utils';

const App = () => {
  const [active, setActive] = useState(true);
  const [isSplash, setIsSplash] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  let appTheme = isDarkTheme ? darkThemeStyle : defaultTheme;

  useEffect(() => {
    let listener: any = EventRegister.addEventListener(
      'appThemeChange',
      data => {
        setIsDarkTheme(data);
      },
    );
    return () => {
      EventRegister.removeEventListener(listener);
    };
  }, []);

  const updateTheme = async () => {
    let isEnabled = await getDataFromUserDefaults('THEME_KEY');

    if (isEnabled !== undefined && isEnabled === 'true') {
      setIsDarkTheme(true);
      setIsDarkModeEnabled(true);
      appTheme = darkThemeStyle;
    }
  };

  useEffect(() => {
    updateTheme();
    setTimeout(() => {
      setIsSplash(false);
      console.log('splash');
    }, 3000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef} theme={appTheme as any}>
            <ModalProvider>
              <Routes />
            </ModalProvider>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
