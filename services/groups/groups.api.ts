import { Group } from "./groups.mock";
import { api } from "../api";

export const groupApiService = {
  async getMyGroup(): Promise<Group> {
    try {
      const response = await api.get<Group>("/group/me");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch group:", error);
      throw new Error("Unable to fetch group");
    }
  },
};