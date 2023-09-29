import { useColorScheme } from 'react-native'
import { Stack, Slot } from 'expo-router';

import { Provider, useAuth } from '../context/auth';
import useCachedResources from '../hook/useCachedResources'

export default function RootLayout() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider>
        <InitialLayout />
      </Provider>
    )
  }
}

const InitialLayout = () => {
  const colorScheme = useColorScheme();
  const { authInitialized, user } = useAuth();

  if (!authInitialized && !user) return null;

  return <Slot />
  // return (
  //   <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
  //     <Stack screenOptions={{ headerShown: false }}>
  //       <Stack.Screen name="(tabs)" />
  //       <Stack.Screen name="modal" options={{ presentation: "modal" }} />
  //     </Stack>
  //   </ThemeProvider>
  // );
}