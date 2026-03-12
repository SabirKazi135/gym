export type ProgressData = {
  streak: number
  dayOf100: number

  overview: {
    attendance: {
      date: string
      day: string
      status: "attended" | "missed" | "upcoming"
    }[]

    totalWeightChange: number
    achievementsUnlocked: number
  }

  weight: {
    currentWeight: number
    weeklyEntry?: number

    history: {
      week: number
      weight: number
    }[]
  }

  awards: {
    id: string
    title: string
    description: string
    icon: string
    achieved: boolean
    achievedAt?: string
  }[]
}

const fakeProgress: ProgressData = {
  streak: 5,

  dayOf100: 32,

  overview: {
    totalWeightChange: -1.9,

    achievementsUnlocked: 2,

    attendance: [
      {
        date: "2026-03-02",
        day: "Sun",
        status: "attended"
      },
      {
        date: "2026-03-03",
        day: "Mon",
        status: "attended"
      },
      {
        date: "2026-03-04",
        day: "Tue",
        status: "missed"
      },
      {
        date: "2026-03-05",
        day: "Wed",
        status: "attended"
      },
      {
        date: "2026-03-06",
        day: "Thu",
        status: "attended"
      },
      {
        date: "2026-03-07",
        day: "Fri",
        status: "upcoming"
      },
      {
        date: "2026-03-08",
        day: "Sat",
        status: "upcoming"
      }
    ]
  },

  weight: {
    currentWeight: 74.1,

    weeklyEntry: undefined,

    history: [
      { week: 1, weight: 76.0 },
      { week: 2, weight: 75.4 },
      { week: 3, weight: 75.0 },
      { week: 4, weight: 74.6 },
      { week: 5, weight: 74.3 },
      { week: 6, weight: 74.1 }
    ]
  },

  awards: [
    {
      id: "first_workout",
      title: "First Sweat",
      description: "Completed your first workout",
      icon: "flame",
      achieved: true,
      achievedAt: "2026-02-02"
    },
    {
      id: "streak_3",
      title: "3 Day Streak",
      description: "Workout 3 days in a row",
      icon: "bolt",
      achieved: true,
      achievedAt: "2026-02-05"
    },
    {
      id: "streak_7",
      title: "7 Day Warrior",
      description: "Workout 7 days in a row",
      icon: "trophy",
      achieved: false
    },
    {
      id: "weight_loss_2kg",
      title: "2kg Down",
      description: "Lose 2 kilograms",
      icon: "scale",
      achieved: false
    },
    {
      id: "hundred_days",
      title: "Century",
      description: "Reach day 100",
      icon: "crown",
      achieved: false
    }
  ]
}

export const progressMock = {
    async getProgress() {
            await new Promise((res) => setTimeout(res, 500));
            return fakeProgress;
        },
        async postWeight(weight: number) {
            return weight;
        }
}