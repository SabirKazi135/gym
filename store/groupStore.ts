import { create } from "zustand";
import { Group, GroupMember } from "../services/groups/groups.mock";
import { groupService } from "../services/groups";

type GroupState = {
  group: Group | null;
  members: GroupMember[];
  isLoading: boolean;

  fetchGroup: () => Promise<void>;
  setGroup: (group: Group) => void;
};

export const useGroupStore = create<GroupState>((set) => ({
  group: null,
  members: [],
  isLoading: false,

  fetchGroup: async () => {
    set({ isLoading: true });

    try {
      const group = await groupService.getMyGroup();

      set({
        group,
        members: group.members,
        isLoading: false,
      });
    } catch (error) {
      console.error("Failed to fetch group:", error);
      set({ isLoading: false });
    }
  },

  setGroup: (group) =>
    set({
      group,
      members: group.members,
    }),
}));