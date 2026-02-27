import {View, Text, ScrollView} from 'react-native';
import {VideoView, useVideoPlayer} from 'expo-video';
import { useEvent } from "expo";

export default function classScreen2(){
    const videoSource = require('@/assets/videos/Aaya Sher - Lyrical  The Paradise  Nani  Anirudh Ravichander  Srikanth Odela.mp4')
    const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
    return (
        <ScrollView className='bg-background px-6'>
            <Text>Hi</Text>
        </ScrollView>
    )
}