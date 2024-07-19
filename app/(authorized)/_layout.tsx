import { Stack } from "expo-router";

export default function AuthorizedLayout() {
  return (
    <Stack>
      <Stack.Screen name="(modals)" options={{ presentation: 'modal' }} />
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}
