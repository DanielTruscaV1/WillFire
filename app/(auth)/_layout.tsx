import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(100, 100, 100)',
        },
        headerTintColor: 'rgb(255, 255, 255)',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="welcome" options={{ headerShown: false }}/>
      <Stack.Screen name="sign-up" options={{ headerShown: false }}/>
      <Stack.Screen name="sign-in" options={{ headerShown: false }}/>
    </Stack>
  );
}
