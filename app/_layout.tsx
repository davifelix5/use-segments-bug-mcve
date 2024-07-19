import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, usePathname, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  /* 
    When logging out at the page /(authorized)/(tabs)/(account)/account-page2, the 'segments' variable
    causes two triggers in the effect, whereas the 'pathname' variable causes only one.
  */
  const segments = useSegments();
  const pathname = usePathname();
  
  React.useEffect(() => {
    console.log('Segments: ', segments)
  }, [segments])

  React.useEffect(() => {
    console.log('Pathname: ', pathname)
  }, [pathname])


  return (
    <GestureHandlerRootView>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Slot />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
