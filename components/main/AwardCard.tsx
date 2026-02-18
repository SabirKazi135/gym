import { View, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';

type AwardCardProps = {
    title: string;
    subTitle: string;
    Icon: React.FC<SvgProps>;
    achieved: boolean;
}

export default function AwardCard({Icon, title, subTitle, achieved}: AwardCardProps) {
    return (
        <View className={`border rounded-md border-[#E5E5E5] p-4`}>
            <View className='flex-row gap-2 items-center'>
                <View className='pr-4'>
                    <Icon width={25} height={25} />
                </View>
                <View>
                    <Text className={`font-semibold ${achieved ? 'text-black': 'text-[#A3A3A3]'} text-sm`}>{title}</Text>
                    <Text className={`font-light ${achieved ? 'text-black': 'text-[#A3A3A3]'} text-xs`}>{subTitle}</Text>
                </View>
            </View>
        </View>
    )
}