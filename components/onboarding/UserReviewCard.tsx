import { View, Text } from "react-native";

interface UserReviewCardProps {
  reviews: {
    id: string;
    quote: string;
    name: string;
    location: string;
  };
}

export default function UserReviewCard({ reviews }: UserReviewCardProps) {
  return (
        <View className="w-[300px] bg-white justify-between p-4 mx-2 rounded-md">
          <Text className="text-black font-regular text-sm leading-relaxed mb-4">
            {reviews.quote}
          </Text>

          <View>
            <Text className="text-primary text-sm font-semibold">
              {reviews.name}
            </Text>

            <Text className="text-[10px] text-black font-regular">
              {reviews.location}
            </Text>
          </View>
        </View>
  );
}

