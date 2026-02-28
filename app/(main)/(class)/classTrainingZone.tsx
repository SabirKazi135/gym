import WorkoutVideoPlayer from '@/components/main/WorkoutVideoPlayer';
import {View, Text, ScrollView, Pressable} from 'react-native';
import BackArrow from 'assets/svgs/class/BackArrow.svg';
import CamaraIconFrame from 'assets/svgs/class/camara_icon/CamaraIconFrame.svg';
import CamaraIconLense from 'assets/svgs/class/camara_icon/CamaraIconLense.svg';
import CamaraIconFlash from 'assets/svgs/class/camara_icon/CamaraIconFlash.svg';
import ArrowDown from 'assets/svgs/class/ArrowDown.svg'
import { useState } from 'react';
import Participants from '@/components/main/class/Participants';
import BlurSelector from '@/components/main/class/BlurSelector';
import {router} from 'expo-router'


export default function ClassScreen2(){
    const [open, setOpen] = useState(false);
    const [data, setData] = useState("Medium");
    return (
        <ScrollView className='bg-background w-full px-4'>
            <Pressable onPress={() => router.back()} className='mt-6'>
                <BackArrow />
            </Pressable>
            <View className='h-[600px] mt-6'>
                <WorkoutVideoPlayer />
            </View>
            <View className='border border-[#E5E5E5] items-center w-full mt-4 mb-4 rounded-md py-6'>
                <View className='flex-row w-[90%] justify-between'>
                    <View className='flex-row w-[45%] items-center gap-2'>
                        <View className='bg-[#EBEBEB] p-3 rounded-md'>
                            <View className='relative'>
                                    <View>
                                        <CamaraIconFrame />
                                    </View>
                                    <View className='absolute top-[5px] left-[6px]'>
                                        <CamaraIconLense />
                                    </View>
                                    <View className='absolute right-[3px] top-[6px]'>
                                        <CamaraIconFlash />
                                    </View>
                            </View>
                        </View>
                        <Text className='font-semibold text-sm text-black'>Camara On</Text>
                    </View>
                    <View className='flex-row w-[55%] justify-end items-center gap-2'>
                        <View className=''>
                            <Text className='font-semibold text-sm text-black'>Blur: </Text>
                        </View>
                        <BlurSelector />
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