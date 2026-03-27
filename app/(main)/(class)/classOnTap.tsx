import { View, Text, Pressable, ScrollView } from 'react-native';
import WorkoutSessionBg1 from 'assets/svgs/class/WorkoutSessionBg1.svg';
import CamaraOffIcon from 'assets/svgs/class/CamaraOffIcon.svg';
import CamaraOnIcon from 'assets/svgs/class/CamaraOnIcon.svg';
import NavButton from '@/components/onboarding/NavButton';
import BlurSelector from 'components/main/class/BlurSelector';
import { useClassSessions } from '@/hooks/queries/useClass';
import GreenTick from 'assets/svgs/GreenTick.svg';
import { useCameraAndBlur } from './_layout';

export default function ClassScreen() {
    const {localCamaraMode, setLocalCamaraMode, localBlur, setLocalBlur} = useCameraAndBlur()

    const {data} = useClassSessions()
    return (
            <ScrollView showsVerticalScrollIndicator={false} className="px-4 py-6 bg-background">
                <View className='mb-12'>
                    <View className='items-center mt-4 mb-6'>
                        <Text className='font-mbold  text-black text-xl'>Ready for Today&apos;s Class?</Text>
                        <Text className='font-light mt-[-4] text-black text-sm'>40-minute session with your circle</Text>
                    </View>
                    <View className='justify-center h-[90%]'>
                    <View className='border rounded-md border-[#E5E5E5]'>
                        <Text className='font-semibold text-center py-6 text-md text-black'>Session Includes</Text>
                        <View className='gap-2'>
                            {data?.sessionWorkouts.map((item) => (
                                <View key={item.id} className='border px-6 justify-between rounded-md py-4 mx-4 flex-row relative border-[#E5E5E5]'>
                                    <View className='flex-row'>
                                        <View className='relative mr-4'>
                                            {/* {`${<item.icon />}`} */}
                                            <WorkoutSessionBg1 />
                                        </View>
                                        <View className='justify-center'>
                                            <Text className='font-semibold text-base'>{item.title}</Text>
                                            <Text className='font-light text-xs'>{`${item.duration} minutes`}</Text>
                                        </View>
                                    </View>
                                    <View className='justify-center ml-4'>
                                        {item.completed ? <GreenTick /> : null}
                                    </View>
                                </View>
                            ))}
                        </View>
                        <View className='mx-4 gap-4 mt-8'>
                            <View className='justify-between items-center flex-row'>
                                <Text className='font-medium text-base'>Camera</Text>
                                <Pressable onPress={() => setLocalCamaraMode(!localCamaraMode)} className='border relative border-[#E5E5E5] rounded-sm p-2'>
                                    {localCamaraMode ? 
                                    <CamaraOnIcon />
                                    :
                                    <CamaraOffIcon />
                                    }
                                </Pressable>
                            </View>
                            <View className='justify-between items-center flex-row'>
                                <Text className='font-medium text-base'>Blur Level</Text>
                                <BlurSelector width={30} selected={localBlur} onChange={setLocalBlur} />
                            </View>
                        </View>
                        <View className='px-4 my-4 z-1'>
                            <NavButton  title='Start Class' to='/(main)/(class)/classTrainingZone'/>
                        </View>
                    </View>
                    </View>
                </View>
            </ScrollView>
    );
}