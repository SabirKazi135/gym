import NavButton from "@/components/onboarding/NavButton";
import React from "react";
import AgeWheelPicker from "@/components/onboarding/WheelPicker2";

import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WeightInputPage() {
  const [weight, setWeight] = React.useState(32);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      <View className="flex-1 p-6">
        <Text className="text-[28px] font-bold text-center mt-6 mb-12">
          <Text className="text-gray-900">Select Your Present</Text>
          <Text className="text-orange-500">Weight</Text>
        </Text>

        <View className="h-full flex-1 w-full justify-center items-center">
          <AgeWheelPicker value={weight} onChange={setWeight} />
        </View>

        <View className="pb-6 pt-4 flex-row justify-center gap-4">
          <NavButton
            width="half"
            title="back"
            rounded="full"
            to="/(onboarding)/ageInputPage"
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
