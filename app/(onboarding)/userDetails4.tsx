import NavButton from "@/components/onboarding/NavButton";
import React from "react";
import WeightWheelPicker from "@/components/onboarding/WheelPicker2";
import UnitToggle from "@/components/onboarding/UnitToggle";
import {router} from "expo-router"

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
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="dark-content" />

      <View className="flex-1 p-6">
        {/* Title */}
        <View className="flex items-center mt-4 gap-4">
          
            <Text className="text-2xl font-semibold text-center">
              What&apos;s Your Present <Text className="text-primary">
               Weight
            </Text>
            </Text>
          
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
        <View className="bg-light_red p-4 mb-6 rounded-md">
          <Text className="font-semibold text-lg text-black">Your BMI Result :</Text>
          <View className="flex-row items-end gap-2">
            <Text className="font-semibold text-3xl text-primary">22.5</Text>
            <Text className="font-regular text-xs mb-3">which falls in the <Text className="font-semibold">Healthy Range.</Text></Text>
          </View>
          <Text className="font-regular text-sm">Keep maintaining balance with exercise, diet, and relaxation.</Text>
        </View>

        {/* Navigation */}
        <View className="pb-6 pt-4 flex-row justify-center gap-4">
          <NavButton
            width="half"
            title="Back"
            rounded="full"
            onPress={() => router.back()}
          />
          <NavButton
            width="half"
            title="Continue"
            rounded="full"
            to="/(onboarding)/userFeature2"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
