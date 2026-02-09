import NavButton from "@/components/onboarding/NavButton";
import { View, Text, Pressable } from "react-native";
import {useState} from "react";
import { Image } from "expo-image";

export default function UserDetails1() {
    const maleImage = require("../../assets/images/male_gender-picture.png");
    const femaleImage = require("../../assets/images/gender-female-picture.png");
    const otherImage = require("../../assets/images/gender-other.png");

    const [selectedGender, setSelectedGender] = useState<"male" | "female" | "other" | null>(null);
    return (
        <View className="flex-1 bg-background  px-6 items-center justify-between py-10">
            <View className=" pt-12 items-center">
                <Text className="font-regular text-lg">Welcome to weavfit</Text>
                <Text className="font-semibold text-2xl">What&apos;s Your <Text className="text-primary">Gender</Text></Text>
            </View>
            <View className="w-full h-auto mt-16 flex-wrap justify-center items-center gap-4 flex-row">
                {/* <Text>{maleImage}</Text> */}
                <GenderSelector gender="Male" image={maleImage} varient="default" active={selectedGender === "male"} onSelect={setSelectedGender} />
                <GenderSelector gender="Female" image={femaleImage} varient="default" active={selectedGender === "female"} onSelect={setSelectedGender} />
                <GenderSelector gender="Other" image={otherImage} varient="v2" active={selectedGender === "other"} onSelect={setSelectedGender} />
            </View>
            <NavButton title="Continue" to="/(onboarding)/userDetails2" width="full" rounded="full" active={selectedGender !== null} />
        </View>
    );
}

function GenderSelector({gender, image, varient, active, onSelect}: {gender: string, image: any, varient: string, active: boolean, onSelect: (value: "male" | "female" | "other") => void}) {
    const value1 = gender.toLowerCase();
    return (
        <Pressable onPress={() => onSelect(value1 as "male" | "female" | "other")} className={`relative w-[45%] h-auto border-2 ${active ? "border-primary" : "border-gray-200"} rounded-sm items-center justify-center`}>
            <Text className={`font-semibold mt-2`}>{gender}</Text>
            <View className={`w-full h-[30%] overflow-hidden ${varient === "default" ? "justify-start" : "justify-center"} items-center`}>
                <View className={`absolute ${varient === "default" ? "w-[60%] h-[60%]" : "w-[75%] h-[75%]"} rounded-[50%] ${active ? "bg-primary" : "bg-gray-200"}`}></View>
                <Image source={image} style={{ width: `${varient === "default" ? "100%" : "35%"}`, height: `${varient === "default" ? "103%" : "35%"}` }} contentFit="contain"/>
            </View>
        </Pressable>
    );
}