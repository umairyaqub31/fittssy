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

const App = () => {
  const [active, setActive] = useState(true);
  const [isSplash, setIsSplash] = useState(true);
  const [isDarkEnabled, setIsDarkEnabled] = useState(false);
  let appTheme = isDarkEnabled ? darkThemeStyle : defaultTheme;

  useEffect(() => {
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
