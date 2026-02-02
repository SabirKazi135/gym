import {View , Text} from 'react-native';
import NavButton from '@/components/onboarding/NavButton';
import GroupCard from '@/components/onboarding/GroupCard';
import {Image} from 'expo-image';
import { router } from "expo-router";
import {LinearGradient} from 'expo-linear-gradient'

export default function UserFeature7() {
    return (
        <View className="flex-1 bg-background justify-between py-10">
            <View className="gap-6 bg-white">
                <View className="pt-12 w-[100%] h-[15%] px-6 overflow-x-scroll flex-row items-center">
                    {/* <View className='w-[40%]'> */}
                    <Text className="font-semibold flex-1 flex-wrap text-left text-xl">Workout with Camara <Text className="text-primary">Groups</Text></Text>
                    {/* </View> */}
                    {/* <View className='w-[60%]'> */}
                    <Image style={{width: "45%", height: '40%'}} source={require("../../assets/images/userfeature_6_title_graphics.png")} contentFit='contain'/>
                    {/* </View> */}
                </View>
                <View className="w-full px-6 mt-6 h-[70%] gap-4">
                <LinearGradient colors={["transparent", "rgba(0,0,0,0.15)"]} style={{position: 'absolute', top: -4, left: 0, right: 0, height: 4, zIndex: 1}} />
                    <View className='w-full flex-row justify-center gap-6 mt-6 items-center h-[50%]'>
                        {/* <UserFeatureImage imageUrl={image} /> */}
                        <GroupCard members="two" text="Group View (2 members)" varient="secondary"/>
                        <GroupCard members="six" text="Group View (6 members)"/>
                    </View>
                    <View className='items-center gap-3'>
                        <Text className="font-semibold text-center text-primary text-md">Join sessions with</Text>
                        <Text className="font-semibold text-center text-md">2-camera preview: split screen (You + 1 partner).
6-camera preview: grid of 6 faces with blur option.</Text>
                    </View>
                <LinearGradient colors={["rgba(0,0,0,0.15)", "transparent"]} style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, zIndex: 1}} />

                 </View>
             </View>

            <View className='w-full px-6 flex-row justify-center gap-4'>
                <NavButton title="Back" onPress={() => router.back()} width="half" rounded="full" />
                <NavButton title="Continue" to="/(onboarding)/userFeature8" width="half" rounded="full" />
            </View>
        </View>
    );
}