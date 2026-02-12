import { Text, Button, View, Pressable, Image } from "react-native";
import { useAuthStore } from "@/store/useAuthStore";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import TodayProgress from "assets/svgs/TodayProgress.svg";
import GreenTick from "assets/svgs/GreenTick.svg";
import Fire from "assets/svgs/Fire.svg";
import CircleProgress from "assets/svgs/CircleProgress";
import { LinearGradient } from "expo-linear-gradient";
import Clock from "assets/svgs/Clock.svg";
import {BlurView} from "expo-blur";



export default function Home() {
  const { user, isAuthenticated, isGuest, logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    router.replace("/(auth)/login"); // ✅ go to login after logout
  };

  const userFirstName = user?.name?.split(" ")[0] || "";
  const hours = new Date().getHours();
  const greeting =
    hours < 12 ? "Good Morning," : hours < 18 ? "Good Afternoon," : hours < 21 ?"Good Evening," : "Welcome Back,";

  return (
    <SafeAreaView className="flex-1 bg-background ">
      <View className="mx-4 items-center bg-background mt-8">
        <View className="flex-row items-center w-full justify-between">
          <View className="items-start">
            <Text className="text-xl font-mbold text-left text-black">
              {greeting}
              {userFirstName.length > 8 ? `\n${userFirstName}` : ` ${userFirstName}`}
            </Text>
            <Text className="text-left font-light text-sm text-black">Ready For Your Workout?</Text>
          </View>
          {isAuthenticated && !isGuest && (
          <Pressable className="bg-primary justify-center rounded-full w-14 h-14 items-center">
            <Text className="text-white font-medium text-lg">V</Text>
          </Pressable>
          )}
        </View>
        <View className="border mt-8 px-4 rounded-md w-full border-[#E5E5E5]">
          <View className="flex-row gap-2 my-2 items-center">
              <TodayProgress />
              <Text className="font-light text-sm">Today&apos;s Progress</Text>
          </View>
          <View className="justify-between flex-row">
            <View className="w-[70%]">
              <View className="gap-3 pb-4">
                <View className="flex-row items-center gap-2">
                  <Text className="font-light text-sm">Current Workout : <Text className="font-semibold">Warm-up</Text></Text>
                  <GreenTick />
                </View>
                <View className="">
                  <View className="flex-row justify-between">
                    <Text className="font-light text-[10px]">Calories Burned</Text>
                    <Text className="font-light text-xs">122 / 400 <Text className="text-[#FB2C36]">kcal</Text></Text>
                  </View>
                  <View className="w-full h-3 relative">
                    <View className="bg-[#FF9696] w-full h-3 rounded-full"></View>
                    <View className="bg-[#E37528] absolute w-[20%] h-3 rounded-full"></View>
                  </View>
                </View>
                <View className="flex-row gap-2 items-center">
                  <Fire />
                  <Text className="font-semibold text-sm">0 day streak</Text>
                </View>
              </View>
            </View>
          <View className="">
            <CircleProgress progress={12} size={80} strokeWidth={8} />
            <Text className="font-semibold text-sm">Day <Text className="text-primary">12</Text> / 100</Text>
          </View>
          </View>
        </View>
        <LinearGradient className="border border-primary mt-6 rounded-md py-2 px-6 overflow-hidden" colors={["#DD4242", "#9F2626"]} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
          <Text className="font-regular text-center text-white text-[16px]">“💬 The journey of a thousand miles begins with one step 🌟”</Text>
        </LinearGradient>
        <View className="border mt-6 border-[#E5E5E5] py-2 px-4 w-full rounded-md">
          <View className="flex-row items-center gap-2">
            <Clock />
            <Text className="font-light text-sm">Your Today&apos;s class starts in</Text>
          </View>
          <View className="mt-2">
            <Text className="font-mbold text-center text-2xl text-black">13:08:13</Text>
            <Text className="font-light text-center text-black text-sm">26/8/2025 at 06:00 AM</Text>
          </View>
        </View>
        <View className="justify-between flex-row mt-6 w-full">
          <Pressable onPress={() => router.replace("/progress")} className="items-center rounded-md overflow-hidden w-[30%]">
            <View className="relative w-full">
              <Image style={{width: 120, height: 110}} source={require("assets/images/progress_image.png")} resizeMode="cover"/>
              <BlurView intensity={50} tint="dark" className="absolute bottom-0 items-center py-1 w-full">
                <Text className="font-medium text-white text-sm">Progress</Text>
              </BlurView>
            </View>
          </Pressable>
          <Pressable onPress={() => router.replace("/groups")} className="items-center rounded-md overflow-hidden w-[30%]">
          <View className="relative w-full">
            <Image style={{width: 120, height: 110}} source={require("assets/images/groups_image.png")} resizeMode="cover"/>
            <BlurView intensity={50} tint="dark" className="absolute bottom-0 items-center py-1 w-full">
              <Text className="font-medium text-white text-sm">Groups</Text>
            </BlurView>
          </View>
</Pressable>
          <Pressable onPress={handleLogout} className="items-center rounded-md overflow-hidden w-[30%]">
          <View className="relative w-full">
            <Image style={{width: 120, height: 110, justifyContent: "center", alignItems: "center"}} source={require("assets/images/diet_image.png")} resizeMode="cover"/>
            <BlurView intensity={50} tint="dark" className="absolute bottom-0 items-center py-1 w-full">
              <Text className="font-medium text-white text-sm">Diet</Text>
            </BlurView>
          </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
