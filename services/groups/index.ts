import { groupMockService } from "./groups.mock";
import { groupApiService } from "./groups.api";

const USE_MOCKS = process.env.EXPO_PUBLIC_USE_MOCKS === "true";

export const groupService = USE_MOCKS
  ? groupMockService
  : groupApiService;