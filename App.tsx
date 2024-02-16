import {store} from '@redux';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {navigationRef} from '@services';
import Routes from './src/routes/routes';
import React, {useState, useEffect} from 'react';
import {persistor} from './src/shared/redux/store';
import {defaultTheme, darkThemeStyle} from '@theme';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ModalProvider} from '@hooks';
import {EventRegister} from 'react-native-event-listeners';

const App = () => {
  const [active, setActive] = useState(true);
  const [isSplash, setIsSplash] = useState(true);
  const Theme = store.getState();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  let appTheme = isDarkTheme ? darkThemeStyle : defaultTheme;
  const {isDarkEnabled} = Theme.root.user;
  console.log('ddd.....', isDarkEnabled);

  useEffect(() => {
    let listener: any = EventRegister.addEventListener(
      'appThemeChange',
      data => {
        console.log('ddd.....', data);

        setIsDarkTheme(data);
      },
    );
    return () => {
      EventRegister.removeEventListener(listener);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
      console.log('splash');
    }, 3000);

    if (isDarkEnabled) {
      setIsDarkTheme(true);
    }
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
