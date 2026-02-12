import { View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ClassScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1">
                <View className="px-4 py-6">
                    <Text className="text-3xl font-bold text-gray-900 mb-6">
                        Classes
                    </Text>

                    {/* Class Card */}
                    <Pressable className="bg-gray-100 rounded-lg p-4 mb-4 active:opacity-75">
                        <Text className="text-lg font-semibold text-gray-900">
                            Class Name
                        </Text>
                        <Text className="text-sm text-gray-600 mt-2">
                            Instructor: Coach Name
                        </Text>
                        <Text className="text-sm text-gray-600">
                            Time: 6:00 PM - 7:00 PM
                        </Text>
                    </Pressable>

                    {/* Add more class cards here */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}