import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GroupsScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1 px-4 py-6">
                <View className="mb-6">
                    <Text className="text-3xl font-bold text-gray-900">Groups</Text>
                </View>

                <View className="space-y-4">
                    <View className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                        <Text className="text-lg font-semibold text-gray-800">Group Name</Text>
                        <Text className="mt-1 text-sm text-gray-600">Description</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}