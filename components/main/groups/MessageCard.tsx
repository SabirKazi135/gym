import {View, Text} from 'react-native';
import MonitorCrown2 from 'assets/svgs/groups/MonitorCrown2.svg';

type Props = {
    name: string;
    isMonitor?: boolean;
    message: string;
    time: string;
}

export default function MessageCard({name, time, isMonitor=false, message}: Props){
    const processedName1 = name.split(" ")[1];
    const nameInitials = `${name[0]}${processedName1[0]}`
    return (
        <View className='border items-center gap-3 flex-row px-6 py-3 rounded-sm border-[#E5E5E5]'>
            <View className='bg-primary justify-center h-[45px] items-center w-[45px] rounded-full'>
                <Text className='text-white font-semibold text-sm'>{nameInitials}</Text>
            </View>
            <View>
                <View className='flex-row gap-2'>
                    <Text className='font-semibold text-xs text-black'>{name}</Text>
                    {isMonitor && <MonitorCrown2 />}
                    <Text className='font-light ml-1 text-black text-[10px]'>{time}</Text>
                </View>
                <Text className='font-medium text-[12px]'>{message}</Text>
            </View>
        </View>
    )
}