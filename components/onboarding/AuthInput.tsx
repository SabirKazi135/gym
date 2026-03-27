import { useState } from "react";
import { TextInput, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type AuthInputProps = {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;

  // UI control
  width?: "full" | "half";
  type?: "text" | "email" | "password";

  // icons
  leftIcon?: keyof typeof Ionicons.glyphMap;
};

export default function AuthInput({
  placeholder,
  value,
  onChangeText,
  width = "full",
  type = "text",
  leftIcon,
}: AuthInputProps) {
  const [secure, setSecure] = useState(type === "password");

  const widthClass = width === "half" ? "w-[48%]" : "w-full";

  return (
    <View
      className={`flex-row items-center border rounded-[5px] px-3 h-[50px] border-[#363636]  ${widthClass}`}
    >
      {/* LEFT ICON */}
      {leftIcon && (
        <Ionicons name={leftIcon} size={20} color="#F97316" className="mr-2" />
      )}

      {/* INPUT */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secure}
        className="flex-1 text-[15px] text-black placeholder:text-[#363636]  font-regular outline-none"
      />

      {/* RIGHT ICON (PASSWORD EYE) */}
      {type === "password" && (
        <Pressable onPress={() => setSecure(!secure)}>
          <Ionicons
            name={secure ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#F97316"
          />
        </Pressable>
      )}
    </View>
  );
}
