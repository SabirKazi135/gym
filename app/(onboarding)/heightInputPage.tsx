import NavButton from "@/components/onboarding/NavButton";
import React from "react";
import {AgeWheelPicker} from "@/components/onboarding/WheelPicker";
import UnitToggle from "@/components/onboarding/UnitToggle";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeightFtInPicker from "@/components/onboarding/HeightFtInPicker";

export default function HeightInputPage() {
  const [height, setHeight] = React.useState(32);
const [unit, setUnit] = React.useState<"cm" | "ft">("cm");
const [heightFt, setHeightFt] = React.useState(5);
const [heightIn, setHeightIn] = React.useState(8);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      <View className="flex-1 p-6">
        <View className="flex justify-center items-center flex-col text-center mt-4 gap-4">
          <View>
            <Text className="text-gray-900 text-center text-[28px] font-semibold">Select Your Present
            <Text className="text-primary"> Height</Text></Text>
          </View>
          <View>
            <UnitToggle
              leftLabel="cm"
              rightLabel="ft"
              value={unit}
              onChange={(value) => setUnit(value as "cm" | "ft")}
            />
          </View>
        </View>

        <View className="h-full flex-1 w-full justify-center items-center">
          {/* <AgeWheelPicker value={height} onChange={setHeight} /> */}
          {unit === "cm" ? (
  <AgeWheelPicker value={height} onChange={setHeight} />
) : (
  <HeightFtInPicker
    ft={heightFt}
    inch={heightIn}
    onChange={(ft, inch) => {
      setHeightFt(ft);
      setHeightIn(inch);
    }}
  />
)}

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
            to="/(onboarding)/weightInputPage"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
