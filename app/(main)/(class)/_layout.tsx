import { Stack } from "expo-router";
import { useState } from "react";

export default function AuthLayout() {
  const [isCamaraOn, setIsCamaraOn] = useState(false);
  
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="classOnTap" />
      <Stack.Screen name="classTrainingZone" />
    </Stack>
  );
}
