import { View, Text, Pressable } from 'react-native';
import SessionIconBackground1 from 'assets/svgs/class/SessionIconBackground1.svg';
import SessionIconBackground2 from 'assets/svgs/class/SessionIconBackground2.svg';
import SessionIcon1 from 'assets/svgs/class/SessionIcon1.svg';
import SessionIcon2 from 'assets/svgs/class/SessionIcon2.svg';
import CamaraIconFrame from 'assets/svgs/class/camara_icon/CamaraIconFrame.svg';
import CamaraIconLense from 'assets/svgs/class/camara_icon/CamaraIconLense.svg';
import CamaraIconFlash from 'assets/svgs/class/camara_icon/CamaraIconFlash.svg';
import ArrowDown from 'assets/svgs/class/ArrowDown.svg'
import {useState} from 'react';
import NavButton from '@/components/onboarding/NavButton';

export default function ClassScreen() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState("Medium")
    return (
            <View className="px-4 py-6 bg-background h-full">
                <View className='items-center mt-4'>
                    <Text className='font-mbold  text-black text-xl'>Ready for Today's Class?</Text>
                    <Text className='font-light mt-[-4] text-black text-sm'>40-minute session with your circle</Text>
                </View>
                <View className='justify-center h-[90%]'>
                <View className='border rounded-md border-[#E5E5E5]'>
                    <Text className='font-semibold text-center py-6 text-md text-black'>Session Includes</Text>
                    <View className='gap-2'>
                        <View className='border rounded-md py-4 mx-4 flex-row relative border-[#E5E5E5]'>
                            <View className='ml-4 mr-4 relative'>
                                <View className='absolute'>
                                    <SessionIconBackground1 />
                                </View>
                                <View>
                                    <SessionIcon1 />
                                </View>
                            </View>
                            <View className='justify-center'>
                                <Text className='font-semibold text-base'>Warmup + Exercise</Text>
                                <Text className='font-light text-xs'>30 minutes</Text>
                            </View>
                        </View>
                        <View className='border rounded-md py-4 mx-4 flex-row relative border-[#E5E5E5]'>
                            <View className='ml-4 mr-4 relative'>
                                <View className='absolute'>
                                    <SessionIconBackground2 />
                                </View>
                                <View>
                                    <SessionIcon2 />
                                </View>
                            </View>
                            <View className='justify-center'>
                                <Text className='font-semibold text-base'>Guided Relaxation</Text>
                                <Text className='font-light text-xs'>10 minutes</Text>
                            </View>
                        </View>
                    </View>
                    <View className='mx-4 gap-4 mt-8'>
                        <View className='justify-between items-center flex-row'>
                            <Text className='font-medium text-base'>Camera</Text>
                            <View className='border border-[#E5E5E5] rounded-sm p-2'>
                                <View className='relative'>
                                    <View >
                                        <CamaraIconFrame />
                                    </View>
                                    <View className='absolute top-[5px] left-[6px]'>
                                        <CamaraIconLense />
                                    </View>
                                    <View className='absolute right-[3px] top-[6px]'>
                                        <CamaraIconFlash />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View className='justify-between items-center flex-row'>
                            <Text className='font-medium text-base'>Blur Level</Text>
                            <Pressable onPress={() => setOpen(!open)} className='border relative border-[#E5E5E5] w-[30%] px-2 py-2 flex-row z-100 justify-between rounded-sm items-center'>
                                <Text className='font-medium text-sm'>{data}</Text>
                                {open ? (
                                    <ArrowDown />
                                ) : (
                                    <ArrowDown />
                                )}
                                {open && (
                                    <View className='absolute elevation-10 top-12 bg-white border border-[#E5E5E5] rounded-md w-[100%] '>
                                        <Pressable onPress={() => {
                                            setData("Low");
                                            setOpen(false);
                                        }} className='w-full px-2 py-2 border-b border-primary'>
                                            <Text className='font-medium'>Low</Text>
                                        </Pressable>
                                        <Pressable onPress={() => {
                                            setData("Medium");
                                            setOpen(false);
                                        }} className='w-full px-2 py-2 border-b border-primary'>
                                            <Text className='font-medium'>Medium</Text>
                                        </Pressable>
                                        <Pressable onPress={() => {
                                            setData("High");
                                            setOpen(false);
                                        }} className='w-full px-2 py-2'>
                                            <Text className='font-medium'>High</Text>
                                        </Pressable>
                                    </View>
                                )}
                            </Pressable>
                        </View>
                    </View>
                    <View className='px-4 my-4 z-1'>
                        <NavButton  title='Start Class' to='/(main)/(class)/classTrainingZone'/>
                    </View>
                </View>
                </View>
            </View>
    );
}