import {View , Text} from 'react-native';
import NavButton from '@/components/onboarding/NavButton';
import { router } from "expo-router";
import Svg, {Polygon, Path} from 'react-native-svg';
import Vector from 'assets/svgs/Vector.svg';
import OuterTriangle from 'assets/svgs/OuterTriangle.svg';

export default function UserFeature1() {
    return (
        <View className="flex-1 bg-background px-2 justify-between py-10">
            <View className="gap-4 overflow-hidden">
                    <Text className="font-semibold pt-12 text-center text-black text-2xl">The Weavfit <Text className="text-primary">Philosophy</Text></Text>
                <View className="w-full justify-center h-[80%] gap-4">
                    
                    <View className='h-[60%] items-center justify-center mb-2'>
                        <View className='w-full h-[70%] z-20 justify-center items-center relative'>
                            <Vector height={"80%"} width={"80%"} style={{position: "absolute", top: 27, left:37}}/>
                            <View className='items-center justify-center h-full'>
                                <Text className="font-semibold mt-8 text-xl text-white">Consistency</Text>
                            </View>
                            <OuterTriangle height={"100%"} width={"100%"} style={{position: "absolute"}} />
                        </View>
                        <Text className='font-regular text-lg text-black absolute bg-background top-4 z-30'>Effective{"\n"}Exercise</Text>
                        <Text className='font-regular text-lg text-black absolute bg-background left-0 bottom-5 text-center z-30'>Mindful{"\n"}Diet</Text> 
                        <Text className='font-regular text-lg text-black absolute bg-background right-0 bottom-5 text-center z-30'>Guided{"\n"}Relaxation</Text>  
                    </View>
                    <Text className="font-light text-center text-black text-md">When effective exercise, mindful diet and guided relaxation are woven together with consistency, transformation becomes 
                        <Text className="text-primary font-semibold"> effortless</Text> and <Text className="text-primary font-semibold">sustainable.</Text></Text>
                    
                 </View>
             </View>

            <View className='w-full px-4 flex-row justify-center gap-4'>
                <NavButton title="Back" onPress={() => router.back()} width="half" rounded="full" />
                <NavButton title="Continue" to="/(onboarding)/heightInputPage" width="half" rounded="full" />
            </View>
        </View>
    );
}