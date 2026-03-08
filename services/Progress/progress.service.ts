import {api} from '../api';
import { ProgressData } from './progress.mock';

export const progressService = {
    getProgress: async(): Promise<ProgressData> => {
        const {data} = await api.get('/progress');
        return data
    },
    async postWeight(weight: number) {
        return await api.post('/progress',weight);
    }
}