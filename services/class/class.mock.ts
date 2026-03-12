type SessionWorkouts = {
  id: string
  title: string
  duration: number
  index: number
  completed: boolean
  icon: string
  videoUrl: string
}

export type SessionType = {
  id: string;
  sessionWorkouts: SessionWorkouts[];
}

export type MarkWorkoutCompletionType = {
  session_id: string;
  index: number;
}

const sessionsMock: SessionType = { id: "Session_01", 
  sessionWorkouts:[
    {
    id: "mobility",
    title: "Joint Mobility",
    duration: 8,
    index: 0,
    completed: false,
    icon: "WorkoutSessionBg1",
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  },
  {
    id: "activation",
    title: "Muscle Activation",
    duration: 7,
    index: 1,
    completed: false,
    icon: "WorkoutSessionBg2",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: "strength",
    title: "Strength Circuit",
    duration: 18,
    index: 2,
    completed: false,
    icon: "WorkoutSessionBg1",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    id: "cardio",
    title: "HIIT Finisher",
    duration: 10,
    index: 3,
    completed: false,
    icon: "WorkoutSessionBg2",
    videoUrl:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    id: "cooldown",
    title: "Stretch & Cooldown",
    duration: 6,
    index: 4,
    completed: false,
    icon: "WorkoutSessionBg1",
    videoUrl:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
  }
]}

export const classMockService = {
  getSessions: async (): Promise<SessionType> => {
    await new Promise((res) => setTimeout(res, 500));
    return sessionsMock;
  },
  markWorkoutCompleted: async ({ session_id, index }: MarkWorkoutCompletionType) => {
    await new Promise((res) => setTimeout(res, 500));
    sessionsMock.sessionWorkouts[index].completed = true
  }
};