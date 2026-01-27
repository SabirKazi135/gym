import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { createContext, ReactNode, useContext, useState } from "react";

const AppLoaderContext = createContext<{
  ready: boolean;
  setReady: (v: boolean) => void;
}>({
  ready: false,
  setReady: () => {},
});

export function AppLoaderProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  // 🚨 If fonts not loaded → render nothing (keep splash)
  if (!fontsLoaded) return null;

  return (
    <AppLoaderContext.Provider value={{ ready, setReady }}>
      {children}
    </AppLoaderContext.Provider>
  );
}

export function useAppLoader() {
  return useContext(AppLoaderContext);
}
