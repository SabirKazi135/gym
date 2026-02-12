import { View, Text } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface Props {
  size?: number;
  strokeWidth?: number;
  progress: number; // 0–100
}

export default function CircleProgress({
  size = 90,
  strokeWidth = 10,
  progress,
}: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // progress offset
  const strokeDashoffset =
    circumference - (circumference * progress) / 100;

  return (
    <View className="items-center justify-center">
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          stroke="#A22E2E"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />

        {/* Progress Circle */}
        <Circle
          stroke="#FF9696"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>

      {/* Center Text */}
      <View className="absolute">
        <Text className="text-md font-semibold">
          {progress}%
        </Text>
      </View>
    </View>
  );
}
