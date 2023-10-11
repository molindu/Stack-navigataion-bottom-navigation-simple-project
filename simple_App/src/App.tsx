import React, { useEffect } from 'react';
import { Platform } from 'react-native';
// import MainContainer from './src/navigation/DownNavigation';
import SplashScreen from 'react-native-splash-screen';
import StackNavigation from './navigation/StackNavigation';
// import GestureHandlerRootView from 'react-native-gesture-handler';

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, [])
  return (

    <StackNavigation />

  );
}
