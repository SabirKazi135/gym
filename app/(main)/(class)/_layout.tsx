import { BlurLevel, useSettingsStore } from "@/store/settingsStore";
import { Stack } from "expo-router";
import { useState, createContext, useContext, useMemo } from "react";

type CameraContextType = {
  localCamaraMode : boolean;
  setLocalCamaraMode: React.Dispatch<React.SetStateAction<boolean>>;
  localBlur: BlurLevel
  setLocalBlur: React.Dispatch<React.SetStateAction<BlurLevel>>;
}

const CameraContext = createContext<CameraContextType | null>(null);
export function useCameraAndBlur() {
  const context = useContext(CameraContext);
  if (!context) throw new Error("useCamera must be used inside CameraProvider");
  return context;
}

export default function ClassLayout() {
  const defaultBlurLevel = useSettingsStore(s => s.classSettings.defaultBlurLevel)
  const [localCamaraMode, setLocalCamaraMode] = useState<boolean>(false);
  const [localBlur, setLocalBlur] = useState<BlurLevel>(defaultBlurLevel);
  const [isLandscape, setIsLandscape] = useState(false)
  

  const value = useMemo(
    () => ({ localCamaraMode, setLocalCamaraMode, localBlur, setLocalBlur, isLandscape, setIsLandscape }),
    [localCamaraMode, localBlur, isLandscape]
  );

  
  return (
    <CameraContext.Provider value={value} >
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="classOnTap" />
        <Stack.Screen name="classTrainingZone" />
        <Stack.Screen name="classFullScreen" 
        options={{
          headerShown: false,
          presentation: "fullScreenModal"
        }}
        />
      </Stack>
    </CameraContext.Provider>
  );
}
