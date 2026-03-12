import {progressService as api} from './progress.service';
import {progressMock as mock} from './progress.mock';

export const progressService = process.env.EXPO_PUBLIC_ENABLE_MOCKS === "true" ? mock : api;