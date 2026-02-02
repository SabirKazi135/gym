import {View , Text} from 'react-native';
import NavButton from '@/components/onboarding/NavButton';
import UserFeatureImage from '@/components/onboarding/UserFeatureImage';
import { router } from "expo-router";


export default function UserFeature5() {
    const image = require('../../assets/images/userfeature_5.png');
    return (
        <View className="flex-1 bg-background px-6 justify-between py-10">
            <View className="gap-4 overflow-hidden">
                <View className="pt-12 items-center">
                    <Text className="font-semibold text-center text-2xl">Weavfit is for <Text className="text-primary">Everyone</Text></Text>
                </View>
                <View className="w-full mt-6 h-[70%] gap-4">
                    <View className='w-full h-[60%]'>
                        <UserFeatureImage imageUrl={image} />
                    </View>
                    <View className='items-center gap-3'>
                        <Text className="font-light text-center text-md">Whether your activity level is low or high, and whether you&lsquo;re a beginner or an expert, Weavfit adapts to you.</Text>
                        <Text className="font-light text-center text-md">You will start with short, simple sessions and progress naturally to 30 to 40 min daily at comfortable paces.</Text>
                        <Text className="font-light text-center text-md">Because what truly matter is <Text className="text-primary font-semibold">consistency</Text> and not perfection and intensity</Text>
                    </View>
                 </View>
             </View>

            <View className='w-full flex-row justify-center gap-4'>
                <NavButton title="Back" onPress={() => router.back()} width="half" rounded="full" />
                <NavButton title="Continue" to="/(onboarding)/userFeature6" width="half" rounded="full" />
            </View>
        </View>
    );
}