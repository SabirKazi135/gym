import { View, Text, ScrollView } from 'react-native';

export default function ProgressScreen() {
    return (
        <ScrollView className="flex-1 bg-white">
            <View className="p-4">
                <Text className="text-2xl font-bold mb-4">Progress</Text>
                
                <View className="bg-gray-100 p-4 rounded-lg mb-4">
                    <Text className="text-lg font-semibold">Your Progress</Text>
                    <Text className="text-gray-600 mt-2">Track your fitness journey</Text>
                </View>

                <View className="space-y-2">
                    {/* Add your progress content here */}
                </View>
            </View>
        </ScrollView>
    );
}