import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Router, store} from './config';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';
import FlashMessage from 'react-native-flash-message';

const MainApp = () => {
  LogBox.ignoreAllLogs();

  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" floating={true} />
    </>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
