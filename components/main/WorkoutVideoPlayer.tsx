// import {VideoView, useVideoPlayer} from 'expo-video';
// import { useEvent } from "expo";
// import {View, Text, StyleSheet, Pressable} from 'react-native';
// import PlayIcon from 'assets/svgs/class/PlayIcon.svg';
// import PauseIcon from 'assets/svgs/class/PauseIcon.svg';
// import PeekBack from 'assets/svgs/class/PeekBack.svg';
// import PeekForward from 'assets/svgs/class/PeekForward.svg';
// import AudioMuteIcon from 'assets/svgs/class/AudioMuteIcon.svg';
// import AudioUnmuteIcon from 'assets/svgs/class/AudioUnmuteIcon.svg';
// import RotatePlayerIcon from 'assets/svgs/class/RotatePlayerIcon.svg';
// import Slider from "@react-native-community/slider";
// import { BlurView } from 'expo-blur';
// import { useState } from 'react';
// import { useVideoPlayerStore } from '@/store/videoPlayerStore';


// export default function WorkoutVideoPlayer(){

//     const playlist = useVideoPlayerStore(s => s.playlist)
//     const currentIndex = useVideoPlayerStore(s => s.currentIndex)
//     const [isMuted, setIsMuted] = useState(false);
//     const player = useVideoPlayer(playlist[currentIndex].url, player => {
//     player.loop = true;
//   });
//   const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing});
//   player.timeUpdateEventInterval = 0.5;
//   const { currentTime } = useEvent(player, 'timeUpdate', 
//     {currentTime: 0,
//         currentLiveTimestamp: null,
//         currentOffsetFromLive: null,
//         bufferedPosition: 0,
//     });

// const duration = player.duration ?? 0;

//   const togglePlayback = () => {
//     if(isPlaying)
//         player.pause();
//     else
//         player.play();
//   }

//   const toggleMute = () => {
//   const newValue = !isMuted;
//   player.muted = newValue;
//   setIsMuted(newValue);
//     };

//   const formatTime = (time: number) => {
//     const mins = Math.floor(time / 60);
//     const secs = Math.floor(time % 60);
//     return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
//   };

//   return (
//     <View className='relative items-center overflow-hidden rounded-md justify-center'>
//         <VideoView
//         player={player}
//         style={styles.video}
//         contentFit='cover'
//         allowsPictureInPicture
//         nativeControls={false}
//         />
//             <View className='absolute'>
//                 <View className='flex-row items-center gap-6'>
//                     <Pressable onPress={() => player.currentTime -= 10}>
//                         <PeekBack />
//                     </Pressable>
//                     <Pressable onPress={togglePlayback} className='mx-6'>
//                     {isPlaying ? <PauseIcon />: <PlayIcon />}
//                     </Pressable>
//                     <Pressable onPress={() => player.currentTime += 10}>
//                         <PeekForward />
//                     </Pressable>
//                 </View>
//             </View>
//             <View className='absolute bottom-4 w-full px-2'>
//                 <View className='justify-between mb-1 px-4 flex-row'>
//                     <BlurView intensity={50} tint="dark" className='bg-black px-4 overflow-hidden rounded-full'>
//                         <Text className='font-semibold text-white '>{formatTime(currentTime)} / {formatTime(duration)}</Text>
//                     </BlurView>
//                     <View className='flex-row gap-4 items-center'>
//                         <Pressable onPress={toggleMute}>
//                             {isMuted ? <AudioMuteIcon /> : <AudioUnmuteIcon /> }
//                         </Pressable>
//                         <View>
//                             <RotatePlayerIcon />
//                         </View>
//                     </View>
//                 </View>
//                 <View className=''>
//                     <Slider
//                         minimumValue={0}
//                         maximumValue={duration || 0}
//                         value={currentTime || 0}
//                         onSlidingComplete={(value) => {
//                             player.currentTime = value;
//                         }}
//                         minimumTrackTintColor="#DE6E20"
//                         maximumTrackTintColor="#E2E2E2"
//                         thumbTintColor="#f97316"
//                     />
//                 </View>
//             </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   video: {
//     width: 360,
//     height: 595,
//   },
// });

import { VideoView, useVideoPlayer } from "expo-video"
import { useEvent } from "expo"
import { View, Text, StyleSheet, Pressable } from "react-native"
import PlayIcon from "assets/svgs/class/PlayIcon.svg"
import PauseIcon from "assets/svgs/class/PauseIcon.svg"
import PeekBack from "assets/svgs/class/PeekBack.svg"
import PeekForward from "assets/svgs/class/PeekForward.svg"
import AudioMuteIcon from "assets/svgs/class/AudioMuteIcon.svg"
import AudioUnmuteIcon from "assets/svgs/class/AudioUnmuteIcon.svg"
import RotatePlayerIcon from "assets/svgs/class/RotatePlayerIcon.svg"
import Slider from "@react-native-community/slider"
import { BlurView } from "expo-blur"
import { useState, useMemo, useRef, useEffect } from "react"
import * as ScreenOrientation from 'expo-screen-orientation';
import { useVideoPlayerStore } from "@/store/videoPlayerStore"
import { useCompleteWorkout } from "@/hooks/mutations/useCompleteWorkout";
import { useNavigation } from 'expo-router';
import ViewParticipantsToggle from 'assets/svgs/class/ViewParticipantsToggle.svg'

export default function WorkoutVideoPlayer({sessionId}:{sessionId: string}) {

  const {
    playlist,
    currentIndex,
    play,
    pause,
    setPosition,
    next
  } = useVideoPlayerStore()
  const completeWorkout = useCompleteWorkout()

  const navigation = useNavigation();
  const setIsFullScreen = useVideoPlayerStore(state => state.setIsFullScreen)
  const isFullScreen = useVideoPlayerStore(state => state.isFullScreen)

  const workout = playlist[currentIndex]

  const [isMuted, setIsMuted] = useState(false)
  const [isControlsVisible, setIsControlsVisible] = useState(true)
  // const [isLandscape, setIsLandscape] = useState(false);
  const [showParticipantsInLandscape, setShowParticipantsInLandscape] = useState(false);
  const hideTimer = useRef<number | null>(null)

  const showControlsTemporarily = () => {
  setIsControlsVisible(true)

  if (hideTimer.current) {
    clearTimeout(hideTimer.current)
  }

  hideTimer.current = setTimeout(() => {
    setIsControlsVisible(false)
  }, 3000)
}

  async function enterlandscape(){
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    )
    setIsFullScreen(true)
  }

  async function exitlandscape(){
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    )
    setIsFullScreen(false)
  }

  function handlePlayerOrientation(){
    if(!isFullScreen) {
      enterlandscape()
      // setIsLandscape(true)
    }
    else {
      exitlandscape()
      // setIsLandscape(false)
    }
  }

//   const videoUrl = playlist[currentIndex]?.url ?? ""
const videoUrl = useMemo(() => playlist[currentIndex]?.url ?? "", [playlist, currentIndex])
// console.log("VIDEO SOURCE " +videoUrl)
// console.log(playlist)
  
  const player = useVideoPlayer(videoUrl)
  useEffect(() => {
    player.loop = false
  }, [player])

  useEffect(() => {
    if(!videoUrl) return
    player.replaceAsync(videoUrl)
  }, [videoUrl, player])

  useEffect(() => {
    player.timeUpdateEventInterval = 0.5
  }, [player])

  const statusEvent = useEvent(player, "statusChange", {
    status: player.status
  })

  const playingEvent = useEvent(player, "playingChange", {
    isPlaying: player.playing
  })

  const isPlaying = playingEvent?.isPlaying ?? player.playing

  useEffect(() => {
  if (!isPlaying) {
    setIsControlsVisible(true)
  }
}, [isPlaying])

  const timeEvent = useEvent(player, "timeUpdate", {
    currentTime: 0,
    currentLiveTimestamp: null,
    currentOffsetFromLive: null,
    bufferedPosition: 0
  })

  const currentTime = timeEvent?.currentTime ?? 0
  const duration = player.duration ?? 0

  const completedRef = useRef(false)

useEffect(() => {
  if (!duration) return
  if (completedRef.current) return

  const finished = !isPlaying && currentTime >= duration - 0.3

  if (!finished) return

  completedRef.current = true

  const run = async () => {
    try {
      await completeWorkout.mutateAsync({
        session_id: sessionId,
        index: currentIndex
      })

      next()
    } catch (err) {
      console.error("Workout completion failed", err)
    }
  }

  run()

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [isPlaying, currentTime, duration])

  const togglePlayback = () => {
    if (isPlaying) {
      player.pause()
      pause()
    } else {
        player.play()
        play()
    }
  }

  const toggleMute = () => {
    const nextValue = !isMuted
    player.muted = nextValue
    setIsMuted(nextValue)
  }

  const seek = (value: number) => {
    player.currentTime = value
  }

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60)
    const secs = Math.floor(time % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }
  return (
    <View>
      <Pressable onPress={showControlsTemporarily} className={`border relative ${isFullScreen ? "items-start" : "items-center"} overflow-hidden rounded-md justify-center`}>
        {videoUrl !== "" && (
          // <View className="bg-primary border border-primary border-3">
              <VideoView
                key={currentIndex}
                player={player}
                style={{height: "100%", width: isFullScreen ? "95%" : "100%"}}
                contentFit="cover"
                allowsPictureInPicture
                nativeControls={false}
              />
          // </Pressable>
        )}

        {
          isControlsVisible && (
        <View className="absolute border bottom-0 left-0 right-0 top-0 justify-center items-center">
          <View className="flex-row items-center gap-6">
            <Pressable onPress={() => player.currentTime = Math.max(player.currentTime - 10, 0)}>
              <PeekBack />
            </Pressable>

            <Pressable onPress={togglePlayback} className="mx-6">
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </Pressable>

            <Pressable onPress={() => player.currentTime = Math.min(player.currentTime + 10, duration)}>
              <PeekForward />
            </Pressable>

          </View>
        </View>
          )
        }

        {isControlsVisible && (
        <View className={`absolute bottom-4 ${isFullScreen ? "w-[95%]" : "w-full" } px-2`}>
          <View className="justify-between mb-1 px-4 flex-row">

            <BlurView intensity={50} tint="dark" className="bg-black px-4 overflow-hidden rounded-full">
              <Text className="font-semibold text-white">
                {formatTime(currentTime)} / {formatTime(duration)}
              </Text>
            </BlurView>

            <View className="flex-row gap-4 items-center">

              <Pressable onPress={toggleMute}>
                {isMuted ? <AudioMuteIcon /> : <AudioUnmuteIcon />}
              </Pressable>

              <Pressable onPress={handlePlayerOrientation}>
                <RotatePlayerIcon />
              </Pressable>

            </View>
          </View>

          <Slider
            minimumValue={0}
            maximumValue={duration || 0}
            value={currentTime}
            onSlidingComplete={seek}
            minimumTrackTintColor="#DE6E20"
            maximumTrackTintColor="#E2E2E2"
            thumbTintColor="#f97316"
          />

        </View>
        )}

      </Pressable>
      {isFullScreen && (
        <View>
          <Text>Hi</Text>
        </View>
      )}
    </View>
  )
}