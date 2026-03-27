import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, ScrollView, Pressable } from 'react-native';
import Bulb from 'assets/svgs/diet/Bulb.svg';
import Cutlery from 'assets/svgs/diet/Cutlery.svg';
import RefreshIcon from 'assets/svgs/diet/RefreshIcon.svg';
import SwapBoard from '@/components/main/diet/SwapBoard';

export default function DietScreen() {
    return (
        <ScrollView className="flex-1 bg-background px-4">
            <View className="mt-8 items-center">
                <Text className="text-2xl font-mbold">Nutrition Guide</Text>
                <Text className="font-light text-sm text-black mt-0.2">Simple, sustainable eating habits</Text>
            </View>

            <View className='rounded-md overflow-hidden mt-6'>
                <LinearGradient className='px-6 py-6 ' colors={['#02BB50', '#02B170']} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
                    <View className='flex-row gap-2'>
                        <Bulb />
                        <Text className='font-semibold text-[16px] text-white'>Universal Food Rule</Text>
                    </View>
                    <View className='flex-row mt-4 gap-2 items-center'>
                        <Cutlery />
                        <Text className='font-medium text-sm text-white text-wrap'>Eat slowly and mindfully - it takes 20 minutes for your brain to register {'\n'}fullness.</Text>
                    </View>
                    <Pressable className='gap-2 flex-row bg-white mt-6 w-[40%] items-center justify-center py-3 rounded-sm'>
                        <RefreshIcon />
                        <Text className='font-regular text-xs text-[#02BA55]'>New Rule</Text>
                    </Pressable>
                </LinearGradient>
            </View>

            <View className=' mt-4 rounded-sm px-5 bg-white py-3 border border-[#E5E5E5]'>
                <Text className='font-semibold text-[16px]'>Beverages</Text>
                <View className='mt-4 gap-2'>
                    <SwapBoard previous='Soda' alternative='Sparkling water with lemon' description='Saves 150+ calories'/>
                    <SwapBoard previous='Coffee with cream' alternative='Coffee with almond milk' description='Fewer calories, same taste'/>
                </View>
            </View>

            <View className=' mt-4 rounded-sm px-5 bg-white py-3 border border-[#E5E5E5]'>
                <Text className='font-semibold text-[16px]'>Snacks</Text>
                <View className='mt-4 gap-2'>
                    <SwapBoard previous='Potato chips' alternative='Air-popped popcorn' description='More volume, fewer calories'/>
                    <SwapBoard previous='Candy' alternative='Fresh berries' description='Natural sweetness + antioxidants'/>
                </View>
            </View>

            <View className=' mt-4 mb-6 rounded-sm px-5 bg-white py-3 border border-[#E5E5E5]'>
                <Text className='font-semibold text-[16px]'>Meals</Text>
                <View className='mt-4 gap-2'>
                    <SwapBoard previous='White rice' alternative='Cauliflower rice' description='Lower carbs, more nutrients'/>
                    <SwapBoard previous='Pasta' alternative='Zucchini noodles' description='Fewer calories, more vegetables'/>
                    <SwapBoard previous='Pizza crust' alternative='Portobello mushroom' description='Lower calories, more nutrients'/>
                </View>
            </View>
        </ScrollView>
    );
}