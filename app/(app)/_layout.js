import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="modal" options={{ presentation: "modal", presentationStyle: 'modal' }} />
    </Stack>
  );
}
