import {View , Text, Pressable, TextInput} from 'react-native';
import NavButton from '@/components/onboarding/NavButton';
import { router } from "expo-router";
import { useState, useRef } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';


export default function UserDetail5() {
    const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Select an option');
  const input2Ref = useRef<TextInput>(null);
  const [ampm, setAmpm] = useState<'am' | 'pm'>('am');
  console.log(value);

  const options = ["6.00 AM - Morning", "7.00 AM - Morning", "8.00 AM - Morning", "6.00 PM - Evening", "7.00 PM - Evening", "8.00 PM - Evening"];
    return (
        <View className="flex-1 bg-background justify-between py-10">
            <StatusBar style="dark" />
                <View className="pt-12 w-[100%] h-[15%] px-6 overflow-x-scroll items-center">
                    <Text className="font-semibold text-xl">Preferred <Text className="text-primary">Workout</Text> Time</Text>
                    <Text className="font-light text-center text-sm">Pick your preferred exercise time to stay consistent and disciplined daily</Text>
                </View>
            <View className="gap-6 h-[70%] bg-white">
                <View className="w-full px-6 h-[100%] gap-4">
                    <View className='w-full gap-3 justify-center items-center'>
                        <Pressable onPress={() => setOpen(!open)} className=' border border-primary flex-row w-full py-4 px-4 justify-between items-center rounded-md'>
                            <Text className='font-medium text-sm'>Choose Your Workout Time</Text>
                            {open ? (
                                <Ionicons name="chevron-up-outline" size={20} color="#F97316" />
                            ) : (
                                <Ionicons name="chevron-down-outline" size={20} color="#F97316" />
                            )}
                        </Pressable>
                        {/* <Modal style={{backgroundColor: '#A22E2E'}} visible={!open} animationType="slide" className='w-full h-[30%]'>

                        </Modal> */}
                        {open && (
                            <View className='w-full px-6 rounded-md border-primary border aspect-square bg-[#A22E2E]'>
                                {options.map(option => (
                                    <Pressable key={option} onPress={() => {
                                        setValue(option)
                                    }} className='w-full h-[16.66%] justify-center border-b border-primary'>
                                        <View className='flex-row items-center justify-between'>
                                        <Text className='flex-1 font-medium text-white text-md'>{option}</Text>
                                        <View className='w-[5%] items-center justify-center aspect-square bg-white rounded-full'>
                                            {option === value && 
                                            <View className='w-[70%] aspect-square bg-primary rounded-full'></View>
                                            }
                                        </View>
                                        </View>
                                    </Pressable>
                                ))}
                            </View>
                        )}
                    </View>
                    <View className='gap-4'>
                        
                        <Text className='font-medium'>Enter your workout time </Text>
                        <View className='w-full items-center flex-row'>
                            <TextInput maxLength={2} onPress={() => setOpen(false)} onChangeText={(text) => {
                                setValue(`${text}.`);
                                if(text.length === 2) {
                                    input2Ref.current?.focus();
                                }
                            }} keyboardType='number-pad' placeholder='00' className='placeholder:text-black border border-primary rounded-md w-[15%] text-sm text-center font-medium'/>
                            <Text className='px-3'>⁚</Text>
                            <TextInput ref={input2Ref} onEndEditing={(event) => {setValue(`${value}${event.nativeEvent.text} ${ampm.toUpperCase()}`)}} maxLength={2} keyboardType='number-pad' placeholder='00' className='placeholder:text-black border border-primary rounded-md w-[15%] text-sm text-center font-medium'/>
                            <Text className='px-3'>⁚</Text>
                            
                            <AMPMPicker selectedValue={ampm} setData={setAmpm} />
                        </View>
                    </View>
                 </View>
             </View>

            <View className='w-full px-6 flex-row justify-center gap-4'>
                <NavButton title="Back" onPress={() => router.back()} width="half" rounded="full" />
                <NavButton title="Continue" to="/(onboarding)/userPremiumPlans" width="half" rounded="full" />
            </View>
        </View>
    );
}

function AMPMPicker({ setData, selectedValue }: { setData: React.Dispatch<React.SetStateAction<"am" | "pm">>, selectedValue: "am" | "pm" }) {
    // const [selectedValue, setSelectedValue] = useState("am");

    const [open, setOpen] = useState(false);
    return (
        <Pressable onPress={() => setOpen(!open)} className='border relative border-primary w-[18%] px-2 py-3 flex-row justify-between rounded-md items-center'>
            <Text className='font-medium'>{selectedValue.toUpperCase()}</Text>
            {open ? (
                <Ionicons name="chevron-up-outline" size={16} color="#F97316" />
            ) : (
                <Ionicons name="chevron-down-outline" size={16} color="#F97316" />
            )}
            {open && (
                <View className='absolute top-12 bg-white border border-primary rounded-md w-[100%] z-10'>
                    <Pressable onPress={() => {
                        setData("am");
                        setOpen(false);
                    }} className='w-full px-2 py-2 border-b border-primary'>
                        <Text className='font-medium'>AM</Text>
                    </Pressable>
                    <Pressable onPress={() => {
                        setData("pm");
                        setOpen(false);
                    }} className='w-full px-2 py-2'>
                        <Text className='font-medium'>PM</Text>
                    </Pressable>
                </View>
            )}
        </Pressable>
    );
}