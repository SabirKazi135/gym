import NavButton from "@/components/onboarding/NavButton";
import AgeWheelPicker from "@/components/onboarding/WheelPicker";
import React from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AgeSelector: React.FC = () => {
  const [age, setAge] = React.useState(32);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      {/* Content */}
      <View className="flex-1  p-6">
        {/* Title */}
        <Text className="text-[28px] font-bold  text-center mt-6 mb-12">
          <Text className="text-gray-900">Select Your </Text>
          <Text className="text-orange-500">Age</Text>
        </Text>

        {/* Picker */}
        {/* Picker */}
        <View className="h-full flex-1 w-full justify-center items-center">
          <AgeWheelPicker value={age} onChange={setAge} />
        </View>

        {/* Buttons */}
        <View className="pb-6 pt-4  flex-row justify-center gap-4">
          <NavButton
            width="half"
            title="back"
            rounded="full"
            to="/(onboarding)/userDetails1"
          />
          <NavButton
            width="half"
            title="continue"
            rounded="full"
            to="/(onboarding)/heightInputPage"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AgeSelector;
