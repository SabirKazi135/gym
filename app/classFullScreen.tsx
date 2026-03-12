import {View} from 'react-native';
import WorkoutVideoPlayer from '@/components/main/WorkoutVideoPlayer';
import { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';


export default function ClassFullscreen() {
    useEffect(() => {
  ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE
  )

  return () => {
    ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    )
  }
}, [])
  return (
    <View className="flex-1 bg-black">
      <WorkoutVideoPlayer sessionId='' />
    </View>
  )
}