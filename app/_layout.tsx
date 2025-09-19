import { Stack } from 'expo-router';

import { useColorScheme } from '@/hooks/use-color-scheme';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }}/>
      <Stack.Screen name="lyrics" options={{ title: "Lyrics" }}/>
    </Stack>
)
};
