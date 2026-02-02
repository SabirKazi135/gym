import {View , Text} from 'react-native';
import NavButton from '@/components/onboarding/NavButton';
import UserFeatureImage from '@/components/onboarding/UserFeatureImage';
import { router } from "expo-router";

export default function UserFeature3() {
    const image = require('../../assets/images/userfeature_3.png');
    return (
        <View className="flex-1 bg-background px-6 justify-between py-10">
            <View className="gap-4 overflow-hidden">
                <View className="pt-12 items-center">
                    <Text className="font-semibold text-center text-2xl">Stretching and <Text className="text-primary">Exercise</Text></Text>
                </View>
                <View className="w-full mt-6 h-[70%] gap-4">
                    <View className='w-full h-[60%]'>
                        <UserFeatureImage imageUrl={image} />
                    </View>
                    <View className='items-center'>
                    <Text className="font-light text-center text-md">Activate your body with gentle full body movements and exercise towards building strengths, flexibility and stamina. </Text>
                    <Text className='font-semibold text-md text-primary'>NO EQUIPMENT NEEDED</Text>
                    </View>
                    {/* <View className='bg-light_red p-4 rounded-md'>
                        <View className='flex-row justify-between items-center'>
                            <Text className='font-medium text-sm'>•  Stretching and Exercise (1-30 min)</Text>
                            <Image source={require("../../assets/images/Tick.png")} />
                        </View>
                        <View className='flex-row justify-between items-center'>
                            <Text className='font-medium text-sm'>•  Relax & Meditate (10 min) </Text>
                            <Image source={require("../../assets/images/Tick.png")} />
                        </View>
                    </View> */}
                 </View>
             </View>

            <View className='w-full flex-row justify-center gap-4'>
                <NavButton title="Back" onPress={() => router.back()} width="half" rounded="full" />
                <NavButton title="Continue" to="/(onboarding)/userFeature4" width="half" rounded="full" />
            </View>
        </View>
    );
}