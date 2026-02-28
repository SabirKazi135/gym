import { View, Text, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MonitorCrown from 'assets/svgs/groups/MonitorCrown.svg';
import MessageIcon from 'assets/svgs/groups/MessageIcon.svg';
import GreenTick from 'assets/svgs/groups/GreenTick.svg';
import { useState } from 'react';
import MessageCard from '@/components/main/groups/MessageCard';
import MemberCard from '@/components/main/groups/MemberCard';

export default function GroupsScreen() {
    const [selectedSection, setSelectedSection] = useState("Chat");
    return (
            <ScrollView className="bg-background px-4 py-6" showsVerticalScrollIndicator={false}>
                <View className="items-center">
                    <Text className="text-2xl font-mbold text-black">Your Circle</Text>
                    <Text className="text-sm font-light text-black">6 members • Accountability partners</Text>
                </View>

                <View className="mt-8 rounded-md overflow-hidden">
                    <LinearGradient className='px-4 flex-row gap-4 items-center py-8' colors={["#5B0B0B", "#A22828"]} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
                        <MonitorCrown />
                        <View>
                            <Text className='font-semibold text-[16px] text-white'>Today&apos;s Monitor</Text>
                            <Text className='font-semibold text-xs text-white'>Alex Chen • <Text className='text-[#00DA5C]'>Monday</Text></Text>
                        </View>
                    </LinearGradient>
                </View>

                <View className='bg-[#EBEBEB] rounded-full p-1 flex-row mt-6 w-full'>
                    <Pressable onPress={() => setSelectedSection('Chat')} className={`w-1/2 items-center rounded-full py-3 ${selectedSection === "Chat" ? 'bg-white' : null}`}>
                        <Text className='font-semibold text-sm'>Chat</Text>
                    </Pressable>
                    <Pressable onPress={() => setSelectedSection('Members')}  className={`w-1/2 items-center rounded-full py-3 ${selectedSection === "Members" ? 'bg-white' : null}`}>
                        <Text className='font-semibold text-sm'>Members</Text>
                    </Pressable>
                </View>

                {selectedSection === 'Chat' && (
                    <View>
                        {/* Quick messages */}
                        <View className='mt-4 bg-white rounded-md px-6 py-6 border border-[#E5E5E5]'>
                            <View className='flex-row gap-2'>
                                <MessageIcon />
                                <Text className='font-semibold text-[16px] text-black'>Quick Messages</Text>
                            </View>
                            <View className='bg-[#9FFFC8] border border-[#009841] rounded-sm flex-row gap-3 px-4 items-center py-2 mt-4'>
                                <GreenTick />
                                <Text className='font-medium text-[13px] text-[#009841]'>Message sent: 👏 Well done!</Text>
                            </View>
                            <View className='flex-row gap-3 flex-wrap justify-between mt-4'>
                                <View className='border border-[#E5E5E5] rounded-md items-center w-[48%] py-4'>
                                    <Text className='font-medium text-[13px] text-black'>You got this!</Text>
                                </View>
                                <View className='border border-[#E5E5E5] rounded-md items-center w-[48%] py-4'>
                                    <Text className='font-medium text-[13px] text-black'>On fire today!</Text>
                                </View>
                                <View className='border border-[#E5E5E5] rounded-md items-center w-[48%] py-4'>
                                    <Text className='font-medium text-[13px] text-black'>Well done!</Text>
                                </View>
                                <View className='border border-[#E5E5E5] rounded-md items-center w-[48%] py-4'>
                                    <Text className='font-medium text-[13px] text-black'>Missed you today</Text>
                                </View>
                                <View className='border border-[#E5E5E5] rounded-md items-center w-[48%] py-4'>
                                    <Text className='font-medium text-[13px] text-black'>Keep going!</Text>
                                </View>
                                <View className='border border-[#E5E5E5] rounded-md items-center w-[48%] py-4'>
                                    <Text className='font-medium text-[13px] text-black'>See you tomorrow! </Text>
                                </View>
                            </View>
                        </View>

                        {/* Recent Messages */}
                        <View className='border mt-4 mb-10 rounded-md border-[#E5E5E5] p-4'>
                            <Text className='font-semibold text-[16px] text-black'>Recent Messages</Text>
                            <View className='mt-2 gap-3'>
                                <MessageCard name="Alex Chen" isMonitor time='12m ago' message='You got this'/>
                                <MessageCard name="Trisha Pathak" time='10m ago' message='On fire today!'/>
                                <MessageCard name="Hrusha Patil" time='15m ago' message='See you tomorrow! '/>
                            </View>
                        </View>
                    </View>
                )}

                {selectedSection === "Members" && (
                    <View className='mt-4 mb-10 gap-3'>
                        <MemberCard name="Alex Chen" isMonitor streakCount={15} dayCount={18} isOnline/>
                        <MemberCard name="Trisha Pathak" streakCount={12} dayCount={12} isOnline={false}/>
                        <MemberCard name="Hrusha Patil" streakCount={10} dayCount={10} isOnline/>
                        <MemberCard name="Danush Shetty" streakCount={14} dayCount={12} isOnline/>
                        <MemberCard name="Ganesh Kale" streakCount={8} dayCount={16} isOnline/>
                    </View>
                )}
            </ScrollView>
    );
}