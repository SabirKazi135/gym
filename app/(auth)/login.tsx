import { router } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Login() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 justify-center">
        <Text className="text-[28px] font-bold text-black">
          Welcome Back 👋
        </Text>

        <Text className="mt-2 text-gray-500">
          Login to continue your fitness journey
        </Text>

        {/* Email */}
        <TextInput
          placeholder="Email"
          className="mt-6 border border-gray-300 rounded-xl px-4 py-4 text-base"
        />

        {/* Password */}
        <TextInput
          placeholder="Password"
          secureTextEntry
          className="mt-4 border border-gray-300 rounded-xl px-4 py-4 text-base"
        />

        {/* Login Button */}
        <Pressable
          className="mt-6 bg-black py-4 rounded-xl items-center"
          onPress={() => router.replace("/(main)/home")}
        >
          <Text className="text-white text-lg font-bold">Login</Text>
        </Pressable>

        {/* Signup */}
        <View className="mt-4 flex-row justify-center">
          <Text className="text-gray-500">Don’t have an account? </Text>
          <Pressable>
            <Text className="text-black font-bold">Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
