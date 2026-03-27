import {View, Text} from 'react-native';
import ToArrow from 'assets/svgs/diet/ToArrow.svg';

type Props = {
    previous: string;
    alternative: string;
    description: string;
}

export default function SwapBoard({previous, alternative, description}: Props){
    return (
        <View className='bg-[#EBEBEB] px-6 py-4 rounded-sm'>
            <View className='flex-row flex-wrap gap-4 items-center'>
                <View className='bg-[#FFEAEA] px-2 rounded-full py-1'>
                    <Text className='text-[#CA2A2A] font-medium text-xs'>{previous}</Text>
                </View>
                <ToArrow />
                <View className='bg-[#C3FFD9] px-2 rounded-full py-1'>
                    <Text className='font-medium text-xs text-[#15704E]'>{alternative}</Text>
                </View>
            </View>
            <Text className='font-regular text-sm text-black mt-3'>{description}</Text>
        </View>
    )
}