import { Camera } from "expo-camera";

export const requestPermissions = async () => {
  const { status } = await Camera.requestCameraPermissionsAsync();

  if (status !== "granted") {
    console.log("Camera permission denied");
    return false;
  }

  return true;
};