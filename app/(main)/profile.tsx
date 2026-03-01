import { View, Text, ScrollView, Pressable } from 'react-native';
import { useAuthStore } from "@/store/useAuthStore";
import StreakFlame from 'assets/svgs/profile/StreakFlame.svg';
import ClassSettingsIcon from 'assets/svgs/profile/ClassSettingsIcon.svg';
import Clock from 'assets/svgs/profile/Clock.svg';
import {useState} from 'react';
import BlurSelector from 'components/main/class/BlurSelector';
import Bell from 'assets/svgs/profile/Bell.svg';
import Gift from 'assets/svgs/profile/Gift.svg';
import ShareIcon from 'assets/svgs/profile/ShareIcon.svg';
import AchievementsIcon from 'assets/svgs/profile/AchievementsIcon.svg';
import Trophy from 'assets/svgs/profile/Trophy.svg';
import QuestionMark from 'assets/svgs/profile/QuestionMark.svg';
import Shield from 'assets/svgs/profile/Shield.svg';
import Logout from 'assets/svgs/profile/Logout.svg';
import {router} from 'expo-router';

export default function ProfileScreen() {
  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
      await logout();
      router.replace("/(auth)/login");
    };

  const [autoJoinClass, setAutoJoinClass] = useState(true);
  const [classReminder, setClassReminder] = useState(true);
  const [streakUpdates, setStreakUpdates] = useState(false);
  const [groupMessages, setGroupMessages] = useState(true);
  const [weeklyPrograms, setWeeklyPrograms] = useState(true);
    return (
            <ScrollView className="flex-1 bg-background px-4">
                <View className="mt-8 items-center">
                    <Text className="text-2xl font-mbold text-black">
                        Profile
                    </Text>
                    <Text className='font-light text-sm text-black'>Manage your account and preferences</Text>
                </View>

                <View className='mt-8 gap-4 items-center flex-row px-6 py-4 border border-[#E5E5E5] rounded-sm'>
                    <View className='h-[60px] w-[60px] bg-primary rounded-full items-center justify-center'>
                        <Text className='font-medium text-white text-[30px]'>R</Text>
                    </View>
                    <View>
                        <Text className='text-black font-semibold text-lg'>{user?.name.split(" ")[0]}</Text>
                        <Text className='text-black font-light text-xs'>{user?.email}</Text>
                        <View className='flex-row mt-1 self-start bg-[#FFEDD4] rounded-full px-2 gap-1 py-1 items-center'>
                            <StreakFlame />
                            <Text className='font-semibold text-[10px] text-[#FF7B01]'>12 Streak</Text>
                        </View>
                    </View>
                </View>

                <View className='mt-4 flex-row justify-between'>
                    <View className='border rounded-sm items-center py-4 border-[#E5E5E5] w-[32%]'>
                        <Text className='font-medium text-[24px] text-black'>12</Text>
                        <Text className='font-light text-xs text-black'>Days Active</Text>
                    </View>
                    <View className='border rounded-sm items-center py-4 border-[#E5E5E5] w-[32%]'>
                        <Text className='font-medium text-[24px] text-black'>75KG</Text>
                        <Text className='font-light text-xs text-black'>Current Weight</Text>
                    </View>
                    <View className='border rounded-sm items-center py-4 border-[#E5E5E5] w-[32%]'>
                        <Text className='font-medium text-[24px] text-black'>3</Text>
                        <Text className='font-light text-xs text-black'>Referrals</Text>
                    </View>
                </View>

                <View className='px-6 mt-4 rounded-sm py-4 border border-[#E5E5E5]'>
                    <View className='flex-row gap-2'>
                        <ClassSettingsIcon />
                        <Text className='font-semibold text-[16px] text-black'>Class Settings</Text>
                    </View>
                    <View className='mt-4 gap-3'>
                            <View className='flex-row justify-between items-center'>
                                <View>
                                    <Text className='font-semibold text-sm text-black'>Auto-join classes</Text>
                                    <Text className='font-light text-xs'>Automatically join at scheduled time</Text>
                                </View>
                                <Pressable onPress={() => setAutoJoinClass(!autoJoinClass)} className={`h-7 w-12 rounded-full ${autoJoinClass ?  'bg-[#6E6E6E]' : 'bg-primary'} ${autoJoinClass ?  null : 'items-end'} justify-center p-1`}>
                                    <View className='h-5 w-5 rounded-full bg-white'></View>
                                </Pressable>
                            </View>
                            <View className='flex-row justify-between items-center'>
                                <View>
                                    <Text className='font-semibold text-sm text-black'>Default blur level</Text>
                                    <Text className='font-light text-xs'>Camera blur when joining</Text>
                                </View>
                                <BlurSelector width={35} borderColor='E37528' />
                            </View>
                            <View className='flex-row justify-between items-center'>
                                <View>
                                    <Text className='font-semibold text-sm text-black'>Preferred time slot</Text>
                                    <Text className='font-light text-xs'>morning-6</Text>
                                </View>
                                <View className='w-[32%] flex-row items-center gap-2 border border-primary px-2 py-2 rounded-sm'>
                                    <Clock />
                                    <Text className='font-medium text-sm'>Change</Text>
                                </View>
                            </View>
                    </View>
                </View>


                <View className='px-6 mt-4 rounded-sm py-4 border border-[#E5E5E5]'>
                    <View className='flex-row gap-2'>
                        <Bell />
                        <Text className='font-semibold text-[16px] text-black'>Notifications</Text>
                    </View>
                    <View className='mt-4 gap-3'>
                            <View className='flex-row justify-between items-center'>
                                <View>
                                    <Text className='font-semibold text-sm text-black'>Class reminders</Text>
                                    <Text className='font-light text-xs'>30 minutes before class</Text>
                                </View>
                                <Pressable onPress={() => setClassReminder(!classReminder)} className={`h-7 w-12 rounded-full ${classReminder ?  'bg-[#6E6E6E]' : 'bg-primary'} ${classReminder ?  null : 'items-end'} justify-center p-1`}>
                                    <View className='h-5 w-5 rounded-full bg-white'></View>
                                </Pressable>
                            </View>
                            <View className='flex-row justify-between items-center'>
                                <View>
                                    <Text className='font-semibold text-sm text-black'>Streak updates</Text>
                                    <Text className='font-light text-xs'>Daily progress notifications</Text>
                                </View>
                                <Pressable onPress={() => setStreakUpdates(!streakUpdates)} className={`h-7 w-12 rounded-full ${streakUpdates ?  'bg-[#6E6E6E]' : 'bg-primary'} ${streakUpdates ?  null : 'items-end'} justify-center p-1`}>
                                    <View className='h-5 w-5 rounded-full bg-white'></View>
                                </Pressable>
                            </View>
                            <View className='flex-row justify-between items-center'>
                                <View>
                                    <Text className='font-semibold text-sm text-black'>Group messages</Text>
                                    <Text className='font-light text-xs'>From your circle members</Text>
                                </View>
                                <Pressable onPress={() => setGroupMessages(!groupMessages)} className={`h-7 w-12 rounded-full ${groupMessages ?  'bg-[#6E6E6E]' : 'bg-primary'} ${groupMessages ?  null : 'items-end'} justify-center p-1`}>
                                    <View className='h-5 w-5 rounded-full bg-white'></View>
                                </Pressable>
                            </View>
                            <View className='flex-row justify-between items-center'>
                                <View>
                                    <Text className='font-semibold text-sm text-black'>Weekly progress</Text>
                                    <Text className='font-light text-xs'>Summary every Sunday</Text>
                                </View>
                                <Pressable onPress={() => setWeeklyPrograms(!weeklyPrograms)} className={`h-7 w-12 rounded-full ${weeklyPrograms ?  'bg-[#6E6E6E]' : 'bg-primary'} ${weeklyPrograms ?  null : 'items-end'} justify-center p-1`}>
                                    <View className='h-5 w-5 rounded-full bg-white'></View>
                                </Pressable>
                            </View>
                    </View>
                </View>

                <View className='px-6 mt-4 rounded-sm py-4 border border-[#E5E5E5]'>
                    <View className='flex-row gap-2'>
                        <Gift />
                        <Text className='font-semibold text-[16px] text-black'>Referrals & Rewards</Text>
                    </View>
                    <View className='mt-4 flex-row justify-between gap-3'>
                        <View className='bg-[#EBEBEB] rounded-sm w-[48%] py-6 items-center'>
                            <Text className='font-medium text-[24px] text-[#12A917]'>2</Text>
                            <Text className='font-semibold text-xs text-black'>Successful</Text>
                        </View>
                        <View className='bg-[#EBEBEB] rounded-sm w-[48%] py-6 items-center'>
                            <Text className='font-medium text-[24px] text-[#1265A9]'>120₹</Text>
                            <Text className='font-semibold text-xs text-black'>Saved</Text>
                        </View>
                    </View>
                    <Pressable className='bg-primary mt-3 rounded-sm flex-row gap-2 py-3 justify-center'>
                        <ShareIcon />
                        <Text className='font-medium text-[16px] text-white'>Invite Friends</Text>
                    </Pressable>
                    <Text className='font-medium mt-2 text-center text-xs text-[#767676]'>Earn $20 for each successful referral</Text>
                </View>


                <View className='px-6 mt-4 rounded-sm py-4 border border-[#E5E5E5]'>
                    <View className='flex-row gap-2'>
                        <AchievementsIcon />
                        <Text className='font-semibold text-[16px] text-black'>Recent Achievements</Text>
                    </View>
                    <View className='mt-4 gap-3'>
                        <View className='flex-row justify-between px-2'>
                            <View className='flex-row gap-4'>
                                <Trophy />
                                <Text className='font-semibold text-sm text-black'>7-Day Streak</Text>
                            </View>
                            <View className='bg-[#52A34E] px-2 rounded-full justify-center items-center'>
                                <Text className='font-semibold text-12 text-white'>Earned</Text>
                            </View>
                        </View>
                        <View className='flex-row justify-between px-2'>
                            <View className='flex-row gap-4'>
                                <Trophy />
                                <Text className='font-semibold text-sm text-black'>First Referral</Text>
                            </View>
                            <View className='bg-[#555555] px-2 rounded-full justify-center items-center'>
                                <Text className='font-semibold text-12 text-white'>Pending</Text>
                            </View>
                        </View>
                        <Pressable className='border border-primary items-center py-2 rounded-sm mt-2'>
                            <Text className='font-medium text-[16px] text-black'>View All Achievements</Text>
                        </Pressable>
                    </View>
                </View>

                <View className='mt-4 gap-4'>
                    <Pressable className='flex-row gap-4 px-4 rounded-sm py-2'>
                        <QuestionMark />
                        <Text className='font-medium text-sm text-black'>Help & Support</Text>
                    </Pressable>
                    <Pressable className='flex-row gap-4 px-4 mb-2 rounded-sm py-2'>
                        <Shield />
                        <Text className='font-medium text-sm text-black'>Privacy & Policy</Text>
                    </Pressable>
                </View>
                <View className=' w-full border'></View>
                <Pressable onPress={handleLogout} className='flex-row gap-4 my-2 px-4 mb-3 rounded-sm py-2'>
                    <Logout />
                    <Text className='font-medium text-sm text-[#FF0C0C]'>Log Out</Text>
                </Pressable>
            </ScrollView>
    );
}