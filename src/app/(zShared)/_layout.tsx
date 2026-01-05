import { Stack } from "expo-router";
export default function SharedLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
      <Stack.Screen name="notifications" options={{ title: "Notifications" }} />
    </Stack>
  );
}
