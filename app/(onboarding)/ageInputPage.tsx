import NavButton from "@/components/onboarding/NavButton";
import {AgeWheelPicker} from "@/components/onboarding/WheelPicker";
import React from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AgeSelector: React.FC = () => {
  const [age, setAge] = React.useState(32);

  return (
    <SafeAreaView className="flex-1 py-10 px-6  bg-white">
      <StatusBar barStyle="dark-content" />

      {/* Content */}
      <View className="flex-1">
        {/* Title */}
        <Text className="text-[28px] font-semibold text-center mt-6 mb-12">
          Select Your 
          <Text className="text-primary"> Age</Text>
        </Text>

        {/* Picker */}
        {/* Picker */}
        <View className="h-full border flex-1 w-full justify-center items-center">
          <AgeWheelPicker value={age} onChange={setAge} />
        </View>

        {/* Buttons */}
        <View className=" flex-row justify-center gap-4">
          <NavButton
            width="half"
            title="Back"
            rounded="full"
            to="/(onboarding)/userDetails1"
          />
          <NavButton
            width="half"
            title="Continue"
            rounded="full"
            to="/(onboarding)/userFeature1"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AgeSelector;
