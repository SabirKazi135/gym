import React, { useEffect, useRef } from "react";
import {
  View,
  Animated,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
} from "react-native";

const ITEM_HEIGHT = 70;
const VISIBLE_ITEMS = 5;
const SELECTED_SCALE = 1.15;

const ages = Array.from({ length: 83 }, (_, i) => i + 18);

type Props = {
  value: number;
  onChange: (val: number) => void;
};

export const AgeWheelPicker: React.FC<Props> = ({ value, onChange }) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<ScrollView>(null);

  // ✅ Default start age = 32
  const defaultAge = 32;

  // ✅ Safe index finder
  const getSafeIndex = (val: number) => {
    const idx = ages.indexOf(val);
    return idx === -1 ? ages.indexOf(defaultAge) : idx;
  };

  const initialIndex = useRef(getSafeIndex(value));

  // ✅ Scroll only once on mount
  useEffect(() => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({
        y: initialIndex.current * ITEM_HEIGHT,
        animated: false,
      });
    });
  }, []);

  // ✅ Only report selected value (NO extra snapping scroll)
  const handleMomentumEnd = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const offsetY = e.nativeEvent.contentOffset.y;

    const index = Math.round(offsetY / ITEM_HEIGHT);
    const safeIndex = Math.max(0, Math.min(index, ages.length - 1));

    onChange(ages[safeIndex]);
  };

  return (
    <View className="items-center overflow-hidden w-[50%] justify-center">
      <View
        className="relative items-center justify-center w-[70%]"
        style={{ height: ITEM_HEIGHT * VISIBLE_ITEMS }}
      >
        {/* Selection Lines */}
        <View
          pointerEvents="none"
          className="absolute w-[70%] justify-between z-10"
          style={{
            height: ITEM_HEIGHT,
            top: "50%",
            transform: [{ translateY: -ITEM_HEIGHT / 2 }],
          }}
        >
          <View className="h-[3px] rounded-md bg-orange-500" />
          <View className="h-[3px] rounded-md bg-orange-500" />
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

        {/* Scroll Picker */}
        <Animated.ScrollView
          ref={scrollRef}
          showsVerticalScrollIndicator={false}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          bounces={false}
          overScrollMode="never"
          onMomentumScrollEnd={handleMomentumEnd}
          scrollEventThrottle={16}
          contentContainerStyle={{
            paddingVertical: ITEM_HEIGHT * 2,
            alignItems: "center",
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          style={{ height: ITEM_HEIGHT * VISIBLE_ITEMS }}
        >
          {ages.map((age, index) => {
            const inputRange = [
              (index - 2) * ITEM_HEIGHT,
              (index - 1) * ITEM_HEIGHT,
              index * ITEM_HEIGHT,
              (index + 1) * ITEM_HEIGHT,
              (index + 2) * ITEM_HEIGHT,
            ];

            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [0.75, 0.9, SELECTED_SCALE, 0.9, 0.75],
              extrapolate: "clamp",
            });

            const opacity = scrollY.interpolate({
              inputRange,
              outputRange: [0.2, 0.6, 1, 0.6, 0.2],
              extrapolate: "clamp",
            });

            return (
              <TouchableOpacity
                key={age}
                activeOpacity={0.8}
                onPress={() => {
                  scrollRef.current?.scrollTo({
                    y: index * ITEM_HEIGHT,
                    animated: true,
                  });
                  onChange(age);
                }}
                style={{
                  height: ITEM_HEIGHT,
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
