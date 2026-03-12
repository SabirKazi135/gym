import { Tabs } from "expo-router";
import HomeIcon from "assets/svgs/HomeIcon";
import ClassIcon from "assets/svgs/ClassIcon";
import ProgressIcon from "assets/svgs/ProgressIcon";
import GroupsIcon from "assets/svgs/GroupsIcon";
import DietIcon from "assets/svgs/DietIcon";
import ProfileIcon from "assets/svgs/ProfileIcon";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useVideoPlayerStore } from "@/store/videoPlayerStore";
import { useEffect } from "react";

export default function MainLayout() {
  const isFullscreen = useVideoPlayerStore(state => state.isFullScreen);
  const setIsFullScreen = useVideoPlayerStore(state => state.setIsFullScreen);
  useEffect(() => {
    setIsFullScreen(false)
  }, [])
  console.log(isFullscreen)
  return (
    <>
    <StatusBar barStyle="dark-content" hidden={isFullscreen} />
    <SafeAreaView className="flex-1 bg-background" edges={isFullscreen ? [] : ["top", "bottom", "left", "right"]}>
    <Tabs screenOptions={
      { headerShown: false,
        tabBarActiveTintColor: "#E37528",
        tabBarInactiveTintColor: "#505050",
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Montserrat-Regular",
        },
        tabBarStyle: {
          height: 70,
          paddingBottom: 5,
          paddingTop: 5,
          paddingHorizontal: 12,
          display: isFullscreen ? "none" : "flex",
        },
        tabBarIconStyle: {
          marginBottom: 5,
        }
       }
      }>
      <Tabs.Screen name="home" options={{
        title: "Home",
        tabBarIcon: ({ color, size }) => (
          <HomeIcon width={size} height={size} color={color} />
        ) 
      }} />
      <Tabs.Screen name="(class)" options={{
        title: "Class",
        tabBarIcon: ({ color, size }) => (
          <ClassIcon width={size} height={size} color={color} />
        )
      }} />
      <Tabs.Screen name="progress" options={{
        title: "Progress",
        tabBarIcon: ({ color, size }) => (
          <ProgressIcon width={size} height={size} color={color} />
        )
      }} />
      <Tabs.Screen name="groups" options={{
        title: "Groups",
        tabBarIcon: ({ color, size }) => (
          <GroupsIcon width={size} height={size} color={color} />
        )
      }} />
      <Tabs.Screen name="diet" options={{
        title: "Diet",
        tabBarIcon: ({ color, size }) => (
          <DietIcon width={size} height={size} color={color} />
        )
      }} />
      <Tabs.Screen name="profile" options={{
        title: "Profile",
        tabBarIcon: ({ color, size }) => (
          <ProfileIcon width={size} height={size} color={color} />
        )
      }} />
    </Tabs>
    </SafeAreaView>
    </>
  );
}
