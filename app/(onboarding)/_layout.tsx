import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function OnboardingLayout() {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="userDetails1" />
      <Stack.Screen name="userDetails2" />
      <Stack.Screen name="userFeature1" />
      <Stack.Screen name="userDetails3" />
      <Stack.Screen name="userDetails4" />
      <Stack.Screen name="userFeature2" />
      <Stack.Screen name="userFeature3" />
      <Stack.Screen name="userFeature4" />
      <Stack.Screen name="userFeature5" />
      <Stack.Screen name="userFeature6" />
      <Stack.Screen name="userFeature7" />
      <Stack.Screen name="userFeature8" />
      <Stack.Screen name="userDetails5" />
      <Stack.Screen name="userPremiumPlans" />
    </Stack>
    </>
  );
}