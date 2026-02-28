import {View, Text} from 'react-native';
import MonitorCrown2 from 'assets/svgs/groups/MonitorCrown2.svg';
import StreakFlame from 'assets/svgs/groups/StreakFlame.svg';
import DayCalender from 'assets/svgs/groups/DayCalender.svg';

type Props = {
    name: string;
    isMonitor?: boolean;
    isOnline: boolean;
    streakCount: number;
    dayCount: number;
}

export default function MemberCard({name, isMonitor, isOnline, streakCount, dayCount}: Props){
    const processedName1 = name.split(" ")[1];
    const nameInitials = `${name[0]}${processedName1[0]}`
    return (
        <View className='px-6 py-4 border items-center justify-between border-[#E5E5E5] flex-row bg-white rounded-md'>
            <View className='flex-row gap-4 items-center'>
                <View className='relative'>
                    <View className='h-[50px] items-center justify-center w-[50px] rounded-full bg-[#EBEBEB]'>
                        <Text className='font-semibold text-[16px] text-black'>{nameInitials}</Text>
                    </View>
                    <View className={`h-[10px] w-[10px] ${isOnline ? 'bg-[#00E63D]' : 'bg-[#99A1AF]'} border border-white absolute bottom-0 right-2 rounded-full`}></View>
                </View>
                <View>
                    <View className='flex-row items-center gap-2'>
                        <Text className='font-semibold text-[16px] text-black'>{name}</Text>
                        {isMonitor && <MonitorCrown2 />}
                    </View>
                    <View className='flex-row gap-4'>
                        <View className='flex-row gap-2 items-center'>
                            <StreakFlame />
                            <Text className='font-regular text-xs text-black'>{streakCount} Streak</Text>
                        </View>
                        <View className='flex-row gap-2 items-center'>
                            <DayCalender />
                            <Text className='font-regular text-xs text-black'>Day {dayCount}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View className={`${isOnline ? 'bg-primary' : 'bg-[#A22E2E]'} justify-center items-center h-6 px-2 rounded-sm`}>
                <Text className='font-medium text-[10px] text-white'>{isOnline ? "Online" : "Offline"}</Text>
            </View>
        </View>
    )
}