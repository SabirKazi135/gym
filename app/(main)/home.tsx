import { Text, Button, View } from "react-native";
import { useAuthStore } from "@/store/useAuthStore";
import { router } from "expo-router";

export default function Home() {
  const { user, isAuthenticated, isGuest, logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    router.replace("/(auth)/login"); // ✅ go to login after logout
  };

  return (
    <View className="flex-1 justify-center items-center gap-2">
      <Text className="text-2xl font-bold">Home Screen</Text>

      <Text>Authenticated: {String(isAuthenticated)}</Text>
      <Text>Welcome {isGuest ? "Guest" : user?.name}</Text>

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
