import { View, Text, Pressable } from "react-native";
import { useState } from "react";
import ArrowDown from 'assets/svgs/class/ArrowDown.svg';
import { useSettingsStore, BlurLevel } from '@/store/settingsStore';
import { capitalize } from "@/utils/capitalizer";

type Props = {
  width?: number;
  borderColor?: string;
  isDefault?: boolean;
  selected: BlurLevel;
  onChange: React.Dispatch<React.SetStateAction<BlurLevel>>;
}

export default function CustomSelector({width = 60, borderColor = 'E5E5E5', isDefault = false, selected, onChange} : Props) {
  const [open, setOpen] = useState(false);
  const classSettings = useSettingsStore(s => s.classSettings)
  const [data, setData] = useState<BlurLevel>(selected);
  const updateClassSettings = useSettingsStore(s => s.updateClassSettings);

  const blurLevels: BlurLevel[] = [
  BlurLevel.Low,
  BlurLevel.Medium,
  BlurLevel.High,
  BlurLevel.None
]
  
  return (
    <View className={`w-[${width}%] relative`}>
      <Pressable
        onPress={() => setOpen((prev) => !prev)}
        className={`border border-[#${borderColor}] px-3 py-2 flex-row justify-between items-center rounded-sm bg-white`}
        style={{ zIndex: 10 }}
      >
        {isDefault ? <Text className="font-medium text-sm">{capitalize(classSettings.defaultBlurLevel)}</Text> : <Text className="font-medium text-sm">{capitalize(data)}</Text>}
        
        
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
          {blurLevels.map((item, index) => (
            <Pressable
              key={item}
              onPress={() => {
                if (isDefault){
                  updateClassSettings("defaultBlurLevel", item)
                }
                else{
                  onChange(item);
                  setData(item);
                }
                setOpen(false);
              }}
              className={`px-3 py-2 ${
                index !== 3 ? "border-b border-gray-200" : ""
              }`}
            >
              <Text className="font-medium">{capitalize(item)}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}