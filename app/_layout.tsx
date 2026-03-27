import { AppLoaderProvider } from "@/utils/AppLoader";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./globals.css";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient()
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <AppLoaderProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </AppLoaderProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
