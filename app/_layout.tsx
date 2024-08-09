import { Slot, usePathname, useSegments } from 'expo-router';
import 'react-native-reanimated';

import React from 'react';

export default function RootLayout() {
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

  return <Slot />;
}
