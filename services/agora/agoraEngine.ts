import { createAgoraRtcEngine } from "react-native-agora";

let engine: ReturnType<typeof createAgoraRtcEngine> | null = null;

export function getAgoraEngine() {
  if (!engine) {
    engine = createAgoraRtcEngine();
  }
  return engine;
}