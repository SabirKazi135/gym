import { View, Text, Pressable } from "react-native";
import { useState } from "react";
import ArrowDown from 'assets/svgs/class/ArrowDown.svg'

export default function CustomSelector() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("Low");

  return (
    <View className="w-[60%] relative">
      <Pressable
        onPress={() => setOpen((prev) => !prev)}
        className="border border-[#4C1616] px-3 py-2 flex-row justify-between items-center rounded-sm bg-white"
        style={{ zIndex: 10 }}
      >
        <Text className="font-medium text-sm">{data}</Text>
        <ArrowDown />
      </Pressable>

      {open && (
        <View
          className="absolute top-12 left-0 w-full bg-white border border-[#E5E5E5] rounded-md overflow-hidden"
          style={{
            zIndex: 20,
            elevation: 20,
          }}
        >
          {["Low", "Medium", "High"].map((item, index) => (
            <Pressable
              key={item}
              onPress={() => {
                setData(item);
                setOpen(false);
              }}
              className={`px-3 py-2 ${
                index !== 2 ? "border-b border-gray-200" : ""
              }`}
            >
              <Text className="font-medium">{item}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}