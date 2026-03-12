import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

export type Video = {
  url: string
}

type PlayerStateType = {
  playlist: Video[]
  currentIndex: number
  isPlaying: boolean
  position: number
  isFullScreen: boolean

  loadVideos: (videos: Video[]) => void
  next: () => void
  play: () => void
  pause: () => void
  setPosition: (position: number) => void
  setIsFullScreen: (value: boolean) => void
}

export const useVideoPlayerStore = create<PlayerStateType>()(
  persist(
    (set, get) => ({
      playlist: [],
      currentIndex: 0,
      isPlaying: false,
      position: 0,
      isFullScreen: false,

      loadVideos: (videos) =>
        set({
          playlist: videos,
          currentIndex: 0,
          isPlaying: true,
          position: 0
        }),

      play: () => set({ isPlaying: true }),

      pause: () => set({ isPlaying: false }),

      setPosition: (position) => set({ position }),

      setIsFullScreen: (value : boolean) => set({isFullScreen: value}),

      next: () => {
        const { currentIndex, playlist } = get()

        if (currentIndex < playlist.length - 1) {
          set({
            currentIndex: currentIndex + 1,
            position: 0
          })
        }
      }
    }),
    {
      name: "player-store",
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)