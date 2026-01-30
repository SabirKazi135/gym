import {
  View,
  Text,
  Image,
  useWindowDimensions,
} from "react-native";


type Members = {
  text: string;
  description?: string;
  descriptionFont?: string;
};

type CardProps = {      
  text: string;
  members: "two" | "six";
};


function MemberAvatar({text, description, descriptionFont = "font-regular" }: Members) {
    return (    
        <View className="items-center justify-center m-2">
            <View style={{borderRadius: 3}} className="w-[30px] h-[30px] bg-primary items-center justify-center mx-1">
            <Text className="text-lg color-white font-semibold">{text}</Text>
            </View>
            {description && <Text style={{color: '#A22E2E', fontSize: 8}} className={`${descriptionFont}`}>{description}</Text>}
        </View>
    );
}

export default function GroupCard({
    text,
    members,
}: CardProps) {
    // const { width, height } = useWindowDimensions();
    // console.log(width)
    return(
        <View className="w-[45%] aspect-[3/5] bg-white rounded-md flex-col shadow-2xl items-center ">
            <Image source={require('assets/images/Group-card-img.png')} className="w-full h-3/5 rounded-tl-md rounded-tr-md" resizeMode="cover" />
            <Text style={{fontSize: 8}} className="font-medium text-center p-1">{text}</Text>
            {members === "two" ? (
                <View style={{flexDirection: 'row'}} className="rounded-bl-md rounded-br-md justify-center flex-1 w-full ">
                    <MemberAvatar text="A" description="You" />
                    <MemberAvatar text="K" description="Companion" descriptionFont="font-semibold"/>
                </View>
            ): (
                <View style={{flexDirection: 'row'}} className="flex-wrap justify-center items-center flex-1 w-full ">
                    <MemberAvatar text="A"/>
                    <MemberAvatar text="K"/>
                    <MemberAvatar text="H"/>
                    <MemberAvatar text="D"/>
                    <MemberAvatar text="J" />
                    <MemberAvatar text="M"/>
                </View>
            )}  
        </View>
    )
};


// const styles = StyleSheet.create({
//     avatarContainer: {
//         backgroundColor: '#E0E0E0',
//         width: 
//         alignItems: 'center',   
//         marginHorizontal: 5,
//     },
//     avatarText: {
//         fontSize: 16,   
//         fontWeight: 'bold',
//     },
//     avatarDescription: {
//         fontSize: 12,
//         color: 'gray',
//     },
// });