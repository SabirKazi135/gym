import React from 'react';
import { View, Text } from 'react-native';

interface UserReviewCardProps {
    quote: string;
    name: string;
    location: string;
}

export default function UserReviewCard({ 
    quote = "This app makes healthy living practical. The mix of video features and food swaps keeps me motivated daily without feeling pressured or restricted.",
    name = "Ananya Sharma",
    location = "Delhi, India"
}: UserReviewCardProps) {
    return (
        <View className="bg-white w-[45%] rounded-md p-4 shadow-lg border border-gray-100">
            <Text className="text-gray-700 font-regular text-sm leading-relaxed mb-4">
            {quote}
            </Text>
            
            <View className="gap-y-0.2">
            <Text className="text-orange-500 text-sm font-semibold">
                {name}
            </Text>
            
            <Text style={{fontSize: 10}} className="text-gray-600 font-regular">
                {location}
            </Text>
            </View>
        </View>
    );
}