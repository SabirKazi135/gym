import { View, ScrollView, Text } from 'react-native';
import {Image} from 'expo-image';
import UserReviewCard from '@/components/onboarding/UserReviewCard';
import NavButton from '@/components/onboarding/NavButton';
import Star from "assets/svgs/Star.svg"


export default function userPremiumPlans(){
    const reviews = [{
    id: "1",
    quote: '“I like how the app blends connection and wellness. Camera previews work smoothly, and the diet swaps are simple enough to actually follow.”',
    name: 'Jessica Miller',
    location: 'California, USA'
    },
    {
    id: "2",
    quote: '“This app makes healthy living practical. The mix of video features and food swaps keeps me motivated daily without feeling pressured or restricted.”',
    name: 'Ananya Sharma',
    location: 'Delhi, India'
    },
    {
    id: "3",
    quote: '“This app doesn’t push unrealistic diets or routines. Instead, it gives me easy-to-follow guidance and fun features that fit naturally into my lifestyle. It’s simple, engaging, and truly effective.”',
    name: 'David Lee',
    location: 'Florida, USA'
    },
    {
    id: "4",
    quote: '“I was surprised by how easy this app is to use. The group video previews are smooth, and the healthy swaps feel realistic. It’s made wellness more enjoyable and sustainable.”',
    name: 'Farah Ahmed',
    location: 'Hyderabad, India'
    }]


    return(
        <ScrollView showsVerticalScrollIndicator={false} className='mt-8 w-full'>
            
            <View className="w-full">
                <Image source={require("assets/images/userPremium_picture3.png")} contentFit="cover" className='' style={{width: 385, height: 300}}/>
                <Text className='bg-[#A22E2E] text-white text-center font-semibold text-sm'>Progress Journey</Text>
                <View className='flex-row w-full h-14'>
                    <View className='w-1/2 justify-center h-full rounded-r-lg bg-primary'>
                    <Text className='font-semibold text-center text-white text-lg'>Before</Text>
                    </View>
                    <View className='w-1/2 justify-center h-full rounded-l-lg bg-primary'>
                    <Text className='font-semibold text-white text-center text-lg'>After</Text>
                    </View>
                </View>
            </View>
            <View className='my-8 px-6 items-center'>
                <View className='flex-row pb-5 justify-center gap-2'>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </View>
                <Text className='font-semibold text-xl pb-4'>Discover Your <Text className='font-semibold text-primary'>Fitness</Text> Plan!</Text>
                <View className='w-full gap-2 pb-4'>
                    <View className='w-full rounded-md border border-[#A22E2E]'>
                        <View className='bg-[#A22E2E] rounded-t-md'>
                        <Text className='text-center font-semibold text-white text-sm'>Save $60</Text>
                        </View>
                        <View className='bg-primary rounded-b-md flex-row justify-between px-2 py-4'>
                            <Text className='text-white font-semibold text-md'>Base Plan</Text>
                            <Text className='text-white font-semibold text-md'><Text className='line-through'>$249</Text>  → $199 / mo</Text>
                        </View>
                    </View>
                    <View className='w-full rounded-md border border-[#A22E2E]'>
                        <View className='bg-[#A22E2E] rounded-t-md'>
                        <Text className='text-center font-semibold text-white text-sm'>Promo Code Plan (Most Popular ⭐)</Text>
                        </View>
                        <View className='bg-primary rounded-b-md flex-row justify-between px-2 py-4'>
                            <Text className='text-white font-semibold text-md'>With Base Plan</Text>
                            <Text className='text-white font-semibold text-md'><Text className='line-through'>$199</Text>  → $149 / mo</Text>
                        </View>
                    </View>
                </View>
                <Text className='font-semibold text-xs pb-4'>With this Promo code Save Up to 50$ </Text>
                <View className='items-center'>
                    <Text className='font-semibold text-lg'><Text className='text-primary underline'>Refer</Text> to your Friend</Text>
                    <Text className='font-semibold text-xs'>And get Exclusive Discount Save Up to 50$</Text>
                </View>
            </View>
            <View className='items-center'>
                <View>
                    <Text className='font-semibold text-2xl text-center'>What Our <Text className='text-primary'>Users</Text> Say</Text>
                    <View className='items-center flex-row gap-8 justify-center'>
                        <View className='flex-row gap-1 justify-center'>
                            <Star />
                        <Text className='font-semibold text-md'>4.8</Text>
                        </View>
                        <Text className='font-regular text-md'>10,000+ reviews</Text>
                    </View>
                </View>
                <ScrollView className='my-8 mx-4 h-[220px]' showsHorizontalScrollIndicator={false} horizontal>
                    <UserReviewCard reviews={reviews[0]}/>
                    <UserReviewCard reviews={reviews[1]}/>
                    <UserReviewCard reviews={reviews[2]}/>
                    <UserReviewCard reviews={reviews[3]}/>
                </ScrollView>
            </View>
            <View className='px-6 pb-8'>
            <NavButton title='Get Started' to='/(main)/home' rounded='full'/>
            </View>
        </ScrollView>
    )
}