import {VideoView, useVideoPlayer} from 'expo-video';
import { useEvent } from "expo";
import {View, Text, StyleSheet, Pressable} from 'react-native';
import PlayIcon from 'assets/svgs/class/PlayIcon.svg';
import PauseIcon from 'assets/svgs/class/PauseIcon.svg';
import PeekBack from 'assets/svgs/class/PeekBack.svg';
import PeekForward from 'assets/svgs/class/PeekForward.svg';
import AudioMuteIcon from 'assets/svgs/class/AudioMuteIcon.svg';
import AudioUnmuteIcon from 'assets/svgs/class/AudioUnmuteIcon.svg';
import RotatePlayerIcon from 'assets/svgs/class/RotatePlayerIcon.svg';
import Slider from "@react-native-community/slider";
import { BlurView } from 'expo-blur';
import { useState } from 'react';


export default function WorkoutVideoPlayer(){

    const [isMuted, setIsMuted] = useState(false);
    const videoSource = require('assets/videos/Know the Indian Awards  #LLAShorts 1472.mp4');
    const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
  });
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing});
  player.timeUpdateEventInterval = 0.5;
  const { currentTime } = useEvent(player, 'timeUpdate', 
    {currentTime: 0,
        currentLiveTimestamp: null,
        currentOffsetFromLive: null,
        bufferedPosition: 0,
    });

const duration = player.duration ?? 0;

  const togglePlayback = () => {
    if(isPlaying)
        player.pause();
    else
        player.play();
  }

  const toggleMute = () => {
  const newValue = !isMuted;
  player.muted = newValue;
  setIsMuted(newValue);
    };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <View className='relative items-center overflow-hidden rounded-md justify-center'>
        <VideoView
        player={player}
        style={styles.video}
        contentFit='cover'
        allowsPictureInPicture
        nativeControls={false}
        />
            <View className='absolute'>
                <View className='flex-row items-center gap-6'>
                    <Pressable onPress={() => player.currentTime -= 10}>
                        <PeekBack />
                    </Pressable>
                    <Pressable onPress={togglePlayback} className='mx-6'>
                    {isPlaying ? <PauseIcon />: <PlayIcon />}
                    </Pressable>
                    <Pressable onPress={() => player.currentTime += 10}>
                        <PeekForward />
                    </Pressable>
                </View>
            </View>
            <View className='absolute bottom-4 w-full px-2'>
                <View className='justify-between mb-1 px-4 flex-row'>
                    <BlurView intensity={50} tint="dark" className='bg-black px-4 overflow-hidden rounded-full'>
                        <Text className='font-semibold text-white '>{formatTime(currentTime)} / {formatTime(duration)}</Text>
                    </BlurView>
                    <View className='flex-row gap-4 items-center'>
                        <Pressable onPress={toggleMute}>
                            {isMuted ? <AudioMuteIcon /> : <AudioUnmuteIcon /> }
                        </Pressable>
                        <View>
                            <RotatePlayerIcon />
                        </View>
                    </View>
                </View>
                <View className=''>
                    <Slider
                        minimumValue={0}
                        maximumValue={duration || 0}
                        value={currentTime || 0}
                        onSlidingComplete={(value) => {
                            player.currentTime = value;
                        }}
                        minimumTrackTintColor="#DE6E20"
                        maximumTrackTintColor="#E2E2E2"
                        thumbTintColor="#f97316"
                    />
                </View>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
  video: {
    width: 360,
    height: 595,
  },
});