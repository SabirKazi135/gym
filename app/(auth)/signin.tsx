import AuthInput from "@/components/onboarding/AuthInput";
import NavButton from "@/components/onboarding/NavButton";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "@/store/useAuthStore";

export default function SignIn() {
  const signup = useAuthStore((state) => state.signup);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState<string | null>(null);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setError(null);
      await signup({ firstName, lastName, email, password });
      router.replace("/(onboarding)/userDetails1");
    } catch (err: any) {
      setError(err?.message ?? "Signup failed");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 justify-center">
        {/* Title */}

        <View className="flex-[1] justify-end pb-[52px]">
          <Text className="text-[30px] font-mbold">Sign Up</Text>
          <Text className="text-[14px] font-light">
            Create your account now and start exploring amazing features
            instantly.
          </Text>
        </View>

        <View className="flex-[3]">
          <View className="gap-4">
            <View className="flex-row justify-between">
              <AuthInput
                placeholder="First Name"
                width="half"
                value={firstName}
                onChangeText={(text) => {
                  setFirstName(text);
                  setError(null);
                }}
              />

              <AuthInput
                placeholder="Last Name"
                width="half"
                value={lastName}
                onChangeText={(text) => {
                  setLastName(text);
                  setError(null);
                }}
              />
            </View>

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

            <AuthInput
              placeholder="Confirm Password"
              type="password"
              leftIcon="lock-closed-outline"
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                setError(null);
              }}
            />

            <NavButton title="Sign Up" onPress={handleSignup} rounded={5} />

            {/* ❌ INLINE ERROR MESSAGE */}
            {error && (
              <Text className="text-red-500 text-center text-[13px] mt-1">
                {error}
              </Text>
            )}
          </View>

          <View className="mt-4 flex-row justify-center">
            <Text className="text-black text-sm font-regular">
              Already have account?{" "}
            </Text>
            <Pressable onPress={() => router.push("/(auth)/login")}>
              <Text className="text-[#E37528] text-sm underline font-regular">
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
