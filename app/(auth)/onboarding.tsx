import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavButton from "../../components/onboarding/NavButton";

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

          <Text className="mt-2 mb-5 text-[18px] text-gray-500 text-center leading-5 w-[85%] font-light">
            Achieve weight loss with balanced workouts, mindful diet and guided
            training.
          </Text>

          <NavButton title="Get Started" to="/(auth)/welcome" />
          {/* <NavButton title="Get Started" to="/(onboarding)/weightInputPage" /> */}
        </View>
      </View>
    </SafeAreaView>
  );
}
