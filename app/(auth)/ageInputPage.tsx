// import React, { useState, useRef } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   StatusBar,
// } from "react-native";

// const AgeSelector = () => {
//   const [selectedAge, setSelectedAge] = useState(32);
//   const scrollViewRef = useRef<ScrollView>(null);

//   // Generate age array from 18 to 100
//   const ages = Array.from({ length: 83 }, (_, i) => i + 18);

//   const ITEM_HEIGHT = 70;
//   const VISIBLE_ITEMS = 7;

//   const handleMomentumScrollEnd = (event: any) => {
//     const y = event.nativeEvent.contentOffset.y;
//     const index = Math.round(y / ITEM_HEIGHT);
//     const age = ages[index];
//     setSelectedAge(age);
//   };

//   const scrollToAge = (age: number) => {
//     const index = ages.indexOf(age);
//     if (index !== -1 && scrollViewRef.current) {
//       scrollViewRef.current.scrollTo({
//         y: index * ITEM_HEIGHT,
//         animated: true,
//       });
//     }
//   };

//   React.useEffect(() => {
//     // Initial scroll to age 32
//     setTimeout(() => scrollToAge(32), 100);
//   }, []);

//   const getOpacity = (age: number) => {
//     const distance = Math.abs(age - selectedAge);
//     if (distance === 0) return 1;
//     if (distance === 1) return 0.6;
//     if (distance === 2) return 0.35;
//     return 0.2;
//   };

//   const getScale = (age: number) => {
//     const distance = Math.abs(age - selectedAge);
//     if (distance === 0) return 1;
//     if (distance === 1) return 0.85;
//     return 0.75;
//   };

//   return (
//     <View className="flex-1 bg-white">
//       {/* Status Bar */}
//       <StatusBar barStyle="dark-content" />

//       {/* Status Bar Area */}
//       <View className="h-11 bg-white px-4 flex-row items-center justify-between">
//         <Text className="text-sm font-medium">09:30 PM</Text>
//         <View className="flex-row items-center gap-1">
//           {/* Status icons area */}
//         </View>
//       </View>

//       {/* Main Content */}
//       <View className="flex-1 px-6 pt-8">
//         {/* Title */}
//         <Text className="text-3xl font-bold text-center mb-12">
//           <Text className="text-gray-900">Select Your </Text>
//           <Text className="text-orange-500">Age</Text>
//         </Text>

//         {/* Age Picker Container */}
//         <View className="flex-1 items-center justify-center -mt-16">
//           {/* Selection Indicator Lines */}
//           <View className="absolute w-64 h-16" style={{ zIndex: 10 }}>
//             <View className="absolute top-0 left-0 right-0 h-0.5 bg-orange-500" />
//             <View className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
//           </View>

//           {/* Arrow Indicator */}
//           <View
//             className="absolute left-4"
//             style={{
//               zIndex: 10,
//               width: 0,
//               height: 0,
//               borderTopWidth: 12,
//               borderBottomWidth: 12,
//               borderLeftWidth: 16,
//               borderTopColor: "transparent",
//               borderBottomColor: "transparent",
//               borderLeftColor: "#f97316",
//             }}
//           />

//           {/* Scrollable Age List */}
//           <ScrollView
//             ref={scrollViewRef}
//             showsVerticalScrollIndicator={false}
//             snapToInterval={ITEM_HEIGHT}
//             decelerationRate="fast"
//             onMomentumScrollEnd={handleMomentumScrollEnd}
//             contentContainerStyle={{
//               paddingVertical: ITEM_HEIGHT * 3,
//             }}
//             style={{ height: ITEM_HEIGHT * VISIBLE_ITEMS }}
//           >
//             {ages.map((age) => {
//               const isSelected = age === selectedAge;
//               const opacity = getOpacity(age);
//               const scale = getScale(age);

//               return (
//                 <TouchableOpacity
//                   key={age}
//                   onPress={() => {
//                     setSelectedAge(age);
//                     scrollToAge(age);
//                   }}
//                   style={{
//                     height: ITEM_HEIGHT,
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Text
//                     style={{
//                       fontSize: isSelected ? 56 : 48,
//                       fontWeight: isSelected ? "700" : "600",
//                       color: isSelected ? "#1f2937" : "#9ca3af",
//                       opacity,
//                       transform: [{ scale }],
//                     }}
//                   >
//                     {age}
//                   </Text>
//                 </TouchableOpacity>
//               );
//             })}
//           </ScrollView>
//         </View>

//         {/* Bottom Buttons */}
//         <View className="pb-8 pt-4 flex-row justify-center gap-4">
//           <TouchableOpacity
//             className="bg-orange-500 rounded-full px-12 py-4 min-w-[160px]"
//             activeOpacity={0.8}
//           >
//             <Text className="text-white text-lg font-semibold text-center">
//               Back
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             className="bg-orange-500 rounded-full px-12 py-4 min-w-[160px]"
//             activeOpacity={0.8}
//           >
//             <Text className="text-white text-lg font-semibold text-center">
//               Continue
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default AgeSelector;

// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StatusBar } from "react-native";
// const WheelPicker = require("react-native-wheel-pick"); // ✅ FIX

// const AgeSelector = () => {
//   const [selectedAge, setSelectedAge] = useState(32);

//   // Generate age array from 18 to 100
//   const ages = Array.from({ length: 83 }, (_, i) => i + 18);

//   return (
//     <View className="flex-1 bg-white">
//       {/* Status Bar */}
//       <StatusBar barStyle="dark-content" />

//       {/* Status Bar Area */}
//       <View className="h-11 bg-white px-4 flex-row items-center justify-between">
//         <Text className="text-sm font-medium">09:30 PM</Text>
//         <View className="flex-row items-center gap-1">
//           {/* Status icons area */}
//         </View>
//       </View>

//       {/* Main Content */}
//       <View className="flex-1 px-6 pt-8">
//         {/* Title */}
//         <Text className="text-3xl font-bold text-center mb-12">
//           <Text className="text-gray-900">Select Your </Text>
//           <Text className="text-orange-500">Age</Text>
//         </Text>

//         {/* Age Picker Container */}
//         <View className="flex-1 items-center justify-center -mt-16">
//           {/* Selection Indicator Lines */}
//           <View
//             className="absolute w-64 h-16"
//             style={{ zIndex: 10, pointerEvents: "none" }}
//           >
//             <View className="absolute top-0 left-0 right-0 h-0.5 bg-orange-500" />
//             <View className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
//           </View>

//           {/* Arrow Indicator */}
//           <View
//             className="absolute left-4"
//             style={{
//               zIndex: 10,
//               width: 0,
//               height: 0,
//               borderTopWidth: 12,
//               borderBottomWidth: 12,
//               borderLeftWidth: 16,
//               borderTopColor: "transparent",
//               borderBottomColor: "transparent",
//               borderLeftColor: "#f97316",
//               pointerEvents: "none",
//             }}
//           />

//           {/* Wheel Picker */}
//           <WheelPicker
//             selectedItem={selectedAge - 18}
//             data={ages.map((age) => age.toString())}
//             onItemSelected={(index: number) => setSelectedAge(ages[index])}
//             itemHeight={70}
//             selectedItemTextColor="#1f2937"
//             itemTextColor="#9ca3af"
//             selectedItemTextSize={56}
//             itemTextSize={48}
//             selectedItemTextFontFamily="System"
//             itemTextFontFamily="System"
//             initPosition={14} // Start at age 32 (index 14)
//             style={{
//               width: 300,
//               height: 490,
//             }}
//           />
//         </View>

//         {/* Bottom Buttons */}
//         <View className="pb-8 pt-4 flex-row justify-center gap-4">
//           <TouchableOpacity
//             className="bg-orange-500 rounded-full px-12 py-4 min-w-[160px]"
//             activeOpacity={0.8}
//           >
//             <Text className="text-white text-lg font-semibold text-center">
//               Back
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             className="bg-orange-500 rounded-full px-12 py-4 min-w-[160px]"
//             activeOpacity={0.8}
//           >
//             <Text className="text-white text-lg font-semibold text-center">
//               Continue
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default AgeSelector;
