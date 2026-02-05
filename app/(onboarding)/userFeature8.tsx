import {View , Text, ScrollView} from 'react-native';
import NavButton from '@/components/onboarding/NavButton';
import {Image} from 'expo-image';
import { router } from "expo-router";
// import { LinearGradient } from 'expo-linear-gradient';

export default function UserFeature8() {
    return (
        <ScrollView contentContainerClassName="flex-grow bg-background gap-4 justify-between py-10" scrollEnabled={true}>
                <View className="pt-12 items-center">
                    <Text className="font-semibold text-center text-xl">Smart <Text className="text-primary">Food</Text> Swaps</Text>
                    <Text className="font-light text-center text-sm">Simple, healthy choices for everyday eating</Text>
                </View>
            <View className="gap-6 relative bg-white">
                <View className="w-full px-6 mt-6">
                    <View className='w-full justify-center mb-4 items-center'>
                        <Image source={require('assets/images/Group 1000007924.png')} contentFit='contain' style={{width: '90%', aspectRatio: 1, marginRight: 15}}/>
                    </View>
                    <View className='items-center gap-2'>
                        <Text className="font-regular text-center text-sm">Our app doesn’t give you diet plans. Instead, we make healthy eating simple and practical with easy swaps you can follow every day.</Text>
                        <View className='bg-light_red p-4 gap-2 rounded-md'>
                            <View className='flex-row justify-between items-center'>
                                <Text className='font-semibold text-sm'>Simple Swaps You Can Try:</Text>
                            </View>
                            <View className='justify-between pl-2 items-center'>
                                <View className='flex-row'>
                                    <Text className='text-xs'>•  </Text>
                                <Text className='font-medium text-xs'>Cold Drinks → <Text className='font-semibold'>Water / Juice</Text> Hydrate naturally and skip the empty calories.</Text>
                                </View>
                                <View className='flex-row'>
                                    <Text className='text-xs'>•  </Text>
                                <Text className='font-medium text-xs'>Burger → <Text className='font-semibold'>Fruits / Sprouts</Text> Fuel your body with fiber and nutrients.</Text>
                                </View>
                                <View className='flex-row'>
                                    <Text className='text-xs'>•  </Text>
                                <Text className='font-medium text-xs'>Chips → <Text className='font-semibold'>Healthy Bars / Dry Fruits</Text> Satisfy cravings with energy-packed alternatives.</Text>
                                </View>
                            </View>
                        </View>
                        <Text className="font-medium text-left text-md"><Text className='text-rose-500 font-semibold'>Smart Choice:</Text> Always check ingredients on packets and learn the benefits of what you eat and mindful choices lead to lasting results.</Text>
                    </View>
                 </View>
             </View>

            <View className='w-full px-4 flex-row justify-between'>
                    {/* <LinearGradient colors={["transparent", "rgba(0,0,0,0.15)"]} style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 24, zIndex: 1}} /> */}
                <NavButton title="Back" onPress={() => router.back()} width="half" rounded="full" />
                <NavButton title="Continue" to="/(onboarding)/userFeature9" width="half" rounded="full" />
            </View>
        </ScrollView>
    );
}