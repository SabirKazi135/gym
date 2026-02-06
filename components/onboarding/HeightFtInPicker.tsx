import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

const ITEM_HEIGHT = 64;
const VISIBLE_ITEMS = 7;
const SELECTED_SCALE = 1.2;
const LINE_VISUAL_OFFSET = ITEM_HEIGHT * 0.12;

const feetData = Array.from({ length: 8 }, (_, i) => i + 1);   // 1–8 ft
const inchData = Array.from({ length: 12 }, (_, i) => i);     // 0–11 in

type Props = {
  ft: number;
  inch: number;
  onChange: (ft: number, inch: number) => void;
};

export default function HeightFtInPicker({ ft, inch, onChange }: Props) {
  return (
    <View className="flex-row items-center justify-center gap-10">
      <Wheel
        data={feetData}
        value={ft}
        onChange={(v) => onChange(v, inch)}
        label="ft"
      />

      <Wheel
        data={inchData}
        value={inch}
        onChange={(v) => onChange(ft, v)}
        label="in"
      />
    </View>
  );
}

/* -------------------------------------------------- */
/* SINGLE WHEEL — SAME LOGIC AS YOUR AGE PICKER        */
/* -------------------------------------------------- */

function Wheel({
  data,
  value,
  onChange,
  label,
}: {
  data: number[];
  value: number;
  onChange: (v: number) => void;
  label: string;
}) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView | null>(null);
  const hasInitialScroll = useRef(false);
  const initialValueRef = useRef(value);

  useEffect(() => {
    if (hasInitialScroll.current) return;
    hasInitialScroll.current = true;

    const idx = data.indexOf(initialValueRef.current);
    requestAnimationFrame(() => {
      scrollViewRef.current?.scrollTo({
        y: idx * ITEM_HEIGHT,
        animated: false,
      });
    });
  }, []);

  const reportSelection = (y: number) => {
    const index = Math.max(
      0,
      Math.min(data.length - 1, Math.round(y / ITEM_HEIGHT))
    );
    onChange(data[index]);
  };

  return (
    <View className="items-center">
      <View
        className="relative items-center justify-center"
        style={{ height: ITEM_HEIGHT * VISIBLE_ITEMS, width: 120 }}
      >
        {/* Selection lines */}
        <View
          pointerEvents="none"
          className="absolute w-[100px] justify-between z-10"
          style={{
            height: ITEM_HEIGHT,
            top: "50%",
            transform: [
              { translateY: -ITEM_HEIGHT / 2 },
              {
                translateY:
                  (ITEM_HEIGHT * (SELECTED_SCALE - 1)) / 2 -
                  LINE_VISUAL_OFFSET,
              },
            ],
          }}
        >
          <View className="h-[2px] rounded-lg bg-orange-500" />
          <View className="h-[2px] rounded-lg bg-orange-500" />
        </View>

        <Animated.ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          snapToOffsets={data.map((_, i) => i * ITEM_HEIGHT)}
          decelerationRate="normal"
          bounces={false}
          overScrollMode="never"
          onMomentumScrollEnd={(e) =>
            reportSelection(e.nativeEvent.contentOffset.y)
          }
          onScrollEndDrag={(e) =>
            reportSelection(e.nativeEvent.contentOffset.y)
          }
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={1}
          contentContainerStyle={{
            paddingVertical: ITEM_HEIGHT * 3,
            alignItems: "center",
          }}
          style={{ height: ITEM_HEIGHT * VISIBLE_ITEMS }}
        >
          {data.map((item, index) => {
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
              outputRange: [
                0.6,
                0.7,
                0.85,
                SELECTED_SCALE,
                0.85,
                0.7,
                0.6,
              ],
              extrapolate: "clamp",
            });

            const opacity = scrollY.interpolate({
              inputRange,
              outputRange: [0, 0.25, 0.5, 1, 0.5, 0.25, 0],
              extrapolate: "clamp",
            });

            return (
              <TouchableOpacity
                key={item}
                activeOpacity={0.8}
                onPress={() =>
                  scrollViewRef.current?.scrollTo({
                    y: index * ITEM_HEIGHT,
                    animated: true,
                  })
                }
                style={{ height: ITEM_HEIGHT }}
                className="items-center justify-center"
              >
                <Animated.Text
                  className="text-[44px] font-bold text-gray-800"
                  style={{
                    opacity,
                    transform: [{ scale }],
                  }}
                >
                  {item}
                </Animated.Text>
              </TouchableOpacity>
            );
          })}
        </Animated.ScrollView>
      </View>

      <Text className="mt-2 text-lg font-semibold text-gray-500">
        {label}
      </Text>
    </View>
  );
}
