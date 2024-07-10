import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    WorkSans_Reg: require('@/assets/fonts/WorkSans-Regular.ttf'),
    WorkSans_Bold: require('@/assets/fonts/WorkSans-Bold.ttf'),
    WorkSans_SemiBold: require('@/assets/fonts/WorkSans-SemiBold.ttf'),
    WorkSans_Light: require('@/assets/fonts/WorkSans-Light.ttf'),
    WorkSans_Thin: require('@/assets/fonts/WorkSans-Thin.ttf'),
    WorkSans_Extralight: require('@/assets/fonts/WorkSans-ExtraLight.ttf'),
    WorkSans_Medium: require('@/assets/fonts/WorkSans-Medium.ttf'),
    WorkSans_Extrabold: require('@/assets/fonts/WorkSans-ExtraBold.ttf'),
    WorkSans_Black: require('@/assets/fonts/WorkSans-Black.ttf'),
  });


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName='(tabs)'
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
