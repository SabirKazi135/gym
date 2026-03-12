import { Pressable, View } from "react-native"

type ToggleButtonProps<T extends string> = {
    toggleKey: T
  value: boolean
  onChange: (key: T, value: boolean) => void
}

export default function ToggleButton<T extends string>({ toggleKey, value, onChange }: ToggleButtonProps<T>) {
  return (
    <Pressable onPress={() => onChange(toggleKey, !value)} className={`h-7 w-12 rounded-full ${value ?  'bg-primary' : 'bg-[#6E6E6E]'} ${value ?  'items-end' : ''} justify-center p-1`}>
        <View className='h-5 w-5 rounded-full bg-white'></View>
    </Pressable>
  )
}