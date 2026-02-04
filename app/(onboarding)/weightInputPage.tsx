import NavButton from "@/components/onboarding/NavButton";
import React from "react";
import WeightWheelPicker from "@/components/onboarding/WheelPicker2";
import UnitToggle from "@/components/onboarding/UnitToggle";

import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WeightInputPage() {
  // ✅ STORE BASE VALUE IN KG ONLY
  const [weightKg, setWeightKg] = React.useState(70);
  const [unit, setUnit] = React.useState<"kg" | "lb">("kg");

  // --- conversion helpers ---
  const kgToLb = (kg: number) => Math.round(kg * 2.20462);
  const lbToKg = (lb: number) => Math.round(lb / 2.20462);

  // --- value shown in picker ---
  const displayedWeight =
    unit === "kg" ? weightKg : kgToLb(weightKg);

  // --- picker change handler ---
  const handleWeightChange = (value: number) => {
    if (unit === "kg") {
      setWeightKg(value);
    } else {
      setWeightKg(lbToKg(value));
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      <View className="flex-1 p-6">
        {/* Title */}
        <View className="flex items-center mt-4 gap-4">
          <View>
            <Text className="text-gray-900 text-[28px] font-bold text-center">
              Select Your Present
            </Text>
            <Text className="text-orange-500 text-[28px] font-bold text-center">
              Weight
            </Text>
          </View>

          {/* Unit toggle */}
          <UnitToggle
            leftLabel="kg"
            rightLabel="lb"
            value={unit}
            onChange={(value) => setUnit(value as "kg" | "lb")}
          />
        </View>

        {/* Picker */}
        <View className="flex-1 w-full justify-center items-center">
          <WeightWheelPicker
            value={displayedWeight}
            onChange={handleWeightChange}
          />
        </View>

        {/* Navigation */}
        <View className="pb-6 pt-4 flex-row justify-center gap-4">
          <NavButton
            width="half"
            title="back"
            rounded="full"
            to="/(onboarding)/heightInputPage"
          />
          <NavButton
            width="half"
            title="continue"
            rounded="full"
            to="/(main)/home"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
