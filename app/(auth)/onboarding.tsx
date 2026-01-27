import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

export default function Onboarding() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      <View className="flex-1 px-5 items-center">

        {/* 🖼️ IMAGE SECTION */}
        <View
          style={{ height: height * 0.74 }} // 👈 responsive ratio
          className="w-full items-center pt-4 justify-center  gap-3"
        >
          <View className="w-[94%] rounded-[10px] overflow-hidden bg-white shadow-sm h-[49%]">
            <Image
              source={require("../../assets/images/s1.png")}
              style={{ width: "100%" }}
              resizeMode="cover"
            />
          </View>

          <View className="w-[94%] rounded-[10px] overflow-hidden bg-white shadow-sm h-[49%]">
            <Image
              source={require("../../assets/images/s2.png")}
              style={{ width: "100%" }}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* 📝 TEXT + BUTTON SECTION */}
        <View className="flex-1 items-center w-[94%] mt-3">

          <Text className="text-[26px] font-bold text-black text-center">
            Transform in 100 Days
          </Text>

          <Text className="mt-2 text-[15px] text-gray-500 text-center leading-5 w-[85%]">
            Achieve weight loss with balanced workouts, mindful diet and guided
            training.
          </Text>

          <Pressable
            className="mt-6 bg-orange-500 w-full h-[52px] rounded-full items-center justify-center"
            onPress={() => router.push("/(auth)/login")}
          >
            <Text className="text-white text-[17px] font-bold">
              Get Started
            </Text>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  );
}
