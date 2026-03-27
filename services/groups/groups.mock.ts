export type MemberStatus = "online" | "offline";

export type GroupMember = {
  id: string;
  firstName: string;
  lastName: string;
  avatar?: string;

  streakCount: number;
  dayOutOf100: number;

  status: MemberStatus;

  isMonitor: boolean;
};

export type Group = {
  id: string;
  name: string;
  members: GroupMember[];
};

export const mockGroup: Group = {
  id: "group-101",
  name: "Morning Warriors",
  members: [
    {
      id: "1",
      firstName: "Alex",
      lastName: "Morgan",
      streakCount: 18,
      dayOutOf100: 34,
      status: "online",
      isMonitor: true,
    },
    {
      id: "2",
      firstName: "Jamie",
      lastName: "Lee",
      streakCount: 9,
      dayOutOf100: 22,
      status: "online",
      isMonitor: false,
    },
    {
      id: "3",
      firstName: "Chris",
      lastName: "Stone",
      streakCount: 3,
      dayOutOf100: 10,
      status: "offline",
      isMonitor: false,
    },
  ],
};

export const groupMockService = {
  async getMyGroup(): Promise<Group> {
    await new Promise((res) => setTimeout(res, 400));
    return mockGroup;
  },
};