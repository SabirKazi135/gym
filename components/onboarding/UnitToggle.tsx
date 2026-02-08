import React, { useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type UnitToggleProps = {
  leftLabel: string;
  rightLabel: string;
  value: string;
  onChange: (value: string) => void;
};

export default function UnitToggle({
  leftLabel,
  rightLabel,
  value,
  onChange,
}: UnitToggleProps) {
  const isLeft = value === leftLabel;
  const translateX = useSharedValue(isLeft ? 0 : 68);

  useEffect(() => {
    translateX.value = withTiming(isLeft ? 5 : 60, {
      duration: 300,
    });
  }, [isLeft]);

  const sliderStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <Pressable
      onPress={() => onChange(isLeft ? rightLabel : leftLabel)}
      className="w-[35%] h-[40px] rounded-full bg-background
                 shadow-lg shadow-black flex-row items-center px-[5px]"
    >
      {/* Slider */}
      <Animated.View
        style={sliderStyle}
        className="absolute w-[50%] h-[30px] rounded-full bg-[#E37528]"
      />

      {/* Left label */}
      <Text
        className={`
          w-1/2 text-center text-[24px] font-semibold
          ${isLeft ? "text-white" : "text-[#363636]"}
        `}
      >
        {leftLabel}
      </Text>

      {/* Right label */}
      <Text
        className={`
          w-1/2 text-center text-[24px] font-semibold
          ${!isLeft ? "text-white" : "text-[#363636]"}
        `}
      >
        {rightLabel}
      </Text>
    </Pressable>
  );
}
