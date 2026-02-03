import React, { useEffect, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Animated,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

type WheelPicker2Props = {
  value: number;
  onChange?: (value: number) => void;
};

const ITEM_WIDTH = 80;
const VISIBLE_ITEMS = 5;
const SELECTED_SCALE = 1.0;

// Generate weights from 20 to 200 kg
const weights = Array.from({ length: 181 }, (_, i) => i + 20);

const WheelPicker2: React.FC<WheelPicker2Props> = ({ value, onChange }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView | null>(null);
  const hasInitialScroll = useRef(false);
  const initialValueRef = useRef(value);

  useEffect(() => {
    if (hasInitialScroll.current) return;
    hasInitialScroll.current = true;
    const idx = weights.indexOf(initialValueRef.current);
    requestAnimationFrame(() => {
      scrollViewRef.current?.scrollTo({
        x: idx * ITEM_WIDTH,
        animated: false,
      });
    });
  }, []);

  const reportSelection = (contentOffsetX: number) => {
    const index = Math.max(
      0,
      Math.min(weights.length - 1, Math.round(contentOffsetX / ITEM_WIDTH)),
    );
    onChange?.(weights[index]);
  };

  const handleMomentumScrollEnd = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    reportSelection(e.nativeEvent.contentOffset.x);
  };

  const handleScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    reportSelection(e.nativeEvent.contentOffset.x);
  };

  return (
    <View className="items-center w-full justify-center py-8">
      <View
        className="relative items-center justify-center"
        style={{ width: ITEM_WIDTH * VISIBLE_ITEMS, height: 120 }}
      >
        {/* Selection Indicator Lines - Vertical bars on both sides */}
        <View
          pointerEvents="none"
          className="absolute h-[100px] justify-between z-10"
          style={{
            width: ITEM_WIDTH,
            left: "50%",
            transform: [{ translateX: -ITEM_WIDTH / 2 }],
          }}
        >
          <View className="w-[3px] h-full bg-orange-500 self-center absolute left-0" />
          <View className="w-[3px] h-full bg-orange-500 self-center absolute right-0" />
        </View>

        {/* Top Arrow Indicator */}
        <View
          pointerEvents="none"
          className="absolute bottom-0 z-10"
          style={{
            left: "50%",
            transform: [{ translateX: -6 }],
            width: 0,
            height: 0,
            borderLeftWidth: 6,
            borderRightWidth: 6,
            borderBottomWidth: 10,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: "#f97316",
          }}
        />

        {/* Horizontal Scroll */}
        <Animated.ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToOffsets={weights.map((_, i) => i * ITEM_WIDTH)}
          decelerationRate="fast"
          bounces={false}
          overScrollMode="never"
          onMomentumScrollEnd={handleMomentumScrollEnd}
          onScrollEndDrag={handleScrollEndDrag}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true },
          )}
          scrollEventThrottle={16}
          contentContainerStyle={{
            paddingHorizontal: ITEM_WIDTH * 2,
            alignItems: "center",
          }}
          style={{ width: ITEM_WIDTH * VISIBLE_ITEMS }}
        >
          {weights.map((weight, index) => {
            const inputRange = [
              (index - 2) * ITEM_WIDTH,
              (index - 1) * ITEM_WIDTH,
              index * ITEM_WIDTH,
              (index + 1) * ITEM_WIDTH,
              (index + 2) * ITEM_WIDTH,
            ];

            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.7, 0.85, SELECTED_SCALE, 0.85, 0.7],
              extrapolate: "clamp",
            });

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.3, 0.5, 1, 0.5, 0.3],
              extrapolate: "clamp",
            });

            // Color interpolation for center item
            const isCenter = scrollX.interpolate({
              inputRange: [
                (index - 0.5) * ITEM_WIDTH,
                index * ITEM_WIDTH,
                (index + 0.5) * ITEM_WIDTH,
              ],
              outputRange: [0, 1, 0],
              extrapolate: "clamp",
            });

            return (
              <TouchableOpacity
                key={weight}
                activeOpacity={0.8}
                onPress={() =>
                  scrollViewRef.current?.scrollTo({
                    x: index * ITEM_WIDTH,
                    animated: true,
                  })
                }
                className="items-center justify-center"
                style={{ width: ITEM_WIDTH, height: 100 }}
              >
                <Animated.Text
                  style={{
                    fontSize: 56,
                    fontWeight: "700",
                    opacity,
                    transform: [{ scale }],
                    color: "#1f2937", // gray-800
                  }}
                >
                  {weight}
                </Animated.Text>
              </TouchableOpacity>
            );
          })}
        </Animated.ScrollView>
      </View>
    </View>
  );
};

export default WheelPicker2;
