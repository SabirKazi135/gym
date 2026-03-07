import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persist, createJSONStorage} from 'zustand/middleware';

export enum BlurLevel {
    Low = "low",
    Medium = "medium",
    High = "high",
    None = "none"
}

type settingsState = {
    notifications: {
        classReminders: boolean
        streakUpdates: boolean
        groupMessages: boolean
        weeklyProgress: boolean
    },
    classSettings: {
        autojoinClass: boolean
        defaultBlurLevel: BlurLevel
        preferredTimeSlot: string
    },
    updateNotificationSettings: (key: keyof settingsState['notifications'], value: boolean  ) => void
    updateClassSettings: <K extends keyof settingsState["classSettings"]>(key: K, value: settingsState["classSettings"][K]) => void
}

export const useSettingsStore = create<settingsState>()(
    persist(
        set => ({
        notifications: {
            classReminders: true,
            streakUpdates: false,
            groupMessages: true,
            weeklyProgress: false,
        },
        classSettings: {
            autojoinClass: true,
            defaultBlurLevel: BlurLevel.Medium,
            preferredTimeSlot: "08:00 AM",
        },
    
        updateNotificationSettings: (key, value) => {
            set((state) => ({
          notifications: {
            ...state.notifications,
            [key]: value,
          },
        }))
        },
    
        updateClassSettings(key, value) {
            set((state) => ({
                classSettings:{
                    ...state.classSettings,
                    [key]: value,
                }
            }))
        },
        
    }),
    {
        name: 'app_settings_default',
        storage: createJSONStorage(() => AsyncStorage)
    }
    )
)