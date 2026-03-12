import {View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuthStore } from "@/store/useAuthStore";


type Props = {
    name: string;
    isMonitor?: boolean;
    children: React.ReactNode;
    showCameraFeed: boolean;
};
const Participants: React.FC<Props> = ({children, name, isMonitor=false, showCameraFeed}) => {
  const { user } = useAuthStore();
  const actualUserFirstName = user?.name.split(" ")[0];
  const userFirstName = name.split(" ")[0];
  const adjustedName = name.length > 7 ? (name.slice(0, 8) + "...") : name;
  
    return (
        <View className='w-[100%] h-31 items-center relative'>
            <View className='absolute right-0'>
                {isMonitor && <MonitorBadge />}
            </View>
            <View className='h-[75%] w-[80%] rounded-full overflow-hidden'>
                {showCameraFeed ? children : (
                    <LinearGradient className='h-[100%] w-[100%] items-center justify-center rounded-full' colors={['#DE6E20', '#AB5519']} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
                        <Text className='font-semibold text-xl text-white'>{name[0]}</Text>
                    </LinearGradient>
                )}
                {/* { showCameraFeed && children} */}
                </View>
            <Text className='font-semibold text-xs text-black mt-2'>{actualUserFirstName === userFirstName ? "You" : adjustedName}</Text>
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

export default Participants;