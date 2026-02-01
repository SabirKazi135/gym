import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavButton from "../../components/onboarding/NavButton";

export default function Welcome() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      <View className="flex-1 flex  items-center">
        {/* 🖼️ IMAGE SECTION */}
        <View className="flex-[10]   w-full items-center flex justify-center">
          <Image
            source={require("../../assets/images/logo.png")}
            // className="w-[300px] h-[300px]"
            style={{ width: 300, height: 300 }}
          />
        </View>
        <View className="flex-[10] gap- flex justify-center items-center rounded-t-[25] px-5 bg-[#F2C6A7] w-full ">
          <View className=" gap-3 justify-center flex">
            <Text className="text-xl text-center font-regular">Welcome to</Text>
            <Text className="text-center text-[26px] font-semibold">
              Weavfit Fitness
            </Text>
            <Text className="text-center font-light text-lg">
              Where daily and community support drive positive and ever lasting
              behaviour change
            </Text>
          </View>
          <View className="w-full justify-center gap-3 pt-3 flex">
            <NavButton title="Login" to="/(auth)/login" />
            <NavButton title="SignUp" to="/(auth)/input" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
