import { classApiService as api} from "./class.service";
import { classMockService as mock } from "./class.mock";

export const classService = process.env.EXPO_PUBLIC_ENABLE_MOCKS === 'true' ? mock : api