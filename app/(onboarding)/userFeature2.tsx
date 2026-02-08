import {View , Text, Image} from 'react-native';
import NavButton from '@/components/onboarding/NavButton';
import UserFeatureImage from '@/components/onboarding/UserFeatureImage';
import { router } from "expo-router";
import Tick from "assets/svgs/Tick.svg"

export default function UserFeature2() {
    const image = require('../../assets/images/userfeature_2.png');
    return (
        <View className="flex-1 bg-background px-6 justify-between py-10">
            <View className="gap-4 overflow-hidden">
                <View className=" pt-12  items-center">
                    <Text className="font-semibold text-center text-2xl">Daily <Text className="text-primary">40-Minute</Text> Wellness Plan</Text>
                    <Text className="font-light text-center text-sm">Start small, stay consistent and let every session balance your body and mind.</Text>
                </View>
                <View className="w-full  h-[70%] gap-4">
                    <View className='w-full h-[60%]'>
                        <UserFeatureImage imageUrl={image} />
                    </View>
                    <View className='bg-light_red p-4 rounded-md'>
                        <View className='flex-row justify-between items-center'>
                            <Text className='font-medium text-sm'>•  Stretching and Exercise (1-30 min)</Text>
                            <Tick />
                        </View>
                        <View className='flex-row justify-between items-center'>
                            <Text className='font-medium text-sm'>•  Relax & Meditate (10 min) </Text>
                            <Tick />
                        </View>
                    </View>
                 </View>
             </View>

            <View className='w-full flex-row justify-center gap-4'>
                <NavButton title="Back" onPress={() => router.back()} width="half" rounded="full" />
                <NavButton title="Continue" to="/(onboarding)/userFeature3" width="half" rounded="full" />
            </View>
        </View>
    );
}