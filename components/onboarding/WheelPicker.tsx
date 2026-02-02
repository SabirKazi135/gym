// // import React, { useEffect, useRef } from "react";
// // import {
// //   View,
// //   TouchableOpacity,
// //   Animated,
// //   NativeScrollEvent,
// //   NativeSyntheticEvent,
// // } from "react-native";

// // type AgeWheelPickerProps = {
// //   value: number;
// //   onChange?: (value: number) => void;
// // };

// // const ITEM_HEIGHT = 64;
// // const VISIBLE_ITEMS = 7;
// // const SELECTED_SCALE = 1.2;
// // const LINE_VISUAL_OFFSET = ITEM_HEIGHT * 0.12;

// // const ages = Array.from({ length: 83 }, (_, i) => i + 18);

// // const AgeWheelPicker: React.FC<AgeWheelPickerProps> = ({ value, onChange }) => {
// //   const scrollY = useRef(new Animated.Value(0)).current;
// //   const scrollViewRef = useRef<Animated.ScrollView | null>(null);

// //   const initialIndex = ages.indexOf(value);

// //   useEffect(() => {
// //     requestAnimationFrame(() => {
// //       scrollViewRef.current?.scrollTo({
// //         y: initialIndex * ITEM_HEIGHT,
// //         animated: false,
// //       });
// //     });
// //   }, [initialIndex]);

// //   const handleMomentumScrollEnd = (
// //     e: NativeSyntheticEvent<NativeScrollEvent>,
// //   ) => {
// //     const index = Math.round(e.nativeEvent.contentOffset.y / ITEM_HEIGHT);
// //     onChange?.(ages[index]);
// //   };

// //   return (
// //     <View className="items-center w-full justify-center">
// //       <View
// //         className="relative items-center justify-center w-full"
// //         style={{ height: ITEM_HEIGHT * VISIBLE_ITEMS }}
// //       >
// //         {/* Selection Lines */}
// //         <View
// //           pointerEvents="none"
// //           className="absolute w-[220px] justify-between z-10"
// //           style={{
// //             height: ITEM_HEIGHT,
// //             top: "50%",
// //             transform: [
// //               { translateY: -ITEM_HEIGHT / 2 },
// //               {
// //                 translateY:
// //                   (ITEM_HEIGHT * (SELECTED_SCALE - 1)) / 2 - LINE_VISUAL_OFFSET,
// //               },
// //             ],
// //           }}
// //         >
// //           <View className="h-[2px] bg-orange-500" />
// //           <View className="h-[2px] bg-orange-500" />
// //         </View>

// //         {/* Arrow */}
// //         <View
// //           pointerEvents="none"
// //           className="absolute left-0 z-10"
// //           style={{
// //             top: "50%",
// //             transform: [{ translateY: -8 }],
// //             width: 0,
// //             height: 0,
// //             borderTopWidth: 8,
// //             borderBottomWidth: 8,
// //             borderLeftWidth: 12,
// //             borderTopColor: "transparent",
// //             borderBottomColor: "transparent",
// //             borderLeftColor: "#f97316",
// //           }}
// //         />

// //         {/* Scroll */}
// //         <Animated.ScrollView
// //           ref={scrollViewRef}
// //           showsVerticalScrollIndicator={false}
// //           snapToInterval={ITEM_HEIGHT}
// //           decelerationRate="fast"
// //           onMomentumScrollEnd={handleMomentumScrollEnd}
// //           onScroll={Animated.event(
// //             [{ nativeEvent: { contentOffset: { y: scrollY } } }],
// //             { useNativeDriver: true },
// //           )}
// //           scrollEventThrottle={16}
// //           contentContainerStyle={{
// //             paddingVertical: ITEM_HEIGHT * 3,
// //             alignItems: "center",
// //           }}
// //           style={{ height: ITEM_HEIGHT * VISIBLE_ITEMS }}
// //         >
// //           {ages.map((age, index) => {
// //             const inputRange = [
// //               (index - 3) * ITEM_HEIGHT,
// //               (index - 2) * ITEM_HEIGHT,
// //               (index - 1) * ITEM_HEIGHT,
// //               index * ITEM_HEIGHT,
// //               (index + 1) * ITEM_HEIGHT,
// //               (index + 2) * ITEM_HEIGHT,
// //               (index + 3) * ITEM_HEIGHT,
// //             ];

// //             const scale = scrollY.interpolate({
// //               inputRange,
// //               outputRange: [0.6, 0.7, 0.85, SELECTED_SCALE, 0.85, 0.7, 0.6],
// //               extrapolate: "clamp",
// //             });

// //             const opacity = scrollY.interpolate({
// //               inputRange,
// //               outputRange: [0, 0.25, 0.5, 1, 0.5, 0.25, 0],
// //               extrapolate: "clamp",
// //             });

// //             return (
// //               <TouchableOpacity
// //                 key={age}
// //                 activeOpacity={0.8}
// //                 onPress={() =>
// //                   scrollViewRef.current?.scrollTo({
// //                     y: index * ITEM_HEIGHT,
// //                     animated: true,
// //                   })
// //                 }
// //                 className="items-center justify-center"
// //                 style={{ height: ITEM_HEIGHT }}
// //               >
// //                 <Animated.Text
// //                   className="text-[44px] font-bold text-gray-800"
// //                   style={{
// //                     opacity,
// //                     transform: [{ scale }],
// //                   }}
// //                 >
// //                   {age}
// //                 </Animated.Text>
// //               </TouchableOpacity>
// //             );
// //           })}
// //         </Animated.ScrollView>
// //       </View>
// //     </View>
// //   );
// // };

// // export default AgeWheelPicker;

import React, { useEffect, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Animated,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

type AgeWheelPickerProps = {
  value: number;
  onChange?: (value: number) => void;
};

const ITEM_HEIGHT = 64;
const VISIBLE_ITEMS = 7;
const SELECTED_SCALE = 1.2;
const LINE_VISUAL_OFFSET = ITEM_HEIGHT * 0.12;

const ages = Array.from({ length: 83 }, (_, i) => i + 18);

const AgeWheelPicker: React.FC<AgeWheelPickerProps> = ({ value, onChange }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView | null>(null);
  const hasInitialScroll = useRef(false);
  const initialValueRef = useRef(value);

  // 🔒 Initial positioning only on mount — prevents glitch when onChange triggers parent re-render
  useEffect(() => {
    if (hasInitialScroll.current) return;
    hasInitialScroll.current = true;
    const idx = ages.indexOf(initialValueRef.current);
    requestAnimationFrame(() => {
      scrollViewRef.current?.scrollTo({
        y: idx * ITEM_HEIGHT,
        animated: false,
      });
    });
  }, []);

  // Only report selected value — no programmatic scroll (no roll back)
  const reportSelection = (contentOffsetY: number) => {
    const index = Math.max(
      0,
      Math.min(ages.length - 1, Math.round(contentOffsetY / ITEM_HEIGHT))
    );
    onChange?.(ages[index]);
  };

  const handleMomentumScrollEnd = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    reportSelection(e.nativeEvent.contentOffset.y);
  };

  const handleScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    reportSelection(e.nativeEvent.contentOffset.y);
  };

  return (
    <View className="items-center w-full justify-center">
      <View
        className="relative items-center justify-center w-full"
        style={{ height: ITEM_HEIGHT * VISIBLE_ITEMS }}
      >
        {/* Selection Lines */}
        <View
          pointerEvents="none"
          className="absolute w-[220px] justify-between z-10"
          style={{
            height: ITEM_HEIGHT,
            top: "50%",
            transform: [
              { translateY: -ITEM_HEIGHT / 2 },
              {
                translateY:
                  (ITEM_HEIGHT * (SELECTED_SCALE - 1)) / 2 - LINE_VISUAL_OFFSET,
              },
            ],
          }}
        >
          <View className="h-[2px] bg-orange-500" />
          <View className="h-[2px] bg-orange-500" />
        </View>

        {/* Arrow */}
        <View
          pointerEvents="none"
          className="absolute left-0 z-10"
          style={{
            top: "50%",
            transform: [{ translateY: -8 }],
            width: 0,
            height: 0,
            borderTopWidth: 8,
            borderBottomWidth: 8,
            borderLeftWidth: 12,
            borderTopColor: "transparent",
            borderBottomColor: "transparent",
            borderLeftColor: "#f97316",
          }}
        />

        {/* Scroll */}
        <Animated.ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          snapToOffsets={ages.map((_, i) => i * ITEM_HEIGHT)}
          decelerationRate="normal"
          bounces={false}
          overScrollMode="never"
          onMomentumScrollEnd={handleMomentumScrollEnd}
          onScrollEndDrag={handleScrollEndDrag}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true },
          )}
          scrollEventThrottle={1}
          contentContainerStyle={{
            paddingVertical: ITEM_HEIGHT * 3,
            alignItems: "center",
          }}
          style={{ height: ITEM_HEIGHT * VISIBLE_ITEMS }}
        >
          {ages.map((age, index) => {
            const inputRange = [
              (index - 3) * ITEM_HEIGHT,
              (index - 2) * ITEM_HEIGHT,
              (index - 1) * ITEM_HEIGHT,
              index * ITEM_HEIGHT,
              (index + 1) * ITEM_HEIGHT,
              (index + 2) * ITEM_HEIGHT,
              (index + 3) * ITEM_HEIGHT,
            ];

            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [0.6, 0.7, 0.85, SELECTED_SCALE, 0.85, 0.7, 0.6],
              extrapolate: "clamp",
            });

            const opacity = scrollY.interpolate({
              inputRange,
              outputRange: [0, 0.25, 0.5, 1, 0.5, 0.25, 0],
              extrapolate: "clamp",
            });

            return (
              <TouchableOpacity
                key={age}
                activeOpacity={0.8}
                onPress={() =>
                  scrollViewRef.current?.scrollTo({
                    y: index * ITEM_HEIGHT,
                    animated: true,
                  })
                }
                className="items-center justify-center"
                style={{ height: ITEM_HEIGHT }}
              >
                <Animated.Text
                  className="text-[44px] font-bold text-gray-800"
                  style={{
                    opacity,
                    transform: [{ scale }],
                  }}
                >
                  {age}
                </Animated.Text>
              </TouchableOpacity>
            );
          })}
        </Animated.ScrollView>
      </View>
    </View>
  );
};

export default AgeWheelPicker;
