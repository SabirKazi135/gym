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
          style={{ height: height * 0.71 }} // 👈 responsive ratio
          className="w-full items-center mt-2 pt-4 justify-center gap-3"
        >
          <View className="w-[98%] justify-center rounded-[10px] overflow-hidden bg-white shadow-sm h-[48%]">
            <Image
              source={require("../../assets/images/s1.png")}
              style={{ width: "100%" }}
              resizeMode="contain"
            />
          </View>

          <View className="w-[98%] justify-center rounded-[10px] overflow-hidden bg-white h-[48%]">
            <Image
              source={require("../../assets/images/s2.png")}
              style={{ width: "100%" }}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* 📝 TEXT + BUTTON SECTION */}
        <View className="flex-1 items-center w-[98%]">
          <Text className="text-2xl font-semibold text-black text-center">
            Transform in 100 Days
          </Text>

          <Text className="mb-4 text-md text-gray-500 text-center leading-5 w-[85%] font-light">
            Achieve weight loss with balanced and efficient exercise, mindful diet and guided meditation
          </Text>

          <NavButton title="Get Started" to="/(auth)/welcome" />
        </View>
      </View>
    </SafeAreaView>
  );
}
