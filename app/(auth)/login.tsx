import AuthInput from "@/components/onboarding/AuthInput";
import { useState } from "react";
import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAuthStore } from "@/store/useAuthStore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useAuthStore((state) => state.login);
  const enterGuestMode = useAuthStore((s) => s.enterGuestMode);

  const handleLogin = async () => {
    try {
      setError(null); // clear previous error
      await login(email, password);
      router.replace("/(main)/home");
    } catch (err: any) {
      setError(err?.message ?? "Login failed");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        <View
          className="absolute top-6 right-[24px]"
          style={{
            zIndex: 100, // ✅ iOS + RN
            elevation: 100, // ✅ Android
          }}
        >
          <Pressable
            onPress={() => {
              console.log("SKIP PRESSED");

              enterGuestMode();
              router.replace("/(main)/home");
            }}
          >
            <Text className="text-[14px] font-light text-gray-500">Skip</Text>
          </Pressable>
        </View>

        {/* Title */}
        <View className="flex-[1] justify-end pb-[52px] gap-2">
          <Text className="text-[30px] font-bold">Login</Text>
          <Text className="text-[14px] font-light w-[85%]">
            Welcome back! Log in to continue your fitness journey with us.
          </Text>
        </View>

        <View className="flex-[3]">
          {/* Inputs */}
          <View className="mt-8 gap-4">
            <AuthInput
              placeholder="Email Address"
              type="email"
              leftIcon="mail-outline"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setError(null);
              }}
            />

            <AuthInput
              placeholder="Password"
              type="password"
              leftIcon="lock-closed-outline"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setError(null);
              }}
            />
          </View>

          {/* Remember + Forgot */}
          <View className="flex-row justify-between items-center mt-3">
            <Pressable
              onPress={() => setChecked(!checked)}
              className="flex-row items-center gap-2"
            >
              <View
                className={`w-[16px] h-[16px] rounded-[3px] items-center justify-center border ${
                  checked ? "border-black" : "border-gray-400"
                }`}
              >
                {checked && (
                  <Ionicons name="checkmark" size={12} color="#E37528" />
                )}
              </View>

              <Text
                className={`text-[13px] font-light ${
                  checked ? "text-black" : "text-gray-500"
                }`}
              >
                Remember Me
              </Text>
            </Pressable>

            <Pressable>
              <Text className="text-[13px] text-gray-600 underline">
                Forget Password?
              </Text>
            </Pressable>
          </View>

          {/* Login Button */}
          <View className="mt-4">
            <Pressable
              onPress={handleLogin}
              className="bg-orange-500 h-[52px] items-center justify-center rounded-[5px]"
            >
              <Text className="text-white text-[17px] font-bold">Login</Text>
            </Pressable>
          </View>
          {/* ❌ INLINE ERROR MESSAGE */}
          {error && (
            <Text className="text-red-500 text-center text-[13px] mt-3">
              {error}
            </Text>
          )}

          {/* Signup Link */}
          <View className="mt-5 flex-row justify-center">
            <Text className="text-[15px] text-black font-light">
              {"Don't have account? "}
            </Text>
            <Pressable onPress={() => router.push("/(auth)/signin")}>
              <Text className="text-[#E37528] text-[15px] font-semibold">
                Signup
              </Text>
            </Pressable>
          </View>

          {/* Divider */}
          <View className="flex-row items-center mt-6">
            <View className="flex-1 h-[1px] bg-gray-300" />
            <Text className="mx-3 text-[13px] text-black">
              Or Continue with
            </Text>
            <View className="flex-1 h-[1px] bg-gray-300" />
          </View>

          {/* Social Login (UI only) */}
          <View className="flex-row justify-center gap-6 mt-5">
            <Pressable className="w-[46px] h-[46px] border border-gray-300 rounded-[10px] items-center justify-center">
              <Image
                source={require("../../assets/images/google.png")}
                className="w-[22px] h-[22px]"
              />
            </Pressable>

            <Pressable className="w-[46px] h-[46px] border border-gray-300 rounded-[10px] items-center justify-center">
              <Image
                source={require("../../assets/images/facebook.png")}
                className="w-[22px] h-[22px]"
              />
            </Pressable>

            <Pressable className="w-[46px] h-[46px] border border-gray-300 rounded-[10px] items-center justify-center">
              <Image
                source={require("../../assets/images/apple.png")}
                className="w-[22px] h-[22px]"
              />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
