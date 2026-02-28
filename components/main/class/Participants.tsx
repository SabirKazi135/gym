import {View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuthStore } from "@/store/useAuthStore";


type Props = {
    name: string;
    isMonitor?: boolean;
};
export default function Participants({name, isMonitor=false}: Props){
  const { user } = useAuthStore();
  const userFirstName = user?.name.split(" ")[0]
    return (
        <View className='w-[31%] items-center relative'>
            <View className='absolute right-0'>
                {isMonitor && <MonitorBadge />}
            </View>
            <LinearGradient className='h-14 mt-3 w-14 items-center justify-center rounded-full overflow-hidden' colors={['#DE6E20', '#AB5519']} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
                <Text className='font-semibold text-xl text-white'>{name[0]}</Text>
            </LinearGradient>
            <Text className='font-semibold text-xs text-black mt-2'>{userFirstName === name ? "You" : name}</Text>
        </View>
    )
}

function MonitorBadge(){
    return (
        <View className='bg-[#01A71F] rounded-full px-1'>
            <Text className='font-semibold text-[6px] text-white'>Monitor</Text>
        </View>
    )
}