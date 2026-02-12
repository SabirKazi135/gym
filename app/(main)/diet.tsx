import { View, Text, ScrollView } from 'react-native';

export default function DietScreen() {
    return (
        <ScrollView className="flex-1 bg-white">
            <View className="p-4">
                <Text className="text-2xl font-bold mb-4">Diet</Text>
                <Text className="text-gray-600">Diet content goes here</Text>
            </View>
        </ScrollView>
    );
}