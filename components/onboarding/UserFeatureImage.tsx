import {Image} from 'expo-image';

export default function UserFeatureImage({imageUrl}: {imageUrl: string}) {
    return (
        
        <Image source={imageUrl} style={{ width: "100%", height: "100%", borderRadius: 20
         }} contentFit="contain" />
    )
}