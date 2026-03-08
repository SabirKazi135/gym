import WorkoutVideoPlayer from '@/components/main/WorkoutVideoPlayer';
import {View, Text, ScrollView, Pressable} from 'react-native';
import BackArrow from 'assets/svgs/class/BackArrow.svg';
import Participants from '@/components/main/class/Participants';
import BlurSelector from '@/components/main/class/BlurSelector';
import {router} from 'expo-router'
import { useCameraAndBlur } from './_layout';
import CamaraOnIcon from 'assets/svgs/class/CamaraOnIcon.svg';
import CamaraOffIcon from 'assets/svgs/class/CamaraOffIcon.svg';
import { useClassSessions } from '@/hooks/queries/useClass';
import { useVideoPlayerStore, Video } from '@/store/videoPlayerStore';
import {useEffect, useMemo} from 'react'


export default function ClassScreen2(){
    const {localCamaraMode, setLocalCamaraMode, localBlur, setLocalBlur} = useCameraAndBlur()
    const {data} = useClassSessions()
    // const {next, loadVideos, playlist, currentIndex} = useVideoPlayerStore()
    const playlist = useVideoPlayerStore(s => s.playlist)
    const loadVideos = useVideoPlayerStore(s => s.loadVideos)
    const currentIndex = useVideoPlayerStore(s => s.currentIndex)

    // let videoUrls: Video[] = []
    // data?.sessionWorkouts.map(item => videoUrls.push(item.videoUrl as unknown as Video))

    const videoUrls = useMemo(() => {
        if (!data) return []

        return data.sessionWorkouts.map(item => ({
            url: item.videoUrl
        }))
    }, [data])

    useEffect(() => {
        if (videoUrls.length === 0) return
        if (playlist.length > 0) return
        loadVideos(videoUrls)

    }, [videoUrls, playlist.length, loadVideos]);
    // console.log('hi')
    // if (data) {
    //     const videos = data.sessionWorkouts.map(item => ({url: item.videoUrl}))
    //     loadVideos(videos)
    // }

    
    return (
        <ScrollView className='bg-background w-full px-4'>
            <Pressable onPress={() => router.back()} className='mt-6'>
                <BackArrow />
            </Pressable>
            <View className=' mt-6'>
                {data && <WorkoutVideoPlayer sessionId={data.id} />}                
            </View>
            <View className='border border-[#E5E5E5] items-center w-full mt-4 mb-4 rounded-md py-6'>
                <View className='flex-row w-[90%] justify-between'>
                    <View className='flex-row w-[45%] items-center gap-2'>
                        <Pressable onPress={() => setLocalCamaraMode(!localCamaraMode)} className='bg-[#EBEBEB] p-3 rounded-md'>
                            {localCamaraMode ? <CamaraOnIcon /> : <CamaraOffIcon />}
                        </Pressable>
                        <Text className='font-semibold text-sm text-black'>Camara On</Text>
                    </View>
                    <View className='flex-row w-[55%] justify-end items-center gap-2'>
                        <View className=''>
                            <Text className='font-semibold text-sm text-black'>Blur: </Text>
                        </View>
                        <BlurSelector selected={localBlur} onChange={setLocalBlur}/>
                    </View>
                </View>
                <View className='flex-row bg-white flex-wrap justify-between mt-4 px-4'>
                    <Participants name="R"/>
                    <Participants name="Danush"/>
                    <Participants name="Ganesh"/>
                    <Participants name="R"/>
                    <Participants name="Danush" isMonitor/>
                    <Participants name="Ganesh"/>
                </View>
            </View>
        </ScrollView>
    )
}