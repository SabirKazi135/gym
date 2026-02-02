import {View , Text} from 'react-native';
import NavButton from '@/components/onboarding/NavButton';
import UserFeatureImage from '@/components/onboarding/UserFeatureImage';
import { router } from "expo-router";

export default function UserFeature4() {
    const image = require('../../assets/images/userfeature_4.png');
    return (
        <View className="flex-1 bg-background px-6 justify-between py-10">
            <View className="gap-4 overflow-hidden">
                <View className="pt-12 items-center">
                    <Text className="font-semibold text-center text-2xl">Relax and <Text className="text-primary">Meditation</Text></Text>
                </View>
                <View className="w-full mt-6 h-[70%] gap-4">
                    <View className='w-full h-[60%]'>
                        <UserFeatureImage imageUrl={image} />
                    </View>
                    <View className='items-center'>
                    <Text className="font-light text-center text-md">End your session with <Text className='text-primary font-semibold'>guided Relaxation</Text> to calm the mind and recover faster.</Text>
                    </View>
                 </View>
             </View>

            <View className='w-full flex-row justify-center gap-4'>
                <NavButton title="Back" onPress={() => router.back()} width="half" rounded="full" />
                <NavButton title="Continue" to="/(onboarding)/userFeature5" width="half" rounded="full" />
            </View>
        </View>
    );
}