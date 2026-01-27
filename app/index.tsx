// import { useEffect } from "react";
// import { Image, Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// import Animated, {
//   Easing,
//   useAnimatedStyle,
//   useSharedValue,
//   withDelay,
//   withTiming,
// } from "react-native-reanimated";

// export default function SplashScreen() {
//   const logoScale = useSharedValue(0);
//   const textOpacity = useSharedValue(0);

//   useEffect(() => {
//     logoScale.value = withTiming(1, {
//       duration: 1200,
//       easing: Easing.out(Easing.exp),
//     });

//     textOpacity.value = withDelay(1300, withTiming(1, { duration: 600 }));
//   }, []);

//   const logoStyle = useAnimatedStyle(() => ({
//     transform: [{ scale: logoScale.value }],
//   }));

//   const textStyle = useAnimatedStyle(() => ({
//     opacity: textOpacity.value,
//   }));

//   return (
//     <SafeAreaView className="flex-1 bg-white">
//       <View className="flex-1 items-center justify-center">
//         <Animated.View style={logoStyle}>
//           <Image
//             source={require("../assets/images/logo.png")}
//             className="w-[300px] h-[300px]"
//           />
//         </Animated.View>

//         <Animated.View style={textStyle}>
//           <Text className="mt-5 text-[30px] text-center font-bold text-black">
//             WEAVFIT
//           </Text>

//           <Text className="mt-1 text-[22px] text-center text-gray-500">
//             Weaving Fitness Into Life
//           </Text>
//         </Animated.View>
//       </View>
//     </SafeAreaView>
//   );
// }

import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/splash" />;
}
