import { View, Text, Pressable, TextInput, ScrollView } from 'react-native';
import FireStroke from 'assets/svgs/FireStroke.svg';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import CalenderIcon from 'assets/svgs/CalenderIcon.svg';
import WeightDownGraph from 'assets/svgs/WeightDownGraph.svg';
import WeightUpGraph from 'assets/svgs/WeightUpGraph.svg';
import Trophy from 'assets/svgs/Trophy.svg';
import WeightScale from 'assets/svgs/WeightScale.svg';
import WeightIcon from 'assets/svgs/WeightIcon.svg';
import WeightProgressGraph from '@/components/main/WeightProgressGraph';
import AwardCard from '@/components/main/AwardCard';
import * as AwardIcons from 'assets/svgs/awards';

export default function ProgressScreen() {
    const [selectedSection, setSelectedSection] = useState("overview");
    const [graphWidth, setGraphWidth] = useState(0);

    const today = new Date();
    const currentDayIndex = today.getDay();
    const currentDate = today.getDate();
    
    const attendance = Array.from({ length: 7 }, (_, index) => {
        const dayOffset = index - currentDayIndex;
        const date = new Date(today);
        date.setDate(currentDate + dayOffset);
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        return {
            date: date.getDate(),
            day: days[date.getDay()],
            status: dayOffset < 0 ? "attended" : dayOffset === 0 ? "attended" : "upcoming"
        };
    });

    const mockAwards = [
  {
    _id: "65f1a9e2c2b4f0a1d3a10001",
    code: "SEVEN_DAY_STREAK",
    title: "Seven Day Streak",
    description: "Work out for 7 consecutive days.",
    achieved: false,
    achievedAt: "2026-02-10T07:30:00.000Z",
  },
  {
    _id: "65f1a9e2c2b4f0a1d3a10002",
    code: "FIRST_MONTH",
    title: "Getting Serious",
    description: "Complete 10 workout sessions.",
    achieved: false,
    progress: {
      current: 6,
      target: 10,
    },
  },
  {
    _id: "65f1a9e2c2b4f0a1d3a10003",
    code: "CONSISTENCY_KING",
    title: "Consistency King",
    description: "Work out 7 days in a row.",
    achieved: true,
    progress: {
      current: 4,
      target: 7,
    },
  },
  {
    _id: "65f1a9e2c2b4f0a1d3a10004",
    code: "CENTURY_CLUB",
    title: "1K Burner",
    description: "Burn 1000 total calories.",
    achieved: false,
    achievedAt: "2026-02-14T18:12:00.000Z",
  }
]

    return (
        <ScrollView className="flex-1 bg-background" showsVerticalScrollIndicator={false}>
            <View className='mx-4'>
                <View className="mt-8 items-center">
                    <Text className="text-2xl text-black font-mbold">Your Progress</Text>
                    <Text className="text-sm text-black mt-[-4px] font-light">Track your 100-day journey</Text>
                </View>
                <LinearGradient className='mt-8 px-4 rounded-md py-8 overflow-hidden' colors={['#E37528', '#D3600F']} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
                    <View className='flex-row justify-between'>
                        <View className=''>
                            <View className='px-2 flex-row gap-2'>
                                <FireStroke />
                                <Text className='font-semibold text-xl text-white'>0</Text>
                            </View>
                            <Text className='font-semibold text-sm text-white'>streak</Text>
                        </View>
                        <View className=''>
                            <View className='px-2 justify-end flex-row gap-2'>
                                <Text className='font-semibold text-xl text-white'>2</Text>
                            </View>
                            <Text className='font-semibold text-sm text-white'>of 100 Days</Text>
                        </View>
                    </View>
                    <View className='w-full rounded-full mt-4 h-2 bg-[#F4842F]'>
                        <View className='w-[2%] h-2 bg-[#FFFEFD] rounded-full'></View>
                    </View>
                </LinearGradient>
                <View className='flex-row rounded-full p-1 bg-[#EBEBEB] mt-6'>
                    <Pressable className={`${selectedSection === "overview" ? "bg-white" : ""} w-1/3 items-center py-2  rounded-full`} onPress={() => setSelectedSection("overview")}>
                        <Text className='font-semibold text-sm text-black'>Overview</Text>
                    </Pressable>
                    <Pressable className={`${selectedSection === "weight" ? "bg-white" : ""} w-1/3 items-center py-2  rounded-full`} onPress={() => setSelectedSection("weight")}>
                        <Text className='font-semibold text-sm text-black'>Weight</Text>
                    </Pressable>
                    <Pressable className={`${selectedSection === "awards" ? "bg-white" : ""} w-1/3 items-center py-2 rounded-full`} onPress={() => setSelectedSection("awards")}>
                        <Text className='font-semibold text-sm text-black'>Awards</Text>
                    </Pressable>
                </View>
                {selectedSection === "overview" && (
                <View>
                    <View className='mt-6 border p-6 rounded-md border-[#E5E5E5]'>
                        <View className='flex-row gap-3'>
                            <CalenderIcon />
                            <Text className='font-semibold text-sm'>Attendance Summary</Text>
                        </View>
                        <View className='flex-row justify-between mt-6'>
                            {attendance.map((item, index) => (
                                <View key={index} className='items-center w-12'>
                                    <View className={` ${item.status === "attended" ? "bg-[#01B75B]" : item.status === "missed" ? "bg-[#B70104]" : "bg-[#EBEBEB]"} py-6 w-8 items-center rounded-[3px]`}>
                                        <Text className={`font-semibold text-sm ${item.status === "upcoming" ? "text-black" : "text-white"} `}>{`${item.date}`}</Text>
                                    </View>
                                    <Text className='font-regular text-sm'>{`${item.day}`}</Text>
                            </View>
                            ))}
                        </View>
                    </View>
                    <View className='w-full flex-row justify-between mt-6'>
                        <View className='border rounded-md border-[#E5E5E5] items-center py-8 w-[47%]'>
                            <WeightDownGraph />
                            <Text className='font-semibold mt-2 text-black text-xl'>-1.9 kg</Text>
                            <Text className='font-light mt-[-4] text-sm'>Total Weight Loss</Text>
                        </View>
                        <View className='border rounded-md border-[#E5E5E5] text-black items-center py-8 w-[47%]'>
                            <Trophy />
                            <Text className='font-semibold mt-2 text-black text-xl'>2</Text>
                            <Text className='font-light mt-[-4] text-sm'>Achivements</Text>
                        </View>
                    </View>
                </View> )}
                {selectedSection === "weight" && (
                    <View className='mt-6'>
                        <View className='border rounded-sm px-6 py-4 border-[#E5E5E5]'>
                            <View className='flex-row gap-2 items-center '>
                                <WeightScale />
                                <Text className='font-semibold text-[16px]'>Enter Your Weight</Text>
                            </View> 
                            <View className='flex-row mt-6 gap-2 justify-center items-center'>
                                <TextInput placeholder='Enter Weight(kg/lbs)' keyboardType='numeric' className='bg-[#EBEBEB] rounded-sm font-semibold flex-1 text-xs py-3 px-4' />
                                <Pressable className='bg-primary rounded-sm w-[25%] py-3 items-center'>
                                    <Text className='text-white font-semibold text-xs'>Submit</Text>
                                </Pressable>
                            </View>
                            <Text className='font-regular mt-4  text-xs text-[#A22E2E]'>Note : <Text className='text-black'>Please enter your weight every Sunday</Text></Text>
                        </View>
                        <View className='border mt-4 mb-4 px-6 rounded-sm py-4 border-[#E5E5E5]'>
                            <View className='flex-row gap-2 items-center '>
                                <WeightIcon />
                                <Text className='font-semibold text-[16px]'>Weight Progress</Text>
                            </View>
                            <View className='mt-2' onLayout={(event) => {
                                const { width } = event.nativeEvent.layout;
                                setGraphWidth(width);
                            }}>
                                <WeightProgressGraph width={graphWidth} />
                            </View>
                        </View>
                    </View>
                )}
                {selectedSection === "awards" && (
                    <View className=' mt-6 gap-4'>
                        {mockAwards.map((award) => {
                            // eslint-disable-next-line import/namespace
                            const Icon = AwardIcons[award.code as keyof typeof AwardIcons];
                            return <AwardCard key={award.code} Icon={Icon} title={award.title} subTitle={award.description} achieved={award.achieved}/>;
                        })}
                    </View>
                )}
            </View>
        </ScrollView>
    );
}