import { Pressable, Text } from "react-native";
import { router } from "expo-router";

type NavButtonProps = {
  title: string;
  to?: string;
  onPress?: () => void;

  rounded?: "md" | "full" | number; // ✅ allow number (px)
  width?: "full" | "half";
  active?: boolean;
};

export default function NavButton({
  title,
  to,
  onPress,
  rounded = "md",
  width = "full",
  active = true,
}: NavButtonProps) {
  const handlePress = () => {
    if (onPress) return onPress();
    if (to && active) router.push(to as any);
  };

  const widthClass = width === "half" ? "w-[47%]" : "w-full";

  // ✅ Tailwind OR inline style for radius
  const radiusClass =
    rounded === "full"
      ? "rounded-full"
      : rounded === "md"
        ? "rounded-[10px]"
        : "";

  const customRadiusStyle =
    typeof rounded === "number" ? { borderRadius: rounded } : {};

  return (
    <Pressable
      className={`${active ? "bg-primary" : "bg-primary_light"} h-[52px] items-center justify-center ${widthClass} ${radiusClass}`}
      style={customRadiusStyle} // ✅ dynamic px radius
      onPress={handlePress}
    >
      <Text className="text-white text-[17px] font-semibold">{title}</Text>
    </Pressable>
  );
}
