import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1">
                <View className="px-4 py-6">
                    <Text className="text-2xl font-bold text-gray-900 mb-4">
                        Profile
                    </Text>

                    <View className="bg-gray-100 rounded-lg p-4 mb-4">
                        <Text className="text-lg font-semibold text-gray-800 mb-2">
                            User Name
                        </Text>
                        <Text className="text-gray-600">user@example.com</Text>
                    </View>

                    <View className="space-y-3">
                        <Text className="text-base font-semibold text-gray-900">
                            Options
                        </Text>
                        <View className="bg-gray-50 rounded-lg p-4">
                            <Text className="text-gray-700">Settings</Text>
                        </View>
                        <View className="bg-gray-50 rounded-lg p-4">
                            <Text className="text-gray-700">Help</Text>
                        </View>
                        <View className="bg-gray-50 rounded-lg p-4">
                            <Text className="text-gray-700">Logout</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}